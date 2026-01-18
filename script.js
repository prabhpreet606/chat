let chatHistory = [];

async function sendMessage() {
  const input = userInput.value.trim();
  if (!input) return;

  addMessage(input, "user");
  chatHistory.push({ role: "user", content: input });
  userInput.value = "";

  const res = await fetch("http://localhost:3000/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      message: input,
      history: chatHistory
    })
  });

  const data = await res.json();
  addMessage(data.reply, "ai");

  chatHistory.push({ role: "assistant", content: data.reply });
}
