<img width="959" height="468" alt="image" src="https://github.com/user-attachments/assets/7fc93866-60de-4ec5-a3d6-2c453aa9f085" /># 🔗 Shorten — URL Shortener

<p align="center">
  <strong>Simple. Fast. Shareable.</strong>
</p>

<p align="center">
  A modern URL shortener that converts long URLs into short, shareable links and keeps track of link clicks.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-5+-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Node.js-Backend-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/Express.js-Backend-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express" />
  <img src="https://img.shields.io/badge/MongoDB-Database-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
</p>

---

## ✨ Overview

**Shorten** is a basic full-stack URL shortener built to provide a clean and simple way to transform long URLs into short links.

With Shorten, users can:

* 🔗 Create short URLs from long URLs
* 📋 Easily copy generated links
* 🚀 Redirect users through short links
* 📊 Track the number of clicks on links
* 🗑️ Delete generated links
* 🌓 Use the application with theme support
* 📱 Access the application responsively across devices

The project is divided into separate **frontend** and **backend** applications while being managed from a single project root.

---


---

## 🏗️ Project Architecture

The project follows a simple full-stack structure:

```text
Shorten/
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── ...
│
├── backend/
│   ├── src/
│   ├── package.json
│   └── ...
│
├── package.json
├── README.md
└── ...
```

### 📦 Frontend

The frontend is responsible for:

* User interface
* URL input and validation
* Displaying generated links
* Copying short URLs
* Displaying click statistics
* Delete interactions
* Loading and error states
* Theme handling
* Responsive design

### ⚙️ Backend

The backend is responsible for:

* API endpoints
* URL creation
* Short-code generation
* URL redirection
* Click tracking
* URL deletion
* Database communication
* Serving the frontend in production

---

## 🔄 How It Works

The basic flow is:

```text
┌───────────────┐
│     User      │
└───────┬───────┘
        │
        │ Long URL
        ▼
┌───────────────────┐
│     Frontend      │
│      React        │
└────────┬──────────┘
         │
         │ API Request
         ▼
┌───────────────────┐
│      Backend      │
│  Node + Express   │
└────────┬──────────┘
         │
         │ Save URL
         ▼
┌───────────────────┐
│      MongoDB      │
└────────┬──────────┘
         │
         │ Short URL
         ▼
┌───────────────────┐
│      Frontend     │
│ Display short URL │
└───────────────────┘
```

When someone opens the generated short URL:

```text
Short URL
    │
    ▼
Backend
    │
    ├── Find original URL
    │
    ├── Increase click count
    │
    └── Redirect
          │
          ▼
    Original URL
```

---

## 🛠️ Tech Stack

### Frontend

| Technology         | Purpose                     |
| ------------------ | --------------------------- |
| ⚛️ React           | UI development              |
| 📘 TypeScript      | Type safety                 |
| ⚡ Vite             | Development & build tooling |
| 🎨 Tailwind CSS    | Styling                     |
| 🎬 Framer Motion   | UI animations               |
| 🧩 Lucide React    | Icons                       |
| 📝 React Hook Form | Form handling               |
| 🔄 TanStack Query  | Server-state management     |

### Backend

| Technology               | Purpose            |
| ------------------------ | ------------------ |
| 🟢 Node.js               | JavaScript runtime |
| 🚂 Express.js            | Backend framework  |
| 📘 TypeScript            | Type safety        |
| 🍃 MongoDB               | Database           |
| 🔐 Environment Variables | Configuration      |

---

# 🚀 Getting Started

Follow these steps to run Shorten locally.

## 1️⃣ Clone the Repository

```bash
git clone https://github.com/Yogesh-sharma89/Url-Shortner.git
```

Navigate into the project:

```bash
cd Url-Shortner
```

---

## 2️⃣ Install Dependencies

Install root dependencies if required:

```bash
npm install
```

Then install frontend dependencies:

```bash
cd frontend
npm install
```

And backend dependencies:

