const users = [];

app.post("/signup", (req, res) => {
  const { email, password } = req.body;
  users.push({ email, password });
  res.json({ success: true });
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email && u.password === password);
  res.json({ success: !!user });
});
