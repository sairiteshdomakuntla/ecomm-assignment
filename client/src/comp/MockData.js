  const  mockProducts = 
    [
      {
        "id": 1,
        "name": "Premium Wireless Headphones",
        "description": "High-quality wireless headphones with noise cancellation",
        "price": 299.99,
        "discountedPrice": 249.99,
        "rating": 4.5,
        "category": "Electronics",
        "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
        "stock": 15
      },
      {
        "id": 2,
        "name": "Smart Fitness Watch",
        "description": "Track your fitness goals with this advanced smartwatch",
        "price": 199.99,
        "discountedPrice": 179.99,
        "rating": 4.8,
        "category": "Wearables",
        "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
        "stock": 8
      },
      {
        "id": 3,
        "name": "4K Ultra HD Smart TV",
        "description": "65-inch Smart TV with stunning 4K resolution and HDR support",
        "price": 899.99,
        "discountedPrice": 799.99,
        "rating": 4.7,
        "category": "Electronics",
        "image": "https://images.unsplash.com/photo-1598335614901-d1636c833cb7",
        "stock": 20
      },
      {
        "id": 4,
        "name": "Bluetooth Speaker",
        "description": "Portable speaker with rich bass and long-lasting battery life",
        "price": 79.99,
        "discountedPrice": 69.99,
        "rating": 4.6,
        "category": "Electronics",
        "image": "https://images.unsplash.com/photo-1512446733611-9099a758e129",
        "stock": 50
      },
      {
        "id": 5,
        "name": "Ergonomic Office Chair",
        "description": "Comfortable and adjustable chair for your workspace",
        "price": 149.99,
        "discountedPrice": 129.99,
        "rating": 4.4,
        "category": "Furniture",
        "image": "https://images.unsplash.com/photo-1553440564-8e30d0f2f7b1",
        "stock": 10
      },
      {
        "id": 6,
        "name": "Wireless Gaming Mouse",
        "description": "High-precision gaming mouse with customizable buttons",
        "price": 49.99,
        "discountedPrice": 39.99,
        "rating": 4.7,
        "category": "Gaming",
        "image": "https://images.unsplash.com/photo-1584270354949-c26b0d89e2dd",
        "stock": 25
      },
      {
        "id": 7,
        "name": "Electric Toothbrush",
        "description": "Rechargeable toothbrush with multiple cleaning modes",
        "price": 59.99,
        "discountedPrice": 49.99,
        "rating": 4.6,
        "category": "Health",
        "image": "https://images.unsplash.com/photo-1580468414902-cdd8d1ee0f1a",
        "stock": 30
      },
      {
        "id": 8,
        "name": "Noise-Canceling Earbuds",
        "description": "Compact earbuds with active noise-cancellation technology",
        "price": 129.99,
        "discountedPrice": 99.99,
        "rating": 4.5,
        "category": "Electronics",
        "image": "https://images.unsplash.com/photo-1516646255117-8dc9c4ad6406",
        "stock": 40
      },
      {
        "id": 9,
        "name": "Yoga Mat",
        "description": "Non-slip yoga mat for all your fitness routines",
        "price": 29.99,
        "discountedPrice": 19.99,
        "rating": 4.8,
        "category": "Fitness",
        "image": "https://images.unsplash.com/photo-1544213456-bffc70f594f2",
        "stock": 60
      },
      {
        "id": 10,
        "name": "Laptop Stand",
        "description": "Adjustable laptop stand for improved posture",
        "price": 39.99,
        "discountedPrice": 29.99,
        "rating": 4.7,
        "category": "Accessories",
        "image": "https://images.unsplash.com/photo-1551033541-2075d0f24548",
        "stock": 35
      },
      {
        "id": 11,
        "name": "Wireless Keyboard",
        "description": "Slim wireless keyboard with a rechargeable battery",
        "price": 59.99,
        "discountedPrice": 49.99,
        "rating": 4.4,
        "category": "Electronics",
        "image": "https://images.unsplash.com/photo-1555617980-c30d5c48491e",
        "stock": 22
      },
      {
        "id": 12,
        "name": "Robot Vacuum Cleaner",
        "description": "Smart vacuum cleaner with scheduling and app control",
        "price": 299.99,
        "discountedPrice": 249.99,
        "rating": 4.6,
        "category": "Home Appliances",
        "image": "https://images.unsplash.com/photo-1609165400137-4c6d7463a114",
        "stock": 15
      },
      {
        "id": 13,
        "name": "Portable Power Bank",
        "description": "10,000mAh power bank with fast-charging capabilities",
        "price": 39.99,
        "discountedPrice": 29.99,
        "rating": 4.5,
        "category": "Accessories",
        "image": "https://images.unsplash.com/photo-1581235720704-558860b04350",
        "stock": 45
      },
      {
        "id": 14,
        "name": "Smart Home Hub",
        "description": "Control all your smart devices from one central hub",
        "price": 129.99,
        "discountedPrice": 109.99,
        "rating": 4.7,
        "category": "Smart Home",
        "image": "https://images.unsplash.com/photo-1579420371033-bb67464c3f2c",
        "stock": 12
      },
      {
        "id": 15,
        "name": "Electric Kettle",
        "description": "1.7L electric kettle with rapid boil technology",
        "price": 49.99,
        "discountedPrice": 39.99,
        "rating": 4.4,
        "category": "Kitchen Appliances",
        "image": "https://images.unsplash.com/photo-1590487980347-5cf3f6c4b0da",
        "stock": 25
      },
      {
        "id": 16,
        "name": "Adjustable Dumbbells",
        "description": "Compact adjustable dumbbells for strength training",
        "price": 199.99,
        "discountedPrice": 169.99,
        "rating": 4.7,
        "category": "Fitness",
        "image": "https://images.unsplash.com/photo-1579758629937-037fdd27c21f",
        "stock": 18
      },
      {
        "id": 17,
        "name": "Digital Camera",
        "description": "High-resolution digital camera with 4K video recording",
        "price": 599.99,
        "discountedPrice": 549.99,
        "rating": 4.8,
        "category": "Photography",
        "image": "https://images.unsplash.com/photo-1519183071298-a2962f3c3abe",
        "stock": 9
      },
      {
        "id": 18,
        "name": "Stylish Backpack",
        "description": "Durable backpack with multiple compartments",
        "price": 49.99,
        "discountedPrice": 39.99,
        "rating": 4.6,
        "category": "Accessories",
        "image": "https://images.unsplash.com/photo-1587573080965-c4010d7559d7",
        "stock": 40
      },
      {
        "id": 19,
        "name": "Smart Light Bulb",
        "description": "Energy-efficient light bulb with app control",
        "price": 29.99,
        "discountedPrice": 19.99,
        "rating": 4.7,
        "category": "Smart Home",
        "image": "https://images.unsplash.com/photo-1599423300746-b62533397364",
        "stock": 70
      },
      {
        "id": 20,
        "name": "Compact Air Purifier",
        "description": "Portable air purifier for cleaner indoor air",
        "price": 129.99,
        "discountedPrice": 99.99,
        "rating": 4.5,
        "category": "Home Appliances",
        "image": "https://images.unsplash.com/photo-1623319132396-9a6455a06dc3",
        "stock": 28
      },
      {
        "id": 21,
        "name": "Wireless Charger",
        "description": "Fast wireless charging pad for multiple devices",
        "price": 49.99,
        "discountedPrice": 39.99,
        "rating": 4.6,
        "category": "Accessories",
        "image": "https://images.unsplash.com/photo-1541675154758-0434dd877f45",
        "stock": 32
      },
      {
        "id": 22,
        "name": "Gaming Monitor",
        "description": "27-inch monitor with 144Hz refresh rate",
        "price": 399.99,
        "discountedPrice": 349.99,
        "rating": 4.8,
        "category": "Gaming",
        "image": "https://images.unsplash.com/photo-1601227716226-dca6c42b8948",
        "stock": 14
      },
      {
        "id": 23,
        "name": "Smart Thermostat",
        "description": "Energy-saving thermostat with app control",
        "price": 199.99,
        "discountedPrice": 179.99,
        "rating": 4.7,
        "category": "Smart Home",
        "image": "https://images.unsplash.com/photo-1590487980350-6354cf9d2fc9",
        "stock": 17
      },
      {
        "id": 24,
        "name": "Noise-Isolating Headphones",
        "description": "Comfortable headphones with superior noise isolation",
        "price": 89.99,
        "discountedPrice": 69.99,
        "rating": 4.5,
        "category": "Electronics",
        "image": "https://images.unsplash.com/photo-1529651737248-c49a52e3fa5f",
        "stock": 30
      }
      // More items would follow to reach a total of 52 items.
    

  ];



  
  export default mockProducts;