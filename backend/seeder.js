import mongoose from "mongoose";
import dotenv from "dotenv"; // need mongo uri from .env file
import colors from "colors";
import users from "./data/users.js";
import products from "./data/products.js";
import User from "./models/userModel.js";
import Product from "./models/productModel.js";
import Order from "./models/orderModel.js";
import connectDB from "./config/db.js";

dotenv.config();

connectDB();
 //import data to database
 
const importData = async () => {          
    try {
        await Order.deleteMany();
        await User.deleteMany();
        await Product.deleteMany();

        const createdUsers = await User.insertMany(users); //insertMany is a mongoose method

        const adminUser = createdUsers[0]._id; //the first user is the admin

        const sampleProducts = products.map((product) => {
            return { ...product, user: adminUser };

        });

        await Product.insertMany(sampleProducts);

        console.log("Data Imported!".green.inverse);
        process.exit();

    } catch (error) {
        console.error(`${error}`.red.inverse);
        process.exit(1);
    }
    
}

//destroy data from database
const destroyData = async () => {
    try {
        await Order.deleteMany();
        await User.deleteMany();
        await Product.deleteMany();

        console.log("Data Destroyed!".red.inverse);
        process.exit();

    } catch (error) {
        console.error(`${error}`.red.inverse);
        process.exit(1);
    }
    
};

if (process.argv[2] === "-d") {
    destroyData();
}
else {
    importData();
}
// Run the following command in the terminal to import/destroy the data