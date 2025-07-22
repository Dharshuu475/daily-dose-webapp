// script.js

const quotes = [
  "✨ Believe in yourself and all that you are. ✨",
  "🌈 You are capable of amazing things.",
  "💪 Push yourself, because no one else is going to do it for you.",
  "🌟 You are stronger than you think.",
  "💖 Progress, not perfection.",
  "☀️ One small positive thought can change your whole day.",
  "🔥 Don’t stop until you’re proud!",
  "🌼 Be the reason someone smiles today.",
  "🦋 Growth is a process, trust it.",
  "💫 Keep shining, your light is beautiful."
];

function showQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quoteDiv = document.getElementById('quote');
  quoteDiv.textContent = quotes[randomIndex];
}
