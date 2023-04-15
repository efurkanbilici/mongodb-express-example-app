import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import pino from "pino";
import { dbConfig } from "./utils.js";
import routes from "./routes/index.js";

const port = process.env.SERVER_PORT || 3000;
const app = express();
const logger = pino();

app.use(express.json());
app.use("/api", routes);

async function connectToDb() {
  try {
    const connStr = `mongodb+srv://${dbConfig.user}:${dbConfig.pass}@${dbConfig.cluster}/${dbConfig.name}?retryWrites=true&w=majority`;

    await mongoose.connect(connStr, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    return "Connected to database";
  } catch (e) {
    logger.error(e);
  }
}

app.get("/", (req, res) => {
  res.json({
    message: "Hi, app started!",
    desc: "this is an example project for learning mongodb and express!",
  });
});

app.listen(port, () => {
  connectToDb().then((res) => logger.info(res));
  logger.info(`App listening at http://localhost:${port}`);
});
