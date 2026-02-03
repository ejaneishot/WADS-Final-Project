# SmartCareer AI — Career Advisor Template (COMP6703001)

A production-ready **starter template** for a *Career Counseling & Guidance* web app:
- **Next.js (App Router) + TypeScript**
- **TailwindCSS** (pretty UI out-of-the-box)
- **PostgreSQL + Prisma**
- **REST API** routes (auth, profile, careers, AI)
- **Security scaffolding** (JWT in httpOnly cookies, RBAC middleware, input validation, rate limiting stubs)
- **Testing scaffolding** (Jest + Supertest placeholders)
- **Docker + docker-compose** for local prod-like runs

> This is a **template**: it runs as a real app, but some parts are intentionally lightweight (e.g., AI returns a stub response).
> Extend it progressively according to weekly submissions.

---

## 1) Quick Start (Local Dev)

### A. Requirements
- Node.js 18+ (recommended 20)
- Docker Desktop (recommended for Postgres)

### B. Setup env
Copy `.env.example` to `.env` and update values:
```bash
cp .env.example .env
```

### C. Start Postgres (Docker)
```bash
docker compose up -d db
```

### D. Install deps & run
```bash
npm install
npm run prisma:generate
npm run prisma:migrate
npm run dev
```

Open: http://localhost:3000

---

## 2) Default Accounts
This template does **not** seed users by default. Register via:
- `/register` (role defaults to `student`)
- To create an admin, set `role: "admin"` in the register API payload (or use the Admin page after you add RBAC UI).

---

## 3) API Overview (REST)
- `POST /api/auth/register`
- `POST /api/auth/login`
- `POST /api/auth/logout`
- `GET /api/me`
- `GET /api/profile` / `PUT /api/profile`
- `GET /api/careers` / `POST /api/careers` (admin)
- `POST /api/ai/career-match`

Swagger is not included; you can add it later or document with Postman.

---

## 4) Docker (Full App)
Build & run app + db:
```bash
docker compose up --build
```

---

## 5) Security Notes
- JWT stored in **httpOnly** cookie (see `src/lib/auth.ts`)
- Role-based checks in `src/lib/rbac.ts`
- Input validation using Zod in API routes
- Basic rate-limit stub included (in-memory). For production use Redis.

---

## 6) Folder Structure
```
src/
  app/                Next.js routes (UI)
  app/api/             REST API routes
  components/          UI components
  lib/                 auth, db, validation, utilities
prisma/                schema.prisma
tests/                 backend test placeholders
docker/                docker files
```

---

## 7) What to Build Next
- Career assessment questionnaire + scoring
- Better career dataset (skills, weights)
- CV upload (PDF) + keyword extraction
- AI integration (OpenAI / Gemini) with timeout + fallback
- Admin audit logs + dataset versioning
- Full testing suite + security test cases
