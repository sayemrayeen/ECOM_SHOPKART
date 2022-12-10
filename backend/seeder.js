import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";
import users from "./data/users.js";
import products from "./data/Products.js";
import User from "./models/userModel.js";
import Order from "./models/orderModel.js";
import Product from "./models/productModel.js";
import connectDB from "./config/db.js";

dotenv.config();

connectDB();

const importData = async () => {
  try {
    //Will delete existing data
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    // will add data as in data folder for inserting data
    const createUser = await User.insertMany(users);

    // stores the first one's id in admin
    const adminUser = createUser[0]._id;

    // map admin id in every product as user id
    const sampleProducts = products.map((product) => {
      return { ...product, user: adminUser };
    });

    // add sample product in db
    await Product.insertMany(sampleProducts);

    console.log("Data Importated!".green.inverse);
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    console.log("Data Destroyed!".red.inverse);
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
