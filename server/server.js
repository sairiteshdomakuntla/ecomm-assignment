const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/product-recommender', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// User Data Schema
const userDataSchema = new mongoose.Schema({
  userId: { type: String, required: true, default: 'dummy-user' },
  cart: [{
    type: mongoose.Schema.Types.Mixed,
    default: []
  }],
  viewedProducts: [{
    type: mongoose.Schema.Types.Mixed,
    default: []
  }],
  likedProducts: [{
    type: mongoose.Schema.Types.Mixed,
    default: []
  }],
  searchHistory: [{
    term: String,
    timestamp: Date
  }]
});

const UserData = mongoose.model('UserData', userDataSchema);

// Ensure dummy user exists
const initializeDummyUser = async () => {
  try {
    const dummyUser = await UserData.findOne({ userId: 'dummy-user' });
    if (!dummyUser) {
      const newDummyUser = new UserData({
        userId: 'dummy-user',
        cart: [],
        viewedProducts: [],
        likedProducts: [],
        searchHistory: []
      });
      await newDummyUser.save();
      console.log('Dummy user initialized');
    }
  } catch (error) {
    console.error('Error initializing dummy user:', error);
  }
};

initializeDummyUser();

// Get all user data
app.get('/api/user/data', async (req, res) => {
  try {
    const userData = await UserData.findOne({ userId: 'dummy-user' });
    res.json({
      cart: userData.cart,
      viewedProducts: userData.viewedProducts,
      likedProducts: userData.likedProducts,
      searchHistory: userData.searchHistory
    });
  } catch (error) {
    res.status(500).json({ error: 'Error fetching user data' });
  }
});

// Update cart
app.post('/api/user/cart', async (req, res) => {
  try {
    const { product } = req.body;
    await UserData.findOneAndUpdate(
      { userId: 'dummy-user' },
      { $push: { cart: product } }
    );
    res.status(200).json({ message: 'Product added to cart' });
  } catch (error) {
    res.status(500).json({ error: 'Error updating cart' });
  }
});

// Update viewed products
app.post('/api/user/viewed', async (req, res) => {
  try {
    const { product } = req.body;
    const userData = await UserData.findOne({ userId: 'dummy-user' });
    
    // Remove product if already exists
    const filteredProducts = userData.viewedProducts.filter(p => p.id !== product.id);
    
    // Add product to beginning and limit to 10 items
    const updatedViewedProducts = [product, ...filteredProducts].slice(0, 10);
    
    await UserData.findOneAndUpdate(
      { userId: 'dummy-user' },
      { $set: { viewedProducts: updatedViewedProducts } }
    );
    
    res.status(200).json({ message: 'Viewed products updated' });
  } catch (error) {
    res.status(500).json({ error: 'Error updating viewed products' });
  }
});

// Update liked products
app.post('/api/user/liked', async (req, res) => {
  try {
    const { product, action } = req.body;
    if (action === 'add') {
      await UserData.findOneAndUpdate(
        { userId: 'dummy-user' },
        { $push: { likedProducts: product } }
      );
    } else {
      await UserData.findOneAndUpdate(
        { userId: 'dummy-user' },
        { $pull: { likedProducts: { id: product.id } } }
      );
    }
    res.status(200).json({ message: 'Liked products updated' });
  } catch (error) {
    res.status(500).json({ error: 'Error updating liked products' });
  }
});

// Clear cart
app.delete('/api/user/cart', async (req, res) => {
  try {
    await UserData.findOneAndUpdate(
      { userId: 'dummy-user' },
      { $set: { cart: [] } }
    );
    res.status(200).json({ message: 'Cart cleared' });
  } catch (error) {
    res.status(500).json({ error: 'Error clearing cart' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});