const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const PORT = process.env.PORT || 8000;

let corsOptions = {
  origin: "http://localhost:5174",
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/img", express.static(path.join(__dirname, "./public/img")));

const db = require("./app/models");
db.mongoose
  .connect(db.url)
  .then((result) => {
    console.log("Connected to the database!");
  })
  .catch((err) => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to vuestroe-server",
  });
});

require("./app/routes/productRoute")(app);
require("./app/routes/orderRoute")(app);

app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
