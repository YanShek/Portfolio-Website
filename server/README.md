# Database Setup Guide

This guide will help you set up PostgreSQL for the portfolio project.

## Prerequisites

1. PostgreSQL installed locally or a cloud PostgreSQL database (e.g., Neon, Supabase, Railway)
2. Node.js and npm installed

## Setup Steps

### Option 1: Using Neon (Serverless PostgreSQL - Recommended for Vercel)

1. Sign up at [Neon](https://neon.tech) or your preferred PostgreSQL provider
2. Create a new project/database
3. Copy your connection string (it should look like: `postgresql://user:password@host/database`)
4. Add it to your environment variables:
   - For local development: Create a `.env` file in the root directory:
     ```
     DATABASE_URL=your_connection_string_here
     ```
   - For Vercel: Add it in your Vercel project settings under "Environment Variables"

### Option 2: Using Local PostgreSQL

1. Install PostgreSQL on your machine
2. Create a database:
   ```sql
   CREATE DATABASE portfolio_db;
   ```
3. Run the schema:
   ```bash
   psql -U your_username -d portfolio_db -f server/schema.sql
   ```
4. Create a connection string:
   ```
   DATABASE_URL=postgresql://username:password@localhost:5432/portfolio_db
   ```
5. Add it to your `.env` file

## Running the Schema

### Using psql (Local PostgreSQL)

```bash
psql -U your_username -d your_database_name -f server/schema.sql
```

### Using Neon Console

1. Go to your Neon dashboard
2. Navigate to SQL Editor
3. Copy and paste the contents of `server/schema.sql`
4. Execute the query

### Using a Database GUI Tool

Tools like pgAdmin, DBeaver, or TablePlus:
1. Connect to your database
2. Open a SQL query window
3. Paste the contents of `server/schema.sql`
4. Execute

## Adding Projects

You can add projects either through:
1. SQL INSERT statements
2. A database admin tool
3. Future admin API endpoints (to be implemented)

Example SQL:
```sql
INSERT INTO projects (name, description, image, link) 
VALUES ('My Project', 'Project description here', '/path/to/image.png', 'https://project-url.com');
```

## Environment Variables

Make sure to set `DATABASE_URL` in your environment:

**Local Development (.env file):**
```
DATABASE_URL=postgresql://user:password@host/database
```

**Vercel Deployment:**
Add `DATABASE_URL` in Vercel project settings → Environment Variables

## Troubleshooting

- **Connection refused**: Check that PostgreSQL is running and the connection string is correct
- **Authentication failed**: Verify your username and password in the connection string
- **Table doesn't exist**: Make sure you've run the schema.sql file
- **Vercel deployment issues**: Ensure DATABASE_URL is set in Vercel environment variables

