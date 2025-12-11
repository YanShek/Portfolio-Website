# Database Connection Setup

## Your Neon Database Connection String

You have successfully created a Neon database! Here's how to connect it:

## For Vercel Deployment (IMPORTANT!)

### Step 1: Add Environment Variable to Vercel

1. Go to your Vercel Dashboard: https://vercel.com/dashboard
2. Click on your project (portfolio-website)
3. Go to **Settings** → **Environment Variables**
4. Click **"Add New"**
5. Fill in:
   - **Name**: `DATABASE_URL`
   - **Value**: Use the **POOLED** connection (recommended for serverless):
     ```
     postgresql://neondb_owner:npg_Habu9Pp6KTAD@ep-young-sea-adlqwzz9-pooler.c-2.us-east-1.aws.neon.tech/neondb?sslmode=require
     ```
   - **Environments**: ✅ Select ALL three:
     - Production
     - Preview  
     - Development
6. Click **"Save"**

### Step 2: Redeploy

After adding the environment variable:
1. Go to **Deployments** tab
2. Click the **⋯** (three dots) on the latest deployment
3. Click **"Redeploy"**
4. Select **"Use existing Build Cache"** (optional, but faster)
5. Click **"Redeploy"**

**OR** simply push a new commit to trigger auto-deployment.

---

## For Local Development

### Option 1: Create .env file (Recommended)

1. Create a `.env` file in the **root** directory of your project
2. Add this line (using the pooled connection):
   ```
   DATABASE_URL=postgresql://neondb_owner:npg_Habu9Pp6KTAD@ep-young-sea-adlqwzz9-pooler.c-2.us-east-1.aws.neon.tech/neondb?sslmode=require
   ```
3. The `.env` file is already in `.gitignore`, so it won't be committed

### Option 2: Use Unpooled Connection (For local testing)

If you prefer the unpooled connection for local development:
```
DATABASE_URL=postgresql://neondb_owner:npg_Habu9Pp6KTAD@ep-young-sea-adlqwzz9.c-2.us-east-1.aws.neon.tech/neondb?sslmode=require
```

**Note:** The unpooled connection doesn't have "-pooler" in the hostname.

---

## Which Connection String to Use?

### ✅ Use POOLED Connection (Recommended)
- **For**: Vercel serverless functions, production, preview environments
- **Connection String**: The one with `-pooler` in the hostname
- **Why**: Optimized for serverless with connection pooling

### Use UNPOOLED Connection
- **For**: Local development, long-running processes
- **Connection String**: The one WITHOUT `-pooler` in the hostname
- **Why**: Direct connection, better for long sessions

---

## Test Your Connection

### 1. Verify Database Schema is Created

1. Go to Neon Console: https://console.neon.tech
2. Open **SQL Editor**
3. Run:
   ```sql
   SELECT * FROM projects;
   ```
4. If you see an error saying table doesn't exist, run `server/schema.sql` first

### 2. Test API Endpoint

After deploying to Vercel with the DATABASE_URL set:

Visit: `https://your-project.vercel.app/api/projects`

You should see JSON data with your projects (or empty array `[]` if no projects added yet).

---

## Quick Checklist

- [ ] DATABASE_URL added to Vercel environment variables (pooled connection)
- [ ] Selected all three environments (Production, Preview, Development)
- [ ] Redeployed Vercel project
- [ ] Created `.env` file for local development (optional)
- [ ] Ran `server/schema.sql` in Neon SQL Editor
- [ ] Added at least one project to the database
- [ ] Tested `/api/projects` endpoint

---

## Troubleshooting

### "Failed to fetch projects" Error
- ✅ Check DATABASE_URL is set in Vercel
- ✅ Verify connection string is correct (no extra spaces)
- ✅ Make sure you redeployed after adding the env variable

### "Table 'projects' does not exist"
- ✅ Run `server/schema.sql` in Neon SQL Editor
- ✅ Verify with: `SELECT * FROM projects;`

### Connection Timeout
- ✅ Make sure you're using the **pooled** connection for Vercel
- ✅ Check your Neon project is active (not paused)

---

## Security Notes

⚠️ **IMPORTANT**: 
- Never commit your `.env` file (already in `.gitignore`)
- Never share your connection string publicly
- The connection string includes your password - keep it secret!
- If exposed, regenerate it in Neon console

