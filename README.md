# Frontend

Next.js dashboard for bot operations, audience activity, follow-ups, and broadcast overview.

## What is here

- `app/`: dashboard pages, layout, styles, and the local API proxy route
- `lib/`: dashboard data access helpers
- `next.config.mjs`: monorepo-aware Next.js config

## Dashboard purpose

This app is the admin dashboard only. It does not run the Telegram bot.

Use it to view:

- user totals and activity
- recent audience details
- follow-up queue state
- broadcast schedule and current daily tip
- marketing interest segments

## Environment

Create `frontend/.env.local`.

```env
BACKEND_BASE_URL=http://localhost:3000
DASHBOARD_API_KEY=use-the-same-key-as-the-backend
```

Optional fallback:

```env
STATS_API_KEY=use-the-backend-stats-key-instead
```

Starter values are in [`.env.example`](d:/projects/telegram-proposal-bot/frontend/.env.example).

## Install

```bash
cd frontend
npm install
```

## Run locally

If the backend is already using port `3000`, run the dashboard on another port:

```bash
cd frontend
npm run dev -- --port 3001
```

Then open:

`http://localhost:3001/?key=YOUR_DASHBOARD_KEY`

The key must match `DASHBOARD_API_KEY` from the backend.

## Build

```bash
cd frontend
npm run build
npm start
```

## How it connects

The frontend calls the backend overview endpoint through:

- backend: `/api/admin/overview`
- frontend proxy: `/api/overview`

Set `BACKEND_BASE_URL` to your backend local URL or deployed URL.

## Deploy

Deploy `frontend/` as a separate Vercel project.

Required env values for deployment:

- `BACKEND_BASE_URL`
- `DASHBOARD_API_KEY` or `STATS_API_KEY`

The dashboard key must match the backend project, otherwise authorization will fail.