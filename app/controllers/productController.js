const db = require("../models");
const Product = db.products;

exports.findAll = (req, res) => {
  Product.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};
exports.findOne = (req, res) => {
  Product.findOne({
    code: req.params.id,
  })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};
