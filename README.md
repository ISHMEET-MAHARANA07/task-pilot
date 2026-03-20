# 🚀 TaskPilot

**TaskPilot — Navigate your productivity with a clean and powerful task management system.**

TaskPilot is a modern full-stack task management application that allows users to organize, track, and manage their daily tasks efficiently. It features secure authentication, full CRUD operations, and a clean, responsive user interface designed for productivity.

---

## ✨ Features

* 🔐 **Authentication System**

  * User registration & login
  * JWT-based authentication (Access + Refresh Tokens)
  * Secure logout functionality

* ✅ **Task Management**

  * Create, read, update, and delete tasks
  * Toggle task status (Pending / Completed)

* 🔍 **Search & Filter**

  * Search tasks by title
  * Filter tasks (All / Pending / Completed)

* 📄 **Pagination**

  * Efficient task loading with page navigation

* 🎨 **Modern UI**

  * Clean and responsive design
  * Smooth animations using Framer Motion

---

## 🛠️ Tech Stack

### Frontend

* Next.js (App Router)
* TypeScript
* Tailwind CSS
* Framer Motion

### Backend

* Node.js
* Express.js
* TypeScript
* Prisma ORM
* PostgreSQL

---

## 📁 Project Structure

taskpilot/
├── frontend/ (Next.js App)
└── backend/ (Node.js API)

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/taskpilot.git
cd taskpilot
```

---

### 2️⃣ Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file:

```env
DATABASE_URL="postgresql://postgres:password@localhost:5432/taskdb"
JWT_SECRET="your_secret_key"
REFRESH_SECRET="your_refresh_secret"
```

Run database:

```bash
npx prisma migrate dev
npx prisma generate
```

Start server:

```bash
npm run dev
```

---

### 3️⃣ Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Open:

```bash
http://localhost:3000
```

---

## 🔐 API Endpoints

### Auth

* POST `/auth/register`
* POST `/auth/login`
* POST `/auth/refresh`
* POST `/auth/logout`

### Tasks

* GET `/tasks`
* POST `/tasks`
* PATCH `/tasks/:id`
* DELETE `/tasks/:id`
* PATCH `/tasks/:id/toggle`

---
## 🚀 Future Improvements

* Drag & drop task reordering
* Dark / Light theme toggle
* Notifications (toast system)
* Backend pagination & optimization

---

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

---

## 📄 License

This project is licensed under the MIT License.

---

## 💡 Author

Built with ❤️ by Ishmeet
