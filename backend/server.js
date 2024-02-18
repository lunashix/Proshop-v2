import express from 'express';
import products from './data/products.js';
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js';

const port = process.env.PORT || 5000; //backend port set 5000

connectDB();//connect to the database

const app = express();

app.get('/', (req, res) => {
  res.send('API is running...');
});

app.use('/api/products', productRoutes);

    
app.listen(port, () => {console.log(`Server running on port ${port}`);

});