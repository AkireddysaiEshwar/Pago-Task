import express from "express";
import mongoose from "mongoose";

const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://Eshwar:Eshwar003@cluster0.l1qmrvd.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen(5000, () => {
      console.log("Listening To Port 5000");
    });
  })
  .then(() => {
    console.log("Connect to database");
  })
  .catch((err) => {
    console.log("error", err);
  });

//replace your DataBase url....!
