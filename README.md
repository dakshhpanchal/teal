
# 🛠️ TEAL

Team Tool is a full-stack workspace for managing teams, tasks, finances, GitHub mentions, and collaboration. It includes:

- 🌐 Web GUI (React + Vite)
- 🖥️ Terminal UI (TUI using Go)
- 🧠 Backend API (Node.js)
- 🐳 Docker-based setup for consistent local dev

---

## 🚀 Getting Started

### 📦 Prerequisites

- [Docker](https://www.docker.com/) installed and running
- GitHub account (for webhook/mention features)
- Node.js and Go (if working outside Docker)

---

## 📁 Project Structure

```
team-tool/
├── server/      # Backend API (Node.js)
├── web/         # React frontend (Vite)
├── cli/         # Terminal UI (Go)
├── docker-compose.yml
└── .github/     # CI/CD workflows
```

---

## 🐳 Run the Full Stack (Dev Mode)

> This will start both frontend and backend in Docker.

```bash
sudo docker compose up --build
```

- Frontend: [http://localhost:3000](http://localhost:3000)
- Backend API: [http://localhost:5000](http://localhost:5000)

---

## 👨‍💻 Contributing

### 🧱 1. Backend Development

```bash
cd server
npm install
npm run dev
```

Or if using Go:

```bash
cd server
go run main.go
```

### 🎨 2. Frontend (React)

```bash
cd web
npm install
npm run dev
```

Access via [http://localhost:5173](http://localhost:5173)

### 💻 3. Terminal CLI (Go)

```bash
cd cli
go run main.go
```

---

## ⚙️ Features (Planned / Ongoing)

- [ ] Task assignment and tracking
- [ ] GitHub webhook integration (`@username` mentions)
- [ ] Notification and email system
- [ ] Terminal-based dashboard
- [ ] OAuth login (GitHub)
- [ ] Project finances tracking
- [ ] Realtime WebSocket updates
(this section will be edited with time)

---

## 📝 Contributing Guidelines

1. **Fork the repo** and clone your fork
2. Create a branch: `git checkout -b feature/task-assign`
3. Commit changes: `git commit -m "Add task assign API"`
4. Push branch: `git push origin feature/task-assign`
5. Open a Pull Request

---

