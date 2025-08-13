## 🧠 Mini Productivity Dashboard

A full-stack, minimal productivity tracker built with the MERN stack. Manage projects, track task progress, view live stats, and log daily efforts — all in a clean, modern UI.

> 🎯 Designed as a showcase project to demonstrate backend architecture, REST API integration, and modern React UI skills. Suitable for portfolios, job interviews, and scaling further.


### ✨ Features

- ✅ **Task Tracking** – Add daily productivity stats (completed vs total)
- 📁 **Project Management** – Add projects with live count and status
- 📊 **Stats Overview** – View productivity data and dummy chart placeholders
- 📜 **Task History Log** – See all past entries with timestamps
- 💡 **Scalable Backend** – Modular structure with routes, controllers, models, middleware
- ⚙️ **Error Handling** – Centralized Express error middleware + async wrapper
- 💅 **UI Polish** – Tailwind-based responsive design, hover animations, clean UX


### 🚀 Tech Stack
---------------------------------------------------------------------
| Frontend             | Backend                    | Database      |
|----------------------|----------------------------|---------------|
| React (Vite)         | Node.js, Express.js        | MongoDB Atlas |
| Tailwind CSS         | Mongoose, Morgan, CORS     |               |
| Context API (Auth)   | Custom error utils         |               |
---------------------------------------------------------------------


### 🌍 Live Demo
------------------------------------------------------------------------------------------------------------------------
| 🖥️ Frontend (Vercel)                                | ⚙️ Backend API (Render)                                       |
|-----------------------------------------------------|----------------------------------------------------------------|
| mini-project-6015nzhgx-mk00786s-projects.vercel.app | https://gracious-illumination-production.up.railway.app/       |
------------------------------------------------------------------------------------------------------------------------

Credentials:-

For login:- Email-m@abc.com
Password-mridul

### 🖼️ Preview

> Screenshots:

Home Page-

<img width="1886" height="844" alt="image" src="https://github.com/user-attachments/assets/af8dc349-36ef-4cfa-a3e4-df0009098554" />

Login Page-

<img width="1886" height="844" alt="image" src="https://github.com/user-attachments/assets/cf1253e4-90b0-4714-84e0-bfd715e6816e" />


Dashboard Page-
<img width="1886" height="844" alt="image" src="https://github.com/user-attachments/assets/0236ef1c-a041-4a0a-8397-c632046d4400" />
<img width="1886" height="844" alt="image" src="https://github.com/user-attachments/assets/4f6262e8-25c4-4739-8d86-ff0c94ad9890" />
<img width="1886" height="844" alt="image" src="https://github.com/user-attachments/assets/505dce6e-1fe2-4c46-bb80-4ae3b5ff4f0b" />
<img width="1886" height="844" alt="image" src="https://github.com/user-attachments/assets/05be8be1-9a03-4bdd-b572-e99680848d67" />


### 📦 Local Setup

#### 🔧 Frontend

git clone https://github.com/mk00786/mini-project.git

cd mini-project

npm install

npm run dev

#### 🔧 Backend
cd backend

npm install

touch .env

#### .env example:
PORT=5000

MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/your-db

####  run
npm run dev

### 📂 Backend Structure

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

### 📡 API Endpoints

----------------------------------------------------------------------------------------------------
| **Type**                         | **Method** | **Endpoint**         | **Description / Returns** |
| -------------------------------- | ---------- | -------------------- | ------------------------- |
| **Project Routes**               | GET        | `/api/projects`      | Get all projects          |
|                                  | POST       | `/api/projects`      | Create a new project      |
| **Task Routes**                  | POST       | `/api/tasks`         | Add new task entry        |
|                                  | GET        | `/api/tasks`         | Fetch latest task stats   |
|                                  | GET        | `/api/tasks/all`     | Fetch task history log    |
| **Dummy Endpoints (UI Testing)** | GET        | `/api/messages`      | Unread count              |
|                                  | GET        | `/api/notifications` | New notifications         |
----------------------------------------------------------------------------------------------------

### 🧠 Use Cases
•	✅ Daily productivity log

•	✅ Dashboard-style app demo for interviews

•	✅ Base project to extend into:

o	Auth system

o	Team collaboration tools

o	Calendar/task scheduler

### 🛠️ Future Improvements (Optional)

•	JWT Authentication

•	Project/task editing

•	Persistent user storage

•	Chart integration (e.g., Recharts, Chart.js)

•	Export/report feature

### 📄 License
Licensed under the MIT License

### 👤 Author
Mridul Kapoor
