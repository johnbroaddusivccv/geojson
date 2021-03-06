const path = require("path");
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

// load env var
dotenv.config({ path: "./config/config.env" });

const app = express();

// Connect to database
connectDB();

// Body parser
app.use(express.json());

// Enable cors
app.use(cors());

// Routes
app.use("/api/v1/stores", require("./routes/stores"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`server running ${process.env.NODE_ENV} mode on port ${PORT}`)
);
