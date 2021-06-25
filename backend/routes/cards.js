const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const auth = require('../middlewares/auth');

const {
  getCards,
  getCardId,
  createCard,
  deleteCard,
  likeCard,
  dislikeCard,
} = require('../controllers/cards');

router.get('/api/cards', auth, getCards);
router.get('/api/cards/:cardId', auth, celebrate({
  params: Joi.object().keys({
    cardId: Joi.string().hex().length(24),
  }),
}), getCardId);
router.post('/api/cards', auth, celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30),
    link: Joi.string().regex(/^(http|https):\/\/(www\.)?([\da-z.-]+)\.([a-z.]{2,6})([/\w\-._~:/?#[\]@!$&'()*+,;=]*)*#?$/),
  }),
}), createCard);

router.delete('/api/cards/:cardId', auth, celebrate({
  params: Joi.object().keys({
    cardId: Joi.string().hex().length(24),
  }),
}), deleteCard);

router.put('/api/cards/:cardId/likes', auth, celebrate({
  params: Joi.object().keys({
    cardId: Joi.string().hex().length(24),
  }),
}), likeCard);
router.delete('/api/cards/:cardId/likes', auth, celebrate({
  params: Joi.object().keys({
    cardId: Joi.string().hex().length(24),
  }),
}), dislikeCard);
module.exports = router;
