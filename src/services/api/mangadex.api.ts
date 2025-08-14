import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const mangadex = axios.create({
  baseURL: process.env.MANGADEX_API_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export default mangadex;
