import express from "express";
import cors from "cors";
import "dotenv/config";

const app = express();
const PORT = process.env.PORT;

const corsOptions = {
  origin: process.env.FRONTEND_URL,
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
};

app.use(cors(corsOptions));
app.use(express.json());

app.post("/api/data/save", (req, res) => {
  if (req.body) {
    console.log(req.body);
    return res.status(201).send({ message: "Data Saved" });
  } else {
    return res
      .status(500)
      .send({ message: "There is a problem in saving your data" });
  }
});

app.listen(PORT, () => console.log("Server started at port " + PORT));
