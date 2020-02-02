import axios from "axios";

export const api = axios.create({
  baseURL: "https://opentdb.com",
  timeout: 30000,
  headers: {
    "Content-Type": "application/json"
  }
});

export const getQuestions = () =>
  api.get("/api.php?amount=10&difficulty=hard&type=boolean");

export default api;
