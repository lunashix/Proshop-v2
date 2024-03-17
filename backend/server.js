import path from 'path';
import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
dotenv.config();
import connectDB from './config/db.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js'; //importing the error middleware
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import uploadRoutes from './routes/uploadRoutes.js';


const port = process.env.PORT || 5000; //backend port set 5000

connectDB();//connect to the database

const app = express();

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Cookie parser middleware
app.use(cookieParser());

app.get('/', (req, res) => {
  res.send('API is running...');
});

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/upload', uploadRoutes);

app.get('/api/config/paypal', (req, res) => res.send({ clientId: process.env.PAYPAL_CLIENT_ID }));
// 为了不让前端出现具体的id所以单独存储在.env文件中

const __dirname = path.resolve(); // we need to set to current directory name
app.use('/uploads', express.static(path.join(__dirname, '/uploads'))); //make the uploads folder static

app.use(notFound); //use the notFound middleware
app.use(errorHandler); //use the errorHandler middleware

    
app.listen(port, () => {console.log(`Server running on port ${port}`);

});