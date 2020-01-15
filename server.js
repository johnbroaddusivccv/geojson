const path = require("path");
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

//  loading enviroment variables
dotenv.config({ path: "./config/config.env" });

const app = express();

// Body parser
app.use(express.json());

// enable cors
app.use(cors());

app.get("/api/v1/stores", (req, res) => {
  res.send("hello");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`Server runnning in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