```bash
cd ../backend
npm install
```

Return to the project root:

```bash
cd ..
```

---

# 🔐 Environment Variables

Shorten uses environment variables for configuration.

There are separate environment files for the **frontend** and **backend**.

---

## 🌐 Frontend Environment

Create:

```text
frontend/.env
```

Add:

```env
VITE_SITE_URL=
```

`VITE_SITE_URL` represents the public URL of the Shorten application.

For local development, it can point to your local frontend URL.

Example:

```env
VITE_SITE_URL=http://localhost:5173
```

---

## ⚙️ Backend Environment

Create:

```text
backend/.env
```

Add:

```env
PORT=3000

DB_URL=

BASE_URL=
```

### Environment Variables Explained

| Variable   | Description                               |
| ---------- | ----------------------------------------- |
| `PORT`     | Port on which the backend server runs     |
| `DB_URL`   | MongoDB database connection string        |
| `BASE_URL` | Base URL used when generating short links |

Example:

```env
PORT=3000
DB_URL=mongodb://localhost:27017/shorten
BASE_URL=http://localhost:3000
```

> **Important:** `VITE_SITE_URL` and `BASE_URL` represent the same public application URL when the frontend and backend are served together in production.

For example:

```env
VITE_SITE_URL=https://your-domain.com
BASE_URL=https://your-domain.com
```

---

# 📜 Available Scripts

The project root contains scripts for managing both the frontend and backend.

Run these commands from the **project root**.

---

## 🏗️ Build Everything

Build both frontend and backend:

```bash
npm run build
```

This runs:

```text
Frontend Build
      ↓
Backend Build
```

---

## 🎨 Build Frontend

Build only the frontend:

```bash
npm run build:frontend
```

This creates the production frontend build inside:

```text
frontend/dist/
```

---

## ⚙️ Build Backend

Build only the backend:

```bash
npm run build:backend
```

This compiles the TypeScript backend into:

```text
backend/dist/
```

---

## ▶️ Start Production Server

Start the production backend:

```bash
npm start
```

The backend serves the production application.

---

## 🧪 Build & Test Production Locally

To simulate a production build locally:

```bash
npm run test:prod
```

This performs:

```text
┌─────────────────────┐
│ Build Frontend      │
└──────────┬──────────┘
           ▼
┌─────────────────────┐
│ Build Backend       │
└──────────┬──────────┘
           ▼
┌─────────────────────┐
│ Start Production    │
│ Server              │
└─────────────────────┘
```

This is useful for checking whether the application works correctly after production builds before deploying it.

---

# 📁 Root Package Scripts

The root `package.json` contains scripts similar to:

```json
{
  "scripts": {
    "build:frontend": "npm run build --prefix frontend",
    "build:backend": "npm run build --prefix backend",
    "build": "npm run build:frontend && npm run build:backend",
    "start": "npm run start --prefix backend",
    "test:prod": "npm run build && npm run start"
  }
}
```

---

# 🔗 URL Shortening Flow

When a user submits a long URL:

```text
User enters:

https://example.com/some/very/long/url
                    │
                    ▼
              Frontend
                    │
                    ▼
              POST /api/urls
                    │
                    ▼
               Backend
                    │
                    ▼
          Generate short code
                    │
                    ▼
               Database
                    │
                    ▼
          Short URL generated
                    │
                    ▼
https://your-domain.com/abc123
```

---

# 📊 Click Tracking

Shorten also tracks clicks on generated links.

When a user visits:

```text
https://your-domain.com/abc123
```

the backend:

1. Finds the URL using the short code.
2. Increments the click count.
3. Redirects the visitor to the original URL.

Example:

```text
Short Link
    │
    ▼
Find URL
    │
    ▼
clicks++
    │
    ▼
HTTP Redirect
    │
    ▼
Original Website
```

This allows the dashboard to display the number of times a shortened URL has been accessed.

---

# 🗑️ Delete URLs

Users can delete generated short links from the application.

