const jwt = require('jsonwebtoken');

require('dotenv').config();

const { JWT_SECRET } = process.env;

module.exports = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization || !authorization.startsWith('Bearer ')) {
    const err = new Error();
    err.statusCode = 401;
    err.message = 'Необходима авторизация';
    next(err);
    // return res.status(401).send({ message: 'Необходима авторизация' });
  }
  const token = authorization.replace('Bearer ', '');
  let payload;
  try {
    payload = jwt.verify(token, JWT_SECRET);
  } catch (err) {
    next(err);
    // return res.status(401).send({ message: 'Необходима авторизация' });
  }
  req.user = payload;
  next();
  return req.user;
};
