const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const auth = require('../middlewares/auth');

const { API_PATH } = process.env;

const {
  getUsers,
  getUserId,
  changeProfile,
  changeAvatar,
  getUser,
} = require('../controllers/users');

router.get('/', auth, getUsers);
router.get(`/me`, auth, getUser);
router.get(`/:userId`, auth, celebrate({
  params: Joi.object().keys({
    userId: Joi.string().hex().length(24),
  }),
}), getUserId);

router.patch('/me', auth, celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30),
    about: Joi.string().min(2).max(30),
  }),
}), changeProfile);

router.patch('/avatar', auth, celebrate({
  body: Joi.object().keys({
    avatar: Joi.string().regex(/^(http|https):\/\/(www\.)?([\da-z.-]+)\.([a-z.]{2,6})([/\w\-._~:/?#[\]@!$&'()*+,;=]*)*#?$/),
  }),
}), changeAvatar);

module.exports = router;
