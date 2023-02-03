const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./db/mongodb");
const productRoute = require("./routes/productRoutes");
const imageRoute = require("./routes/imageRoute")
const cors = require("cors");

dotenv.config();
connectDB();


const app = express();
app.use(cors());

app.use(express.json());

app.use("/api/products", productRoute);
app.use("/", imageRoute )



const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`listening to port ${PORT}`);
});