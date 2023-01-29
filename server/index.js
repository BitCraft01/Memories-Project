import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";

import postRoutes from "./routes/posts.js";

const app = express();

app.use("/posts", postRoutes);

app.use(bodyParser.json({ limit: "30mo", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mo", extended: true }));
app.use(cors());

const CONNECTION_URL =
  "mongodb+srv://Bitcraft01:Z4Z6Mlj7hXnPpWfe@cluster0.4smudvd.mongodb.net/?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose.set("strictQuery", false);
mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => console.log(`Server is runnning on port: ${PORT}`))
  )
  .catch((error) => console.log(error.message));