The delete flow is:

```text
User clicks Delete
        │
        ▼
Confirmation Dialog
        │
        ▼
Delete API Request
        │
        ▼
Backend
        │
        ▼
Database
        │
        ▼
URL Removed
```

---

# 🎨 UI & Experience

Shorten focuses on keeping the interface:

* ✨ Clean
* 🎯 Minimal
* ⚡ Fast
* 📱 Responsive
* 🌓 Theme-aware
* 🎬 Smoothly animated
* ♿ Accessible

The interface uses animations selectively to keep the experience polished without making the application feel heavy.

---

# 🌓 Theme Support

The application supports theme modes such as:

```text
☀️ Light
🌙 Dark
💻 System
```

The UI uses semantic theme variables so components can adapt to the active theme without relying heavily on hardcoded colors.

---

# 🔒 Security Notes

Environment files should **never** be committed to Git.

Make sure your `.gitignore` contains:

```gitignore
.env
.env.local
.env.production
```

Never expose:

* Database credentials
* API secrets
* Private keys
* Authentication secrets
* Production credentials

If an environment variable starts with `VITE_`, remember that Vite exposes it to the client-side application. Do not place sensitive secrets inside frontend environment variables.

---

# 🧪 Production Checklist

Before deploying Shorten, verify:

* [ ] Frontend builds successfully
* [ ] Backend builds successfully
* [ ] Production server starts correctly
* [ ] Database connection works
* [ ] URL creation works
* [ ] Short URLs redirect correctly
* [ ] Click count updates correctly
* [ ] URL deletion works
* [ ] Environment variables are configured
* [ ] `.env` files are not committed
* [ ] Production `BASE_URL` is correct
* [ ] Production `VITE_SITE_URL` is correct

---

# 📸 Screenshots

Add your application screenshots here:

```text
screenshots/
├── home.png
├── create-url.png
├── links.png
└── delete-dialog.png
```

Example:

<p align="center">
  <img src="./screenshots/home.png" width="850" alt="Shorten Home Page" />
</p>

---

# 📂 Project Structure

A simplified project structure:

```text
Url-Shortner/
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── pages/
│   │   ├── context/
│   │   └── ...
│   │
│   ├── package.json
│   └── ...
│
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── routes/
│   │   ├── models/
│   │   ├── middleware/
│   │   ├── app.ts
│   │   └── server.ts
│   │
│   ├── package.json
│   └── ...
│
├── package.json
├── .gitignore
└── README.md
```

---

# 🚀 Deployment

Shorten can be deployed as a full-stack application where the backend handles:

* API requests
* URL redirects
* Database communication
* Production frontend serving

Before deployment, make sure:

```env
VITE_SITE_URL=https://your-domain.com
BASE_URL=https://your-domain.com
PORT=3000
DB_URL=your_database_connection_string
```

The actual values should be configured through your hosting provider's environment-variable settings.

---

# 🧠 What This Project Demonstrates

Although Shorten is a relatively small application, it demonstrates several important full-stack concepts:

* Full-stack project architecture
* React + TypeScript development
* REST API communication
* URL validation
* Short-code generation
* Database persistence
* HTTP redirects
* Click tracking
* CRUD operations
* Server-state management
* Environment configuration
* Production builds
* Serving a frontend from a backend
* Responsive UI development
* Theme management
* Error and loading states

---

# 🤝 Contributing

Contributions, improvements, and suggestions are welcome.

### Basic workflow

```bash
git clone <repository-url>

git checkout -b feature/your-feature

# Make your changes

git add .

git commit -m "feat: add your feature"

git push origin feature/your-feature
```

Then open a Pull Request.

---

# 📄 License

This project is available for learning and development purposes.

---

# 👨‍💻 Author

**Yogesh Sharma**

Built with ❤️ while learning and building full-stack applications.

<p align="center">
  <strong>🔗 Shorten your links. Share them anywhere. Track the clicks.</strong>
</p>
