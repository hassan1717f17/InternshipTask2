import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Product from './models/productModel.js';

dotenv.config();
mongoose.connect(process.env.MONGODB_URI);

const products = [
  { name: 'Gym T-shirt', category: 'Apparel', price: 19.99, imageUrl: '/assets/apparel1.jpg' },
  { name: 'Yoga Pants', category: 'Apparel', price: 29.99, imageUrl: '/assets/apparel2.jpg' },
  { name: 'Workout Shorts', category: 'Apparel', price: 24.99, imageUrl: '/assets/apparel3.jpg' },
  { name: 'Weightlifting Gloves', category: 'Accessories', price: 14.99, imageUrl: '/assets/accessory1.jpg' },
  { name: 'Water Bottle', category: 'Accessories', price: 9.99, imageUrl: '/assets/accessory2.jpg' },
  { name: 'Resistance Bands', category: 'Accessories', price: 19.99, imageUrl: '/assets/accessory3.jpg' },
  { name: 'Whey Protein', category: 'Supplements', price: 49.99, imageUrl: '/assets/supplement1.jpg' },
  { name: 'Pre-Workout Powder', category: 'Supplements', price: 39.99, imageUrl: '/assets/supplement2.jpg' },
  { name: 'Creatine Monohydrate', category: 'Supplements', price: 34.99, imageUrl: '/assets/supplement3.jpg' },
];

const seedData = async () => {
  try {
    await Product.deleteMany();
    await Product.insertMany(products);
    console.log('Data seeded successfully');
    process.exit();
  } catch (error) {
    console.error('Error seeding data', error);
    process.exit(1);
  }
};

seedData();
