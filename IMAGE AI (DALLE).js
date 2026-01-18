app.post("/image", async (req, res) => {
  const { prompt } = req.body;

  const image = await openai.images.generate({
    model: "gpt-image-1",
    prompt,
    size: "1024x1024"
  });

  res.json({ url: image.data[0].url });
});
