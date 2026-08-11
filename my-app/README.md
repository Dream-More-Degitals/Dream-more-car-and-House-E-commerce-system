## Development Progress

###  Completed
- Project scaffolded with Next.js (App Router)
- PostgreSQL running locally via Docker (`docker-compose.yml`)
- Prisma ORM configured (Prisma 7 — using `prisma.config.ts`)
- Database schema defined: `User` model with RBAC roles (Buyer/Seller/Admin), `RefreshToken` model
- Initial migration applied and verified via Prisma Studio

### In Progress
- Authentication: `/api/auth/register` route (email/password registration with bcrypt hashing)

### Up Next
- Login route with JWT access/refresh tokens
- Auth middleware for RBAC route protection
- Rate limiting on login attempts

## Tech Stack
- Next.js (App Router)
- PostgreSQL + Prisma ORM
- Docker (local Postgres)
- bcryptjs, jsonwebtoken (planned)
