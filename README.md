# React + Vite Portfolio

Portfolio website using React in Vite with HMR and PostgreSQL backend.

## Features

- Full-stack portfolio application
- PostgreSQL database for projects
- Serverless API endpoints (Vercel)
- React with Framer Motion animations
- Responsive design

## Setup

### Prerequisites

- Node.js and npm installed
- PostgreSQL database (local or cloud like Neon, Supabase)

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up the database:
   - Follow the instructions in `server/README.md`
   - Create a `.env` file in the root directory:
     ```
     DATABASE_URL=your_postgresql_connection_string
     ```

4. Run the database schema:
   ```bash
   psql -U your_username -d your_database_name -f server/schema.sql
   ```

### Development

For local development with full API support, use Vercel CLI:

```bash
npm install -g vercel
vercel dev
```

This will run both the frontend and API serverless functions locally.

Alternatively, for frontend-only development:
```bash
cd Client
npm run dev
```

Note: Frontend-only mode requires the API to be deployed or using `vercel dev` in another terminal.

### Deployment

The project is configured for Vercel deployment:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add `DATABASE_URL` environment variable in Vercel settings
4. Deploy!

For more information, see `server/README.md` for database setup details.
