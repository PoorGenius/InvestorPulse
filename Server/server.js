import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import geckRoutes from "./controllers/gecko.controller.js";


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;


app.use(express.json());
app.use(cors());

app.use("/api/gecko", geckRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})