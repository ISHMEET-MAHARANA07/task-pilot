# Task Manager Backend

Backend API for the Task Manager app built with Express, TypeScript, Prisma, and PostgreSQL.

## Tech Stack

- Express 5
- TypeScript
- Prisma ORM
- PostgreSQL
- JWT authentication

## Features

- User registration and login
- Access token + refresh token rotation
- Protected task routes
- Task CRUD operations
- Toggle task completion

## Prerequisites

- Node.js 18+
- npm
- PostgreSQL

## Environment Variables

Create `task-manager-backend/.env`:

```env
PORT=5000
DATABASE_URL="postgresql://postgres:postgres123@localhost:5432/taskdb"
JWT_SECRET=supersecret
JWT_REFRESH_SECRET=superrefreshsecret
```

## Setup

```bash
cd task-manager-backend
npm install
npx prisma generate
npx prisma db push
npm run dev
```

API runs at: `http://localhost:5000`

## Scripts

- `npm run dev` - Start API in development (ts-node-dev)
- `npm run build` - Compile TypeScript
- `npm run start` - Run compiled build

## API Routes

### Auth

- `POST /auth/register`
- `POST /auth/login`
- `POST /auth/refresh`

### Tasks (Protected)

- `POST /tasks`
- `GET /tasks`
- `PATCH /tasks/:id`
- `PATCH /tasks/:id/toggle`
- `DELETE /tasks/:id`

## Auth Flow

- Login returns `accessToken` + `refreshToken`.
- Refresh token is stored in DB and rotated on refresh.
- Protected routes require `Authorization: Bearer <accessToken>`.

## Prisma Models

- `User`
- `Task`

Defined in `prisma/schema.prisma`.
