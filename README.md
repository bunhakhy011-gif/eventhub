# CamEvent Explorer

CamEvent Explorer is a modern, responsive tourism and event discovery platform for Cambodia. It combines event discovery, ticket booking, recommendations, maps, dashboards, and a multi-role admin system into a single MVP.

## Structure

- `frontend/` — Next.js + Tailwind UI application
- `backend/` — Node.js + Express API with PostgreSQL via Sequelize
- `database/` — SQL schema and sample data

## Quick Start

1. Install backend dependencies:
   ```bash
   cd backend
   npm install
   ```
2. Install frontend dependencies:
   ```bash
   cd ../frontend
   npm install
   ```
3. Create a database and configure `backend/.env`.
4. Seed sample data:
   ```bash
   cd backend
   npm run seed
   ```
5. Run backend and frontend concurrently in separate terminals:
   ```bash
   cd backend
   npm run dev
   ```
   ```bash
   cd frontend
   npm run dev
   ```

## Deployment

- Backend: deploy with Node/Express on any cloud server or platform supporting PostgreSQL
- Frontend: deploy on Vercel or any static hosting for Next.js
- Use environment variables for secrets and third-party API keys

## Notes

This scaffold includes:
- JWT authentication and placeholder social login hooks
- Event discovery, filters, search, detail pages, and dashboards
- Booking, review, organizer and admin routes
- PostgreSQL schema and sample seed data
- Responsive, dark/light UI with Tailwind
