import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './config/db.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js'; //importing the error middleware
import productRoutes from './routes/productRoutes.js';

const port = process.env.PORT || 5000; //backend port set 5000

connectDB();//connect to the database

const app = express();

app.get('/', (req, res) => {
  res.send('API is running...');
});

app.use('/api/products', productRoutes);

app.use(notFound); //use the notFound middleware
app.use(errorHandler); //use the errorHandler middleware

    
app.listen(port, () => {console.log(`Server running on port ${port}`);

});