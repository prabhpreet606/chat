const res = await fetch("http://localhost:3000/image", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ prompt: "a futuristic AI robot" })
});

const data = await res.json();
document.body.innerHTML += `<img src="${data.url}" />`;