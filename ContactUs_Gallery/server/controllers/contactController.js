exports.submitContact = (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields required." });
  }
  console.log("Contact received:", { name, email, message });
  res.status(200).json({ message: "Message received!" });
};
