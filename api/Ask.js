import axios from "axios";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Only POST allowed" });
  }

  try {
    const { input } = req.body;

    // API key ve endpoint
    const API_KEY = "AIzaSyBbNcF5nqCqOfNb_2_hu2TjHWcJFyTu8I4";
    const API_URL = "https://api.ai.studio/v1/gen-lang-client-0662201126:generateContent";

    const response = await axios.post(
      API_URL,
      { prompt: input },
      { headers: { Authorization: `Bearer ${API_KEY}` } }
    );

    const text = response.data.output || "Yanıt yok";

    res.status(200).json({ output: text });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Backend error" });
  }
}
