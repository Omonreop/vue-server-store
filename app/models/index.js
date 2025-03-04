const mongoose = require("mongoose");
const dbConfig = require("../../config/dbconfig");

mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.products = require("./productModel")(mongoose);
db.orders = require("./orderModel")(mongoose);

module.exports = db;
