

```markdown
 User Activity Tracking and Product Recommendation System

This project is a backend service that tracks user activities on a website and provides product recommendations based on the tracked data. It also includes a popup functionality that displays recommended products with a discount offer when certain user actions are performed.

 Features

 1. **User Activity Tracking Pixel**
- Create a pixel to track user activity on the website.
- Store the tracked activity data in a backend MongoDB database.
- Track actions such as page views, clicks, and scroll events.

 2. **Product Recommendation System**
- Analyze user activity data to recommend relevant products.
- Dynamically display product recommendations based on user behavior.
  
 3. **Popup with Discounts**
- Display a popup with the recommended product when certain user actions occur (e.g., scrolling or spending time on the site).
- The popup includes a configurable discount offer set by the website owner.
  
 Technologies Used
- **Node.js**: Backend server for handling requests.
- **Express.js**: Web framework for routing and middleware.
- **MongoDB**: NoSQL database for storing user activity data and product details.
- **Mongoose**: ODM for MongoDB, to interact with the database.
- **CORS**: Middleware to allow cross-origin requests.

Setup Instructions

Follow these steps to get the project up and running locally:

 Prerequisites

1. Install [Node.js](https://nodejs.org/) (version 14 or later).
2. Install [MongoDB](https://www.mongodb.com/) on your local machine, or set up a cloud instance (e.g., MongoDB Atlas).
3. Ensure you have [Git](https://git-scm.com/) installed to clone the repository.

1. Clone the Repository

```bash
git clone <repository-url>
cd <project-directory>
```

2. Install Dependencies

Run the following command to install required packages:

```bash
npm install
```

 3. Set Up MongoDB

Make sure you have MongoDB running locally or use a cloud database like MongoDB Atlas. Update the MongoDB URI in the `server.js` file:

```js
mongoose.connect('mongodb://localhost:27017/product-recommender', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
```

If using MongoDB Atlas, replace the connection URI with your cloud instance URL.

### 4. Run the Server

Start the backend server using the following command:

```bash
npm start
```

By default, the server will run on `http://localhost:5000`.

### 5. API Endpoints

- **GET `/api/user/data`**: Fetch all user data (cart, viewed products, liked products, search history).
- **POST `/api/user/cart`**: Add a product to the cart.
- **POST `/api/user/viewed`**: Update viewed products (limits to 10 items).
- **POST `/api/user/liked`**: Add/remove products from liked products.
- **DELETE `/api/user/cart`**: Clear the user's cart.

### 6. Initialize Dummy User

The dummy user is automatically initialized when the server starts, ensuring that there is always a user to track activities for.

### 7. Configuration for Discount Popup

To configure the discount value, you can add a field in the database or update a configuration file. This discount will be included in the popup when a user performs certain actions (e.g., time spent on the site).

Example: Add a `discount` field in the `UserData` schema.

```js
const userDataSchema = new mongoose.Schema({
  // Other fields...
  discount: { type: Number, default: 10 } // Discount in percentage
});
```

### 8. User Activity Tracking

Track user activity such as page views, clicks, or scroll events in the frontend. These activities are stored in the backend and used for product recommendations.

Example frontend setup to send tracked data to the backend:

```javascript
fetch('/api/user/activity', {
  method: 'POST',
  body: JSON.stringify({ action: 'scroll', timestamp: Date.now() }),
  headers: { 'Content-Type': 'application/json' }
});
```

## Future Enhancements

- **Authentication**: Add user authentication for personalized tracking.
- **Advanced Analytics**: Implement algorithms to analyze user data and provide better product recommendations.
- **Popup Customization**: Allow the website owner to configure when and how popups should appear.


