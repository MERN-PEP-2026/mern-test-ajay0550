
# MERN Stack Test Application

This is a MERN (MongoDB, Express, React, Node.js) stack test application for the MERN-PEP-2026 program.

## Project Structure

```
mern-test-ajay0550/
├── frontend/          # React frontend application
├── backend/           # Node.js/Express backend application
└── README.md          # Project documentation
```

## Frontend

The frontend is built with React and contains the user interface for the application.

**Location:** `/frontend`

## Backend

The backend is built with Node.js and Express, providing RESTful APIs for the frontend.

**Location:** `/backend`

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- MongoDB (for database)

### Installation

1. Clone the repository
```bash
git clone https://github.com/MERN-PEP-2026/mern-test-ajay0550.git
cd mern-test-ajay0550
```

2. Install backend dependencies
```bash
cd backend
npm install
```

3. Install frontend dependencies
```bash
cd ../frontend
npm install
```

### Running the Application

**Backend:**
```bash
cd backend
npm start
```

**Frontend:**
```bash
cd frontend
npm start
```

## Technologies Used

- **Frontend:** React, JavaScript, HTML, CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Package Manager:** npm

## Author

ajay0550

## License

This project is part of the MERN-PEP-2026 program.
=======
# 📝 MERN Task Management System

A full-stack Task Management Application built using the MERN stack (MongoDB, Express, React, Node.js).

This application allows users to register, login, and manage their personal tasks securely using JWT authentication.

---

## 🚀 Features

### 🔐 Authentication
- User Registration
- User Login
- Password hashing using bcrypt
- JWT-based authentication
- Protected routes

### 📋 Task Management
- Create new tasks
- View all tasks (only logged-in user's tasks)
- Update task status (Pending / Completed)
- Edit task title
- Delete tasks
- Filter tasks (All / Pending / Completed)

### 🎨 UI
- Modern dark theme
- Glassmorphism design
- Responsive layout
- Smooth hover animations

---

## 🛠️ Tech Stack

### Frontend
- React.js
- React Router
- Axios
- Custom CSS

### Backend
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT (jsonwebtoken)
- bcryptjs

---

## 📁 Project Structure

mern-test-ajay0550/

│
├── backend/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── server.js
│   └── .env
│
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   ├── styles.css
│   │   └── App.js
│
└── README.md

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository

git clone <your-repository-url>
cd mern-test-ajay0550

---

### 2️⃣ Backend Setup

cd backend
npm install

Create a `.env` file inside backend folder:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

Start backend:

npm run dev

---

### 3️⃣ Frontend Setup

Open a new terminal:

cd frontend
npm install
npm start

Frontend runs at:
http://localhost:3000

Backend runs at:
http://localhost:5000

---

## 🔒 Authentication Flow

1. User registers
2. Password is hashed using bcrypt
3. User logs in
4. JWT token is generated
5. Token stored in localStorage
6. Protected routes verify token using middleware

---

## 📌 API Endpoints

### Authentication

POST   /api/auth/register  
POST   /api/auth/login  

### Tasks (Protected)

POST   /api/tasks  
GET    /api/tasks  
PUT    /api/tasks/:id  
DELETE /api/tasks/:id  

---

## 🧠 Concepts Used

- REST APIs
- JWT Authentication
- Middleware
- Protected Routes
- React Hooks (useState, useEffect)
- MongoDB & Mongoose
- Full-stack Integration

---

## 👨‍💻 Author

Ajay G  
Computer Science Engineering Student  

---


