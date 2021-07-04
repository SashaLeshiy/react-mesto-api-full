const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const auth = require('../middlewares/auth');

const {
  getUsers,
  getUserId,
  changeProfile,
  changeAvatar,
  getUser,
} = require('../controllers/users');

const API_PATH = '/api';

// const { API_PATH } = process.env;

router.get(`${API_PATH}/users`, auth, getUsers);
router.get(`${API_PATH}/users/me`, auth, getUser);
router.get(`${API_PATH}/users/:userId`, auth, celebrate({
  params: Joi.object().keys({
    userId: Joi.string().hex().length(24),
  }),
}), getUserId);

router.patch(`${API_PATH}/users/me`, auth, celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    about: Joi.string().required().min(2).max(30),
  }),
}), changeProfile);

router.patch(`${API_PATH}/users/me/avatar`, auth, celebrate({
  body: Joi.object().keys({
    avatar: Joi.string().required().regex(/^(http|https):\/\/(www\.)?([\da-z.-]+)\.([a-z.]{2,6})([/\w\-._~:/?#[\]@!$&'()*+,;=]*)*#?$/),
  }),
}), changeAvatar);

module.exports = router;
