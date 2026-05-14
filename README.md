ATP - Week 7
MERN Blog Application Capstone Project
This repository contains the Week 7 capstone project completed as part of the ATP Training Program. The project is a full-stack Blog Application developed using the MERN stack (MongoDB, Express.js, React, and Node.js).

The application includes authentication, role-based access, article management, image uploads, and deployment-ready configuration.

Key Features
User registration and login
JWT-based authentication and authorization
Role-based access for Admin, Author, and User
Create, edit, view, and delete blog articles
Protected routes on the frontend
Image uploads using Multer and Cloudinary
State management for authentication
Full frontend-backend integration
Folder Structure
WEEK7/
└── BlogApp/
    ├── Backend-BlogApp/
    │   ├── APIs/
    │   ├── config/
    │   ├── middlewares/
    │   ├── models/
    │   ├── server.js
    │   └── package.json
    │
    ├── Frontend-BlogApp/
    │   ├── src/
    │   │   ├── components/
    │   │   ├── stores/
    │   │   └── styles/
    │   ├── package.json
    │   └── vite.config.js
    │
    └── README.md

Backend Overview
APIs
AdminAPI.js – Handles administrator-related operations
AuthorAPI.js – Manages author actions and article handling
CommonAPI.js – Shared API functionalities
UserAPI.js – User registration and authentication
Configuration Files
cloudinary.js – Cloudinary configuration
cloudinaryUpload.js – Image upload integration
multer.js – Multer setup for file uploads
Middleware
verifyToken.js – JWT token verification for protected routes
Models
ArticleModel.js – Schema for blog articles
UserModel.js – Schema for user data
Core Server
server.js – Main server setup and route integration
-------------------------------------------------------------------
Frontend Overview
Authentication Components
Login.jsx – User login form
Register.jsx – User registration form
ProtectedRoute.jsx – Protects private routes
Unauthorized.jsx – Access denied page
Article Components
Articles.jsx – Displays all articles
ArticleByID.jsx – Displays article details
WriteArticles.jsx – Article creation form
EditArticle.jsx – Edit existing articles
AuthorArticles.jsx – Articles by a specific author
User and Admin Components
AdminProfile.jsx – Admin dashboard
AuthorProfile.jsx – Author profile
UserProfile.jsx – User profile
AuthorsList.jsx – List of authors
UserList.jsx – Dynamic user listing
Layout Components
Header.jsx – Navigation bar
Footer.jsx – Footer section
RootLayout.jsx – Shared layout wrapper
Home.jsx – Landing page
State Management
authStore.js – Authentication state management
-------------------------------------------------------------------------------
What I Built
Developed REST APIs with Express.js
Integrated MongoDB using Mongoose
Built a React frontend with protected routes
Implemented authentication and authorization
Added article creation and editing features
Configured Cloudinary and Multer for image uploads
Tech Stack
MongoDB
Express.js
React (Vite)
Node.js
JWT
Axios
Zustand
Tailwind CSS / Bootstrap
Cloudinary
Multer
-------------------------------------------------------------------------------------------
Key Learnings
By completing this capstone project, I gained practical experience in:

Full-stack MERN application development
Authentication and authorization
REST API design and implementation
Frontend-backend integration
State management in React
File uploads with Cloudinary and Multer
Role-based access control
Project structuring and modular development
