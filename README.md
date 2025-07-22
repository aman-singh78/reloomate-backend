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
├── index.js
├── package.json
└── README.md

````

📡 API Endpoints
All endpoints are prefixed with /api.
Use tools like Postman or connect via frontend (React Native) using cookies for auth.

🔐 Authentication
RelooMate uses JWT stored in HTTP-only cookies.
After login, a token is set via cookie. Use protected routes only after logging in.

👤 User Routes
✅ Register User
POST /api/register
Registers a new user.

Body:

json
Copy
Edit
{
"name": "Aman Thapa",
"email": "aman@example.com",
"password": "yourPassword123"
}
Response:

json
Copy
Edit
{
"message": "User created successfully"
}

🔓 Login User
POST /api/login
Logs in a user and sets the token in a cookie.

Body:

json
Copy
Edit
{
"email": "aman@example.com",
"password": "yourPassword123"
}
Response:

json
Copy
Edit
{
"message": "Login successful"
}

🙋‍♂️ Get User Profile
GET /api/profile
(Protected Route) Returns logged-in user's profile.

Headers: Cookie with valid JWT token

Response:

json
Copy
Edit
{
"message": "User Profile Fetched successfully",
"data": {
"name": "Aman Thapa",
"email": "aman@example.com"
}
}

Onboarding Content
🚀 Get Onboarding Steps
GET /api/onboarding
Returns static onboarding steps shown to new users.

Response:

json
Copy
Edit
{
"steps": [
{
"title": "Find your ideal roommate",
"description": "Browse and connect with like-minded students near your campus.",
"imageUrl": "https://yourcdn.com/images/find-roommate.png"
},
{
"title": "Explore verified listings",
"description": "Get access to trusted PGs, hostels, and apartments in your area.",
"imageUrl": "https://yourcdn.com/images/explore-listings.png"
},
{
"title": "Move in with ease",
"description": "Make moving simple with RelooMate’s roommate chat and checklist.",
"imageUrl": "https://yourcdn.com/images/move-in.png"
}
]
}

🛡️ Security Notes
🔒 Passwords are hashed using bcrypt (planned).

🔐 Authentication is handled using jsonwebtoken (JWT).

🍪 JWT tokens are stored in HTTP-only cookies to prevent XSS.

❌ CORS is currently enabled for local frontend testing (localhost:3000). Make sure to configure it properly in production.
