const express = require("express");
const bodyParser = require("body-parser");
const db = require("./models/index");

const { PORT } = require("./config/serverConfig");
const ApiRoutes = require("./routes/index");

const setupAndStartServer = async () => {
  //create express object
  const app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use("/api", ApiRoutes);

  app.listen(PORT, () => {
    // if (process.env.DB_SYNC) {
    //   db.sequelize.sync({ alter: true });
    // }
    console.log(`Server started at ${PORT}`);
  });
};

setupAndStartServer();
