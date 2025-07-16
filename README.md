# 🧠 Mini Productivity Dashboard

A full-stack, minimal productivity tracker built with the MERN stack. Manage projects, track task progress, view live stats, and log daily efforts — all in a clean, modern UI.

> 🎯 Designed as a showcase project to demonstrate backend architecture, REST API integration, and modern React UI skills. Suitable for portfolios, job interviews, and scaling further.

---

## ✨ Features

- ✅ **Task Tracking** – Add daily productivity stats (completed vs total)
- 📁 **Project Management** – Add projects with live count and status
- 📊 **Stats Overview** – View productivity data and dummy chart placeholders
- 📜 **Task History Log** – See all past entries with timestamps
- 💡 **Scalable Backend** – Modular structure with routes, controllers, models, middleware
- ⚙️ **Error Handling** – Centralized Express error middleware + async wrapper
- 💅 **UI Polish** – Tailwind-based responsive design, hover animations, clean UX

---

## 🚀 Tech Stack
---------------------------------------------------------------------
| Frontend             | Backend                    | Database      |
|----------------------|----------------------------|---------------|
| React (Vite)         | Node.js, Express.js        | MongoDB Atlas |
| Tailwind CSS         | Mongoose, Morgan, CORS     |               |
| Context API (Auth)   | Custom error utils         |               |
---------------------------------------------------------------------

---

## 🌍 Live Demo
------------------------------------------------------------------------------------------------------------------------
| 🖥️ Frontend (Vercel)                                | ⚙️ Backend API (Render)                                       |
|-----------------------------------------------------|----------------------------------------------------------------|
| mini-project-6015nzhgx-mk00786s-projects.vercel.app | https://gracious-illumination-production.up.railway.app/       |
------------------------------------------------------------------------------------------------------------------------

---

## 🖼️ Preview

> Add your screenshot links here after deployment.

---

## 📦 Local Setup

### 🔧 Frontend

```bash
git clone https://github.com/mk00786/mini-project.git
cd mini-project
npm install
npm run dev

### 🔧 Backend
cd backend
npm install
touch .env

### .env example:
PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/your-db

###  run
npm run dev
________________________________________
📂 Backend Structure
backend/
├── controllers/
│   ├── projectController.js
│   └── taskController.js
├── routes/
│   ├── projectRoutes.js
│   └── taskRoutes.js
├── models/
│   ├── Project.js
│   └── Tasks.js
├── middlewares/
│   └── errorHandler.js
├── utils/
│   └── asyncHandler.js
├── .env
└── server.js
________________________________________
📡 API Endpoints
🔹 Project Routes
Method	Endpoint	Description
GET	/api/projects	Get all projects
POST	/api/projects	Create a new project
🔹 Task Routes
Method	Endpoint	Description
POST	/api/tasks	Add new task entry
GET	/api/tasks	Fetch latest task stats
GET	/api/tasks/all	Fetch task history log
🔹 Dummy Endpoints (For UI testing)
Method	Endpoint	Returns
GET	/api/messages	Unread count
GET	/api/notifications	New notifications
________________________________________
🧠 Use Cases
•	✅ Daily productivity log
•	✅ Dashboard-style app demo for interviews
•	✅ Base project to extend into:
o	Auth system
o	Team collaboration tools
o	Calendar/task scheduler
________________________________________
🛠️ Future Improvements (Optional)
•	JWT Authentication
•	Project/task editing
•	Persistent user storage
•	Chart integration (e.g., Recharts, Chart.js)
•	Export/report feature
________________________________________
📄 License
Licensed under the MIT License
________________________________________
👤 Author
Mridul Kapoor
