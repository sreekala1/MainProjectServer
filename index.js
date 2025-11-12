const { GoogleGenAI } = require("google-genai");
const ai = new GoogleGenAI({
    apiKey: "AIzaSyD-3hYk1bXH5k3b8v4n8g8g8g8g8g8g8g"
});
async function main() {
    const response = await ai.chat.completions.create({
        model: "gemini-2.0-flash",
        contents: "Explain the theory of relativity in simple terms.",
        maxOutputTokens: 256,
        temperature: 0.7
    });
    console.log(response.choices[0].message.content);
}