import express from "express";
const app = express();

app.use(express.json());

import cors from "cors";
import "dotenv/config";

const PORT = process.env.PORT;

const corsOptions = {
    origin: process.env.FRONTEND_URL,
    methods:["GET", "POST", "PUT", "PATCH", "DELETE"],
};
app.use(cors(corsOptions));

app.post("/api/v1/data/save", (req, res) => {
    if(req.body){
        console.log(req.body);
     res.status(201).send({message: "Data saved"});
    }
    else{
        return res.status(500).send({message: "Error"});
    }
})

app.listen(PORT, () => console.log("server is up at port - http://localhost:" + PORT));