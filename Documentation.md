# Week 1 checkpoint

- **Architecture**: Traditional 3-tier / client–server (a modular “distributed” app)

We chose a 3-tier client–server architecture to enforce clean separation between UI, API, and database, which makes security and testing easier to do correctly and is the right complexity level for a small team while still meeting all mandatory requirements.

- **Tech stack**:

Frontend: Next.js (UI only)

Backend: Bun API server (REST)

DB: PostgreSQL + Prisma (used by backend only)

Auth: JWT (issued by backend)

AI: OpenAI API called by backend

Deployment: Docker compose runs both

- **Project selection/ topic chosen**: Career Counseling & Guidance Application

