const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { celebrate, Joi, errors } = require('celebrate');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const users = require('./routes/users');
const cards = require('./routes/cards');
const { login, createUser } = require('./controllers/users');

require('dotenv').config();

const { PORT, MONGO_URI, API_PATH } = process.env;

console.log(MONGO_URI, API_PATH);

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

app.use(requestLogger);
app.post(`/api/sign-in`, celebrate({
  body: Joi.object().keys({
    email: Joi.string().required(),
    password: Joi.string().required(),
  }),
}), login);

app.post(`/api/sign-up`, celebrate({
  body: Joi.object().keys({
    email: Joi.string().required(),
    password: Joi.string().required(),
  }),
}), createUser);

app.use(`/api/users`, users);
app.use(`/api/cards`, cards);

app.use((req, res) => {
  res.status(404).send({ message: 'Ресурс не найден' });
});

app.use(errorLogger);

app.use(errors());

app.use((err, req, res, next) => {
  if (err.name === 'CastError') {
    return res.status(400).send({ message: 'Некорректный _id' });
  }
  if (err.name === 'ValidationError' || err.statusCode === 400) {
    return res.status(400).send({ message: 'Отправлены неверные данные' });
  }
  if (err.statusCode === 404) {
    return res.status(404).send({ message: 'Не найдено' });
  }
  if (err.name === 'MongoError' && err.code === 11000) {
    return res.status(409).send({ message: 'Данный email зарегистрирован' });
  }
  if (err.statusCode === 401 || err.statusCode === 420) {
    return res.status(401).send({ message: 'Неверно указаны почта или пароль' });
  }
  if (err.statusCode === 403) {
    return res.status(403).send({ message: 'Нет доступа' });
  }
  next();
  return res.status(500).send({ message: 'На сервере произошла ошибка' });
});

app.listen(PORT, () => {
  console.log(`Сервер на порту ${PORT}`);
});


