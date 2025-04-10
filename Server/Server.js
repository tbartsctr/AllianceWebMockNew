const dotenv = require('dotenv');
dotenv.config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const productRoutes = require("./ProductRoutes");
const userRoutes = require("./UserRoutes");

const app = express();

app.get("/", (req, res) => {
  res.send("Server is running!");
});

app.use(cors());
app.use(express.json());
app.use("/api/users", userRoutes);
app.use("/api/products", (req, res, next) => {
  console.log("Request made to /api/products");  
  next();
});

app.use("/api/products", productRoutes);

mongoose.connect("mongodb+srv://tbartsctr:Tuckfuck17@cluster1.itf8h.mongodb.net/PSFinalDB" , {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("MongoDB connected!"))
    .catch((err) => console.log("Error connecting to MongoDB:", err));

    const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
