<div align="center">

# 🚀 Uptime Monitor API

### A RESTful backend for monitoring websites

Built with **Node.js**, **Express**, **MongoDB Atlas**, and **Mongoose**

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=for-the-badge)

</div>

---

# 📖 Overview

**Uptime Monitor API** is a backend application that allows users to register websites they want to monitor.

It provides CRUD operations for monitored sites, validates user input, prevents duplicate URLs, and stores everything securely in **MongoDB Atlas**.

This project serves as the backend foundation for a complete website uptime monitoring system.

---

# ✨ Features

- ✅ Add websites to monitor
- 📋 View all monitored websites
- ❌ Delete websites
- 🚫 Prevent duplicate URLs
- ✔️ Request validation
- ⚡ Centralized error handling
- ☁️ MongoDB Atlas integration
- 🧩 RESTful API design

---

# 🛠 Tech Stack

| Technology | Purpose |
|------------|---------|
| Node.js | Runtime Environment |
| Express.js | Backend Framework |
| MongoDB Atlas | Cloud Database |
| Mongoose | MongoDB ODM |
| dotenv | Environment Variables |

---

# 📂 Project Structure

```
uptime_monitor/
│
├── config/
│   └── db.js
│
├── models/
│   └── Site.js
│
├── routes/
│   └── sites.js
│
├── middleware/
│   └── errorHandler.js
│
├── .env
├── .gitignore
├── package.json
├── server.js
└── README.md
```

---

# ⚙️ Installation

### 1️⃣ Clone the repository

```bash
git clone https://github.com/yourusername/uptime_monitor.git
```

### 2️⃣ Navigate into the project

```bash
cd uptime_monitor
```

### 3️⃣ Install dependencies

```bash
npm install
```

### 4️⃣ Create a `.env` file

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string
```

### 5️⃣ Start the server

```bash
npm start
```

or

```bash
node server.js
```

---

# 📡 API Endpoints

## Create Site

```http
POST /api/sites
```

### Request Body

```json
{
  "name": "Google",
  "url": "https://google.com"
}
```

---

## Get All Sites

```http
GET /api/sites
```

---

## Delete Site

```http
DELETE /api/sites/:id
```

Example

```http
DELETE /api/sites/6879ab3411f1d30e0c4fabc1
```

---

# 📸 Sample Response

```json
{
    "_id": "6879ab3411f1d30e0c4fabc1",
    "name": "Google",
    "url": "https://google.com",
    "createdAt": "2026-07-17T12:30:00.000Z"
}
```

---

# 🧪 Tested Using

- Postman
- MongoDB Atlas

---

# 🚧 Future Improvements

- 🔐 User Authentication (JWT)
- ⏰ Scheduled uptime checks (Cron Jobs)
- 📈 Response time tracking
- 📊 Dashboard with analytics
- 📧 Email notifications
- 🔔 Discord/Slack alerts
- 📱 React frontend
- 🟢 Live status monitoring

---

# 🤝 Contributing

Contributions, issues, and feature requests are welcome.

If you'd like to improve this project:

```bash
Fork 🍴
     ↓
Create a branch 🌿
     ↓
Commit changes 💾
     ↓
Open a Pull Request 🚀
```

---

# ⭐ Show Your Support

If you found this project useful,

**Give it a ⭐ on GitHub!**

---

<div align="center">

Made with ❤️ using Node.js & Express

</div>