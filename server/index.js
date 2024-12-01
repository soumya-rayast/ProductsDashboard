const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const productRoutes = require('./src/routes/productRoutes.js');
const { connectDB } = require('./src/config/dbConnect.js');

dotenv.config();

// Initialize Express app
const app = express();

// middleware
app.use(cors());
app.use(express.json());

// connect to the database
connectDB();

// product routes
app.use('/api/products', productRoutes);

// Starting the server
// Initialize the PORT

const port = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is running at port ${port}`)
})