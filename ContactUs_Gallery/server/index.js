const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/contact", require("./routes/contact"));
app.use("/gallery", require("./routes/gallery"));

const PORT = 5000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
