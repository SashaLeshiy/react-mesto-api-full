const Card = require('../models/card');

module.exports.getCards = (req, res, next) => {
  Card.find({})
    .then((cards) => res.send(cards))
    .catch((err) => {
      next(err);
    });
};

module.exports.getCardId = (req, res, next) => {
  Card.findById(req.params.id)
    .then((card) => {
      if (!card) {
        const err = new Error();
        err.statusCode = 404;
        next(err);
      } else {
        res.send(card);
      }
    })
    .catch((err) => {
      next(err);
    });
};

module.exports.createCard = (req, res, next) => {
  const { name, link } = req.body;
  const owner = req.user._id;

  Card.create({ name, link, owner })
    .then((card) => res.send(card))
    .catch((err) => {
      next(err);
    });
};

module.exports.deleteCard = (req, res, next) => {
  Card.findById(req.params.cardId)
    .then((card) => {
      if (!card) {
        const err = new Error();
        err.statusCode = 404;
        next(err);
      }
      return card;
    })
    .then((card) => {
      if (JSON.stringify(card.owner) !== JSON.stringify(req.user._id)) {
        const err = new Error();
        err.statusCode = 403;
        next(err);
      } else {
        Card.findByIdAndRemove(req.params.cardId)
          .then(() => {
            res.send({ message: `Карточка ${req.params.cardId} удалена` });
          })
          .catch(() => {
            next();
          });
      }
    })
    .catch(() => {
      next();
    });
};

module.exports.likeCard = (req, res, next) => {
  Card.findByIdAndUpdate(req.params.cardId,
    { $addToSet: { likes: req.user._id } },
    { new: true })
    .then((card) => {
      if (!card) {
        const err = new Error();
        err.statusCode = 404;
        next(err);
      } else {
        res.send(card);
      }
    })
    .catch((err) => {
      next(err);
    });
};

module.exports.dislikeCard = (req, res, next) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $pull: { likes: req.user._id } },
    { new: true },
  )
    .then((card) => {
      if (!card) {
        const err = new Error();
        err.statusCode = 404;
        next(err);
      } else {
        res.send(card);
      }
    })
    .catch((err) => {
      next(err);
    });
};
