module.exports = (app) => {
  const orders = require("../controllers/orderController");
  const router = require("express").Router();

  router.get("/user/:id", orders.findOrder);
  router.post("/update/user/:id", orders.addToCart);
  router.delete("/delete/user/:id/product/:code", orders.removeFromCart);

  app.use("/api/orders", router);
};
