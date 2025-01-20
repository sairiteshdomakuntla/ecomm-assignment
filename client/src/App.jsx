import React, { useState, useEffect } from 'react';
import { FiShoppingCart, FiUser, FiHeart, FiSearch, FiShare2, FiX, FiTrash2 } from "react-icons/fi";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

// Mock Products Data
const mockProducts = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    description: "High-quality wireless headphones with noise cancellation",
    price: 299.99,
    discountedPrice: 249.99,
    rating: 4.5,
    category: "Electronics",
    image: "https://images.pexels.com/photos/374870/pexels-photo-374870.jpeg?auto=compress&cs=tinysrgb&h=350",
    stock: 15
  },
  {
    id: 2,
    name: "Smart Fitness Watch",
    description: "Track your fitness goals with this advanced smartwatch",
    price: 199.99,
    discountedPrice: 179.99,
    rating: 4.8,
    category: "Wearables",
    image: "https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg?auto=compress&cs=tinysrgb&h=350",
    stock: 8
  },
  {
    id: 3,
    name: "4K Ultra HD Smart TV",
    description: "65-inch Smart TV with stunning 4K resolution and HDR support",
    price: 899.99,
    discountedPrice: 799.99,
    rating: 4.7,
    category: "Electronics",
    image: "https://images.pexels.com/photos/1201996/pexels-photo-1201996.jpeg?auto=compress&cs=tinysrgb&h=350",
    stock: 20
  },
  {
    id: 4,
    name: "Bluetooth Speaker",
    description: "Portable speaker with rich bass and long-lasting battery life",
    price: 79.99,
    discountedPrice: 69.99,
    rating: 4.6,
    category: "Electronics",
    image: "https://images.pexels.com/photos/63703/pexels-photo-63703.jpeg?auto=compress&cs=tinysrgb&h=350",
    stock: 50
  },
  {
    id: 5,
    name: "Ergonomic Office Chair",
    description: "Comfortable and adjustable chair for your workspace",
    price: 149.99,
    discountedPrice: 129.99,
    rating: 4.4,
    category: "Furniture",
    image: "https://images.pexels.com/photos/275948/pexels-photo-275948.jpeg?auto=compress&cs=tinysrgb&h=350",
    stock: 10
  },
  {
    id: 6,
    name: "Gaming Laptop",
    description: "High-performance gaming laptop with a powerful GPU",
    price: 1499.99,
    discountedPrice: 1299.99,
    rating: 4.9,
    category: "Computers",
    image: "https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&h=350",
    stock: 5
  },
  {
    id: 7,
    name: "Compact DSLR Camera",
    description: "Capture stunning images with this lightweight DSLR",
    price: 499.99,
    discountedPrice: 449.99,
    rating: 4.8,
    category: "Cameras",
    image: "https://images.pexels.com/photos/210673/pexels-photo-210673.jpeg?auto=compress&cs=tinysrgb&h=350",
    stock: 12
  },
  {
    id: 8,
    name: "Electric Kettle",
    description: "Fast-boiling electric kettle with temperature control",
    price: 49.99,
    discountedPrice: 39.99,
    rating: 4.5,
    category: "Kitchen Appliances",
    image: "https://images.pexels.com/photos/459803/pexels-photo-459803.jpeg?auto=compress&cs=tinysrgb&h=350",
    stock: 30
  },
  {
    id: 9,
    name: "Yoga Mat",
    description: "Non-slip, durable yoga mat for home workouts",
    price: 29.99,
    discountedPrice: 19.99,
    rating: 4.3,
    category: "Fitness",
    image: "https://images.pexels.com/photos/373912/pexels-photo-373912.jpeg?auto=compress&cs=tinysrgb&h=350",
    stock: 25
  },
  {
    id: 10,
    name: "Wireless Mouse",
    description: "Ergonomic wireless mouse with adjustable DPI settings",
    price: 29.99,
    discountedPrice: 24.99,
    rating: 4.7,
    category: "Accessories",
    image: "https://images.pexels.com/photos/3945684/pexels-photo-3945684.jpeg?auto=compress&cs=tinysrgb&h=350",
    stock: 40
  },
  {
    id: 11,
    name: "Modern Desk Lamp",
    description: "LED desk lamp with adjustable brightness and color modes",
    price: 59.99,
    discountedPrice: 49.99,
    rating: 4.6,
    category: "Home Decor",
    image: "https://images.pexels.com/photos/3562695/pexels-photo-3562695.jpeg?auto=compress&cs=tinysrgb&h=350",
    stock: 18
  },
  {
    id: 12,
    name: "Travel Backpack",
    description: "Durable and lightweight backpack with multiple compartments",
    price: 89.99,
    discountedPrice: 74.99,
    rating: 4.5,
    category: "Travel",
    image: "https://images.pexels.com/photos/1260309/pexels-photo-1260309.jpeg?auto=compress&cs=tinysrgb&h=350",
    stock: 22
  },
  {
    id: 13,
    name: "Smartphone",
    description: "Latest generation smartphone with exceptional camera and battery life",
    price: 999.99,
    discountedPrice: 899.99,
    rating: 4.9,
    category: "Electronics",
    image: "https://images.pexels.com/photos/4066119/pexels-photo-4066119.jpeg?auto=compress&cs=tinysrgb&h=350",
    stock: 10
  },
  {
    id: 14,
    name: "Espresso Machine",
    description: "Brew cafe-quality espresso with this compact machine",
    price: 299.99,
    discountedPrice: 249.99,
    rating: 4.7,
    category: "Kitchen Appliances",
    image: "https://images.pexels.com/photos/4132333/pexels-photo-4132333.jpeg?auto=compress&cs=tinysrgb&h=350",
    stock: 15
  },
  {
    id: 15,
    name: "Running Shoes",
    description: "Lightweight running shoes designed for maximum comfort",
    price: 129.99,
    discountedPrice: 99.99,
    rating: 4.8,
    category: "Fitness",
    image: "https://images.pexels.com/photos/1360978/pexels-photo-1360978.jpeg?auto=compress&cs=tinysrgb&h=350",
    stock: 50
  },
  {
    id: 16,
    name: "Smartwatch",
    description: "Track your fitness and notifications with this sleek smartwatch",
    price: 199.99,
    discountedPrice: 149.99,
    rating: 4.6,
    category: "Wearables",
    image: "https://images.pexels.com/photos/933058/pexels-photo-933058.jpeg?auto=compress&cs=tinysrgb&h=350",
    stock: 20
  },
  {
    id: 17,
    name: "Bluetooth Speaker",
    description: "Portable and waterproof Bluetooth speaker with high sound quality",
    price: 79.99,
    discountedPrice: 59.99,
    rating: 4.5,
    category: "Electronics",
    image: "https://images.pexels.com/photos/1205030/pexels-photo-1205030.jpeg?auto=compress&cs=tinysrgb&h=350",
    stock: 30
  },
  {
    id: 18,
    name: "Electric Toothbrush",
    description: "Professional-grade electric toothbrush with multiple cleaning modes",
    price: 89.99,
    discountedPrice: 69.99,
    rating: 4.7,
    category: "Health & Personal Care",
    image: "https://images.pexels.com/photos/4098714/pexels-photo-4098714.jpeg?auto=compress&cs=tinysrgb&h=350",
    stock: 15
  },
  {
    id: 19,
    name: "Luxury Watch",
    description: "Elegant luxury watch with a stainless steel band",
    price: 349.99,
    discountedPrice: 299.99,
    rating: 4.8,
    category: "Accessories",
    image: "https://images.pexels.com/photos/4050295/pexels-photo-4050295.jpeg?auto=compress&cs=tinysrgb&h=350",
    stock: 10
  },
  {
    id: 20,
    name: "Air Purifier",
    description: "Keep your home air fresh and clean with this high-efficiency air purifier",
    price: 199.99,
    discountedPrice: 169.99,
    rating: 4.6,
    category: "Home Appliances",
    image: "https://images.pexels.com/photos/1348776/pexels-photo-1348776.jpeg?auto=compress&cs=tinysrgb&h=350",
    stock: 8
  },
  {
    id: 21,
    name: "Sunglasses",
    description: "Trendy sunglasses with UV protection for all-day comfort",
    price: 49.99,
    discountedPrice: 39.99,
    rating: 4.4,
    category: "Fashion",
    image: "https://images.pexels.com/photos/2268529/pexels-photo-2268529.jpeg?auto=compress&cs=tinysrgb&h=350",
    stock: 40
  },
  {
    id: 22,
    name: "Coffee Maker",
    description: "Brew your favorite coffee with this automatic coffee maker",
    price: 89.99,
    discountedPrice: 79.99,
    rating: 4.5,
    category: "Kitchen Appliances",
    image: "https://images.pexels.com/photos/587173/pexels-photo-587173.jpeg?auto=compress&cs=tinysrgb&h=350",
    stock: 12
  },
  {
    id: 23,
    name: "Waffle Maker",
    description: "Make delicious waffles with this easy-to-use waffle maker",
    price: 39.99,
    discountedPrice: 29.99,
    rating: 4.3,
    category: "Kitchen Appliances",
    image: "https://images.pexels.com/photos/54260/pexels-photo-54260.jpeg?auto=compress&cs=tinysrgb&h=350",
    stock: 18
  },
  {
    id: 24,
    name: "Smart Thermostat",
    description: "Control your home's temperature from anywhere with this smart thermostat",
    price: 249.99,
    discountedPrice: 199.99,
    rating: 4.7,
    category: "Home Appliances",
    image: "https://images.pexels.com/photos/2696060/pexels-photo-2696060.jpeg?auto=compress&cs=tinysrgb&h=350",
    stock: 25
  },
  {
    id: 25,
    name: "Camping Tent",
    description: "Durable and spacious camping tent for your outdoor adventures",
    price: 129.99,
    discountedPrice: 99.99,
    rating: 4.6,
    category: "Outdoor Gear",
    image: "https://images.pexels.com/photos/592797/pexels-photo-592797.jpeg?auto=compress&cs=tinysrgb&h=350",
    stock: 20
  },
  {
    id: 26,
    name: "Gaming Headset",
    description: "High-quality gaming headset with surround sound and noise cancellation",
    price: 129.99,
    discountedPrice: 99.99,
    rating: 4.7,
    category: "Gaming",
    image: "https://images.pexels.com/photos/1475324/pexels-photo-1475324.jpeg?auto=compress&cs=tinysrgb&h=350",
    stock: 18
  },
  {
    id: 27,
    name: "Laptop Stand",
    description: "Ergonomic laptop stand to keep your posture comfortable",
    price: 49.99,
    discountedPrice: 39.99,
    rating: 4.6,
    category: "Office",
    image: "https://images.pexels.com/photos/4681240/pexels-photo-4681240.jpeg?auto=compress&cs=tinysrgb&h=350",
    stock: 35
  },
  {
    id: 28,
    name: "Smart Light Bulb",
    description: "Adjustable smart light bulb compatible with home automation systems",
    price: 29.99,
    discountedPrice: 19.99,
    rating: 4.5,
    category: "Smart Home",
    image: "https://images.pexels.com/photos/3050543/pexels-photo-3050543.jpeg?auto=compress&cs=tinysrgb&h=350",
    stock: 40
  },
  {
    id: 29,
    name: "Digital Camera",
    description: "Capture stunning photos with this professional-grade digital camera",
    price: 499.99,
    discountedPrice: 449.99,
    rating: 4.8,
    category: "Electronics",
    image: "https://images.pexels.com/photos/2693184/pexels-photo-2693184.jpeg?auto=compress&cs=tinysrgb&h=350",
    stock: 15
  },
  {
    id: 30,
    name: "Yoga Mat",
    description: "Non-slip yoga mat for a comfortable and stable practice",
    price: 29.99,
    discountedPrice: 19.99,
    rating: 4.7,
    category: "Fitness",
    image: "https://images.pexels.com/photos/4540027/pexels-photo-4540027.jpeg?auto=compress&cs=tinysrgb&h=350",
    stock: 25
  },
  {
    id: 31,
    name: "Electric Kettle",
    description: "Quick-boil electric kettle with automatic shut-off feature",
    price: 49.99,
    discountedPrice: 39.99,
    rating: 4.4,
    category: "Home Appliances",
    image: "https://images.pexels.com/photos/6051512/pexels-photo-6051512.jpeg?auto=compress&cs=tinysrgb&h=350",
    stock: 30
  },
  {
    id: 32,
    name: "Smart Door Lock",
    description: "Keyless entry smart door lock with fingerprint scanning technology",
    price: 249.99,
    discountedPrice: 199.99,
    rating: 4.6,
    category: "Smart Home",
    image: "https://images.pexels.com/photos/2533230/pexels-photo-2533230.jpeg?auto=compress&cs=tinysrgb&h=350",
    stock: 12
  },
  {
    id: 33,
    name: "Travel Backpack",
    description: "Durable and spacious travel backpack for your adventures",
    price: 89.99,
    discountedPrice: 69.99,
    rating: 4.7,
    category: "Travel",
    image: "https://images.pexels.com/photos/2483721/pexels-photo-2483721.jpeg?auto=compress&cs=tinysrgb&h=350",
    stock: 22
  },
  {
    id: 34,
    name: "Wireless Mouse",
    description: "Ergonomic wireless mouse for smooth and precise control",
    price: 29.99,
    discountedPrice: 19.99,
    rating: 4.5,
    category: "Computer Accessories",
    image: "https://images.pexels.com/photos/1136546/pexels-photo-1136546.jpeg?auto=compress&cs=tinysrgb&h=350",
    stock: 50
  },
  {
    id: 35,
    name: "Portable Power Bank",
    description: "Compact power bank for charging your devices on the go",
    price: 39.99,
    discountedPrice: 29.99,
    rating: 4.6,
    category: "Electronics",
    image: "https://images.pexels.com/photos/4201731/pexels-photo-4201731.jpeg?auto=compress&cs=tinysrgb&h=350",
    stock: 45
  },
  {
    id: 36,
    name: "Bluetooth Speaker",
    description: "Portable Bluetooth speaker with superior sound quality",
    price: 59.99,
    discountedPrice: 49.99,
    rating: 4.7,
    category: "Electronics",
    image: "https://images.pexels.com/photos/2321742/pexels-photo-2321742.jpeg?auto=compress&cs=tinysrgb&h=350",
    stock: 40
  },
  {
    id: 37,
    name: "Smartwatch",
    description: "Track your health and notifications with this sleek smartwatch",
    price: 199.99,
    discountedPrice: 169.99,
    rating: 4.6,
    category: "Smart Wearables",
    image: "https://images.pexels.com/photos/2968832/pexels-photo-2968832.jpeg?auto=compress&cs=tinysrgb&h=350",
    stock: 15
  },
  {
    id: 38,
    name: "Electric Scooter",
    description: "Eco-friendly electric scooter with a long battery life",
    price: 499.99,
    discountedPrice: 449.99,
    rating: 4.8,
    category: "Vehicles",
    image: "https://images.pexels.com/photos/1950249/pexels-photo-1950249.jpeg?auto=compress&cs=tinysrgb&h=350",
    stock: 10
  },
  {
    id: 39,
    name: "Noise Cancelling Headphones",
    description: "Wireless headphones with active noise-cancellation for a peaceful experience",
    price: 149.99,
    discountedPrice: 129.99,
    rating: 4.7,
    category: "Electronics",
    image: "https://images.pexels.com/photos/3663327/pexels-photo-3663327.jpeg?auto=compress&cs=tinysrgb&h=350",
    stock: 25
  },
  {
    id: 40,
    name: "Coffee Maker",
    description: "Brew fresh coffee with this easy-to-use coffee maker",
    price: 89.99,
    discountedPrice: 69.99,
    rating: 4.5,
    category: "Home Appliances",
    image: "https://images.pexels.com/photos/1335774/pexels-photo-1335774.jpeg?auto=compress&cs=tinysrgb&h=350",
    stock: 30
  },
  {
    id: 41,
    name: "Electric Toothbrush",
    description: "Rechargeable electric toothbrush for an enhanced cleaning experience",
    price: 49.99,
    discountedPrice: 39.99,
    rating: 4.6,
    category: "Health & Beauty",
    image: "https://images.pexels.com/photos/4239019/pexels-photo-4239019.jpeg?auto=compress&cs=tinysrgb&h=350",
    stock: 60
  },
  {
    id: 42,
    name: "Portable Blender",
    description: "Blend smoothies on-the-go with this portable rechargeable blender",
    price: 39.99,
    discountedPrice: 29.99,
    rating: 4.4,
    category: "Kitchen",
    image: "https://images.pexels.com/photos/5581516/pexels-photo-5581516.jpeg?auto=compress&cs=tinysrgb&h=350",
    stock: 22
  },
  {
    id: 43,
    name: "Leather Wallet",
    description: "Elegant and durable leather wallet for men and women",
    price: 59.99,
    discountedPrice: 49.99,
    rating: 4.6,
    category: "Fashion",
    image: "https://images.pexels.com/photos/6268797/pexels-photo-6268797.jpeg?auto=compress&cs=tinysrgb&h=350",
    stock: 55
  },
  {
    id: 44,
    name: "Drone Camera",
    description: "Capture stunning aerial views with this advanced drone camera",
    price: 399.99,
    discountedPrice: 349.99,
    rating: 4.7,
    category: "Electronics",
    image: "https://images.pexels.com/photos/2619771/pexels-photo-2619771.jpeg?auto=compress&cs=tinysrgb&h=350",
    stock: 8
  },
  {
    id: 45,
    name: "Wireless Earbuds",
    description: "True wireless earbuds with exceptional sound quality and long battery life",
    price: 79.99,
    discountedPrice: 69.99,
    rating: 4.6,
    category: "Electronics",
    image: "https://images.pexels.com/photos/4167193/pexels-photo-4167193.jpeg?auto=compress&cs=tinysrgb&h=350",
    stock: 45
  }
];

const ProductRecommenderApp = () => {
  // State management
  const [currentCategory, setCurrentCategory] = useState('');
  const [sortBy, setSortBy] = useState('featured');
  const [cart, setCart] = useState([]);
  const [viewedProducts, setViewedProducts] = useState([]);
  const [likedProducts, setLikedProducts] = useState([]);
  const [recommendations, setRecommendations] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Extract unique categories
  const categories = [...new Set(mockProducts.map(product => product.category))];

  // Server sync function
  const syncWithServer = async (data, endpoint, method = 'POST') => {
    try {
      await fetch(`http://localhost:5000/api/user/${endpoint}`, {
        method,
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
    } catch (error) {
      console.error(`Error syncing ${endpoint}:`, error);
      setError(`Failed to sync ${endpoint} with server`);
    }
  };

  // User interaction tracking functions
  const trackProductView = (product) => {
    setViewedProducts(prev => {
      const updated = [product, ...prev.filter(p => p.id !== product.id)].slice(0, 10);
      localStorage.setItem('viewedProducts', JSON.stringify(updated));
      syncWithServer({ product }, 'viewed');
      return updated;
    });
  };

  const toggleLikeProduct = (product) => {
    setLikedProducts(prev => {
      const isLiked = prev.some(p => p.id === product.id);
      const updated = isLiked
        ? prev.filter(p => p.id !== product.id)
        : [product, ...prev];
      localStorage.setItem('likedProducts', JSON.stringify(updated));
      syncWithServer({ product, action: isLiked ? 'remove' : 'add' }, 'liked');
      return updated;
    });
  };

  const addToCart = (product) => {
    setCart(prev => {
      const updated = [...prev, { ...product, quantity: 1 }];
      localStorage.setItem('cart', JSON.stringify(updated));
      syncWithServer({ product }, 'cart');
      return updated;
    });
  };

  const removeFromCart = async (productId) => {
    setCart(prev => {
      const updated = prev.filter(item => item.id !== productId);
      localStorage.setItem('cart', JSON.stringify(updated));
      return updated;
    });
    try {
      await fetch('http://localhost:5000/api/user/cart', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ productId })
      });
    } catch (error) {
      console.error('Error removing from cart:', error);
    }
  };

  // Recommendation generator
  const generateRecommendations = () => {
    const recommendationScores = mockProducts.map(product => {
      let score = 0;
      
      // Category-based scoring
      const viewedCategories = new Set(viewedProducts.map(p => p.category));
      if (viewedCategories.has(product.category)) score += 2;
      
      // Price range scoring
      const averageCartPrice = cart.reduce((acc, p) => acc + p.price, 0) / (cart.length || 1);
      const priceDiff = Math.abs(product.price - averageCartPrice);
      if (priceDiff < 50) score += 3;
      
      // Rating-based scoring
      if (product.rating >= 4.5) score += 2;
      
      // Recently viewed penalty
      if (viewedProducts.some(p => p.id === product.id)) score -= 1;
      
      // Stock-based urgency
      if (product.stock < 20) score += 1;
      
      return { product, score };
    });

    const cartIds = new Set(cart.map(p => p.id));
    return recommendationScores
      .filter(item => !cartIds.has(item.product.id))
      .sort((a, b) => b.score - a.score)
      .map(item => item.product)
      .slice(0, 4);
  };

  // Filter and sort products
  const filteredAndSortedProducts = React.useMemo(() => {
    let filtered = [...mockProducts];

    // Apply search filter
    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Apply category filter
    if (currentCategory) {
      filtered = filtered.filter(product => product.category === currentCategory);
    }

    // Apply sorting
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      default: // 'featured'
        break;
    }

    return filtered;
  }, [mockProducts, searchTerm, currentCategory, sortBy]);

  // Initial data load
  useEffect(() => {
    const loadUserData = async () => {
      setLoading(true);
      try {
        const response = await fetch('http://localhost:5000/api/user/data');
        const data = await response.json();
        
        setCart(data.cart);
        setViewedProducts(data.viewedProducts);
        setLikedProducts(data.likedProducts);
        
        localStorage.setItem('cart', JSON.stringify(data.cart));
        localStorage.setItem('viewedProducts', JSON.stringify(data.viewedProducts));
        localStorage.setItem('likedProducts', JSON.stringify(data.likedProducts));
      } catch (error) {
        console.error('Error loading user data:', error);
        setError('Failed to load user data');
        
        // Fallback to localStorage
        const savedCart = localStorage.getItem('cart');
        const savedViewed = localStorage.getItem('viewedProducts');
        const savedLiked = localStorage.getItem('likedProducts');

        if (savedCart) setCart(JSON.parse(savedCart));
        if (savedViewed) setViewedProducts(JSON.parse(savedViewed));
        if (savedLiked) setLikedProducts(JSON.parse(savedLiked));
      } finally {
        setLoading(false);
      }
    };

    loadUserData();
  }, []);

  // Update recommendations when user activity changes
  useEffect(() => {
    const newRecommendations = generateRecommendations();
    setRecommendations(newRecommendations);
  }, [cart, viewedProducts, likedProducts]);

  // Product Card component
  const ProductCard = ({ product }) => (
    <div 
      className="bg-white rounded-lg shadow-lg p-4 transition-transform hover:scale-105 w-full"
      onClick={() => trackProductView(product)}
    >
      <div className="relative aspect-w-4 aspect-h-3">
        <img
          src="/api/placeholder/400/320"
          alt={product.name}
          className="w-full h-48 object-cover rounded-md"
        />
        <button
          className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-gray-100"
          onClick={(e) => {
            e.stopPropagation();
            toggleLikeProduct(product);
          }}
        >
          <FiHeart 
            className={`${likedProducts.some(p => p.id === product.id) 
              ? 'text-red-500' 
              : 'text-gray-600 hover:text-red-500'}`} 
          />
        </button>
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-gray-800 truncate">{product.name}</h3>
        <p className="text-sm text-gray-600 mt-1 line-clamp-2">{product.description}</p>
        <div className="flex items-center mt-2">
          <span className="text-xl font-bold text-indigo-600">
            ${product.discountedPrice}
          </span>
          <span className="ml-2 text-sm text-gray-500 line-through">
            ${product.price}
          </span>
        </div>
        <div className="flex items-center mt-2">
          {[...Array(5)].map((_, index) => (
            <span key={index}>
              {index < Math.floor(product.rating) ? (
                <AiFillStar className="text-yellow-400" />
              ) : (
                <AiOutlineStar className="text-yellow-400" />
              )}
            </span>
          ))}
          <span className="ml-2 text-sm text-gray-600">{product.rating}</span>
        </div>
        <div className="mt-4 flex justify-between items-center">
          <span
            className={`text-sm ${product.stock > 0 ? "text-green-500" : "text-red-500"}`}
          >
            {product.stock > 0 ? `${product.stock} in Stock` : "Out of Stock"}
          </span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              addToCart(product);
            }}
            disabled={product.stock === 0}
            className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 disabled:bg-gray-400"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );

  // Cart Sidebar component
  const CartSidebar = () => (
    <div className={`fixed right-0 top-0 h-full w-80 bg-white shadow-lg transform ${isCartOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out z-50`}>
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Shopping Cart</h2>
          <button onClick={() => setIsCartOpen(false)} className="p-2 hover:bg-gray-100 rounded-full">
            <FiX className="text-gray-600" />
          </button>
        </div>
        {cart.length === 0 ? (
          <p className="text-gray-500 text-center">Your cart is empty</p>
        ) : (
          <>
            <div className="space-y-4">
              {cart.map((item) => (
                <div key={item.id} className="flex items-center justify-between border-b pb-2">
                  <div className="flex items-center space-x-2">
                    <img src="/api/placeholder/80/80" alt={item.name} className="w-16 h-16 object-cover rounded" />
                    <div>
                      <h3 className="font-medium">{item.name}</h3>
                      <p className="text-sm text-gray-500">${item.discountedPrice}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="p-2 hover:bg-gray-100 rounded-full"
                  >
                    <FiTrash2 className="text-red-500" />
                  </button>
                </div>
              ))}
            </div>
            <div className="mt-4 border-t pt-4">
              <div className="flex justify-between mb-2">
                <span className="font-medium">Total:</span>
                <span className="font-bold">
                  ${cart.reduce((acc, item) => acc + item.discountedPrice, 0).toFixed(2)}
                </span>
              </div>
              <button className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700">
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-red-500 text-center">
          <p className="text-xl font-bold mb-2">Error</p>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-md sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <h1 className="text-2xl font-bold text-indigo-600">Shop</h1>
              <nav className="hidden md:flex space-x-4">
              {categories.slice(0, 7).map(category => (
                  <button
                    key={category}
                    onClick={() => setCurrentCategory(category)}
                    className={`text-gray-600 hover:text-indigo-600 ${
                      currentCategory === category ? 'text-indigo-600 font-semibold' : ''
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <FiSearch className="absolute left-3 top-3 text-gray-400" />
              </div>
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <FiUser className="text-gray-600" />
              </button>
              <button 
                className="p-2 hover:bg-gray-100 rounded-full relative"
                onClick={() => setIsCartOpen(true)}
              >
                <FiShoppingCart className="text-gray-600" />
                {cart.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cart.length}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Personalized Recommendations */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Recommended for You
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {recommendations.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* Recently Viewed */}
        {viewedProducts.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Recently Viewed
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {viewedProducts.slice(0, 4).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        )}

        {/* Liked Products */}
        {likedProducts.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Favorite Items
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {likedProducts.slice(0, 4).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        )}

        {/* All Products */}
        <section className="mb-12">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <h2 className="text-2xl font-bold text-gray-800">
              All Products
            </h2>
            <div className="flex flex-wrap items-center gap-4">
              <select 
                className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600" 
                onChange={(e) => setCurrentCategory(e.target.value)}
                value={currentCategory}
              >
                <option value="">All Categories</option>
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
              <select 
                  className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                onChange={(e) => setSortBy(e.target.value)}
                value={sortBy}
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredAndSortedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </main>

      {/* Shopping Cart Sidebar */}
      <CartSidebar />

      {/* Overlay when cart is open */}
      {isCartOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsCartOpen(false)}
        />
      )}

      {/* Footer */}
      <footer className="bg-white shadow-md mt-auto">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">About Us</h3>
              <p className="text-gray-600">Your trusted source for the latest tech gadgets and accessories.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Customer Service</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-indigo-600">Contact Us</a></li>
                <li><a href="#" className="text-gray-600 hover:text-indigo-600">Shipping Info</a></li>
                <li><a href="#" className="text-gray-600 hover:text-indigo-600">Returns</a></li>
                <li><a href="#" className="text-gray-600 hover:text-indigo-600">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-indigo-600">New Arrivals</a></li>
                <li><a href="#" className="text-gray-600 hover:text-indigo-600">Best Sellers</a></li>
                <li><a href="#" className="text-gray-600 hover:text-indigo-600">Sale Items</a></li>
                <li><a href="#" className="text-gray-600 hover:text-indigo-600">Gift Cards</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Newsletter</h3>
              <p className="text-gray-600 mb-4">Subscribe to receive updates and exclusive offers.</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
                />
                <button className="bg-indigo-600 text-white px-4 py-2 rounded-r-md hover:bg-indigo-700">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-gray-600">
            <p>&copy; 2024 Your Store. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ProductRecommenderApp;