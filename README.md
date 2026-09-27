# The Enchanted Book Bank — MERN

A full-stack college Book Bank Management System with an original enchanted-library / magical-academy visual theme.

## Stack
- MongoDB + MongoDB Compass
- Express.js + Node.js
- React + Vite
- Tailwind CSS
- JWT authentication and role-based access
- Axios, React Router, Lucide React, Recharts

## Roles
- Admin: users, books, requests, circulation, fines, audit logs and settings
- Librarian: books, copies, requests, issue/return, students and overdue records
- Student: catalog, requests, issued books, history, notifications and profile

## Setup in VS Code
Requirements: Node.js 20+, MongoDB Community Server or MongoDB Atlas.

### 1. Open terminal
```powershell
cd path\to\enchanted-book-bank
npm install
npm run install-all
```

### 2. Configure backend
Copy `backend/.env.example` to `backend/.env`.
For local MongoDB Compass use:
`MONGO_URI=mongodb://127.0.0.1:27017/enchanted_book_bank`

### 3. Seed demo data
```powershell
npm run seed
```

### 4. Start everything
```powershell
npm run dev
```
Frontend: http://localhost:5173
Backend: http://localhost:5000/api

### Demo accounts
- Admin: admin@bookbank.com / Admin@123
- Librarian: librarian@bookbank.com / Librarian@123
- Student: student1@college.edu / Student@123

## MongoDB Compass
Open Compass and connect to:
`mongodb://127.0.0.1:27017`
Database: `enchanted_book_bank`
Collections are created by the application/seed script.

## Production notes
Change JWT_SECRET, database credentials, CORS origin and demo passwords before deployment. Add HTTPS, rate limiting, secure cookies/token rotation and a production logging/monitoring service for a real institution.
