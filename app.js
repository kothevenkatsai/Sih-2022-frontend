const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const app = express();

dotenv.config({ path: "./config.env" });

require("./db/conn");

app.use(express.json());
app.use(cookieParser());
app.use(require("./router/auth"));

const start = (port) => {
  try {
    app.listen(port, () => {
      console.log(`Api up and running at: http://localhost:${port}`);
    });
  } catch (error) {
    console.error(error);
    process.exit();
  }
};
start(process.env.PORT);
