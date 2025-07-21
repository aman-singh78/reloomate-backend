# RelooMate Backend API

This is a simple REST API built using Node.js and Express for the RelooMate student housing app.

## 📦 Tech Stack

- Node.js
- Express
- MongoDB (with Mongoose)
- dotenv for environment variables
- bcrypt (planned for password hashing)
- jsonwebtoken (planned for authentication)
- CORS (enabled for React Native frontend)

---

## 🚀 Getting Started

### 1. Clone the Repository

````bash
git clone https://github.com/aman-singh78/reloomate-backend.git
cd reloomate-backend

### 2. Install Dependencies

```bash
npm install


### 3. Create a `.env` File

Create a `.env` file in the root directory and add the following:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
Replace your_mongodb_connection_string and your_jwt_secret_key with your actual MongoDB URI and secret key.


### 4. Run the Server

```bash
npm start
The server will start at:
http://localhost:5000

reloomate-backend/
├── src/
│   ├── config/          # MongoDB connection setup
│   ├── routes/          # API route files
│   ├── models/          # Mongoose schema definitions
│   └── controllers/     # Logic for handling routes
├── .env
├── .gitignore
├── server.js
├── package.json
└── README.md

````
