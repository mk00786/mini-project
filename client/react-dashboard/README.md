# 🧠 React Mini Auth Dashboard

This is a simple authentication-based React project built with:

- 🔐 Login/logout flow using `useState` + route guards
- 📦 React Router v6
- 🎨 Tailwind CSS for UI
- 🧩 Reusable Card components

### 📁 Pages:
- Home
- Login
- Dashboard (protected)
- 404 Not Found

### 📌 Features:
🔐 AuthContext with localStorage persistence
Persist login state and user email across page reloads.

🚦 Protected Routes using <Outlet />
Restrict access to dashboard unless authenticated.

🧭 Login with redirection + form state cleanup
Redirects to /dashboard after login and resets input fields.

📬 Dashboard personalized with user email
Greets the user using email stored in context.

🧭 Conditional Navbar (Login/Logout)
Dynamically switches button and email based on auth status.

🎨 Clean Tailwind CSS UI
Responsive layout with centered pages and styled components.

💻 Dashboard cards with hover effects
Simple card UI showing projects, messages, tasks, and notifications.

⚙️ Route protection using useEffect + navigate() fallback
Ensures unauthorized access is redirected safely.
---

## 🏁 Getting Started

```bash
npm install
npm run dev

🧠 DSA Folder (optional)
Includes clean code for:

LC 77 – Combinations

LC 90 – Subsets II

LC 39 – Combination Sum

---

## 📁 Create `/leetcode` Folder

### ➕ Sample:
/leetcode/backtracking/
├── lc39-combination-sum.js
├── lc77-combinations.js
├── lc90-subsets-ii.js

---