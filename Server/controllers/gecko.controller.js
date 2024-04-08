import express from "express";
import axios from "axios";
import { coinNames } from "./data/coinNames.js";

const router = express.Router();

const coinIds = coinNames.join(",");

let financialsData = [];

router.get("/getData", (req, res) => {
    res.json(financialsData);
});

router.post("/updateData", async (req, res) => {
    try {
        // Await the response from Axios call
        const response = await axios.get("https://api.coingecko.com/api/v3/coins/markets", {
            params: {
                vs_currency: "usd",
                ids: coinIds,
            }
        });

        // Process the response
        financialsData = response.data.map(coin => ({
            name: coin.name,
            image: coin.image,
            percentage: coin.price_change_percentage_24h
        }));

        // Send the processed data as response
        // send a message string to the client saying success so i can access
        res.json({ message: "success" });
    } catch (error) {
        // Handle errors
        console.error(error);
        res.status(500).send("An error occurred while fetching the data in gecko.controller.js UpdateData");
    }
});

export default router;