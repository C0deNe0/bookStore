import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import http from "http"
const app = express();

app.use(express.json());
app.use(cors());


app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});