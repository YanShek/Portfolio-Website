# Step-by-Step Guide: Neon + Vercel Setup

This guide walks you through setting up Neon PostgreSQL and connecting it to Vercel.

## Part 1: Setting Up Neon Database

### Step 1: Create a Neon Account
1. Go to [https://neon.tech](https://neon.tech)
2. Click **"Sign Up"** or **"Get Started"**
3. Sign up with GitHub (recommended) or email

### Step 2: Create a New Project
1. After signing in, click **"Create Project"** or **"New Project"**
2. Fill in the project details:
   - **Project Name**: e.g., "portfolio-db"
   - **Region**: Choose closest to your users (e.g., US East)
   - **PostgreSQL Version**: Latest version (recommended)
3. Click **"Create Project"**

### Step 3: Get Your Connection String
1. Once your project is created, you'll see a dashboard
2. Look for the **"Connection Details"** section
3. You'll see a connection string that looks like:
   ```
   postgresql://username:password@ep-xxxxx.us-east-2.aws.neon.tech/neondb?sslmode=require
   ```
4. **IMPORTANT**: Click **"Copy"** or select and copy this entire connection string
5. Save it somewhere safe - you'll need it for Vercel!

### Step 4: Run the Database Schema
1. In your Neon dashboard, click on **"SQL Editor"** (in the left sidebar)
2. You'll see a query editor window
3. Open the file `server/schema.sql` from your project
4. Copy the entire contents of that file
5. Paste it into the Neon SQL Editor
6. Click **"Run"** or press `Ctrl+Enter` (Windows) / `Cmd+Enter` (Mac)

   **Expected Result**: You should see a success message and the `projects` table will be created.

### Step 5: Add Your Projects (Optional - Add Sample Data)
You can add projects in two ways:

**Option A: Using SQL Editor (Quick)**
1. In the SQL Editor, run:
```sql
INSERT INTO projects (name, description, image, link) 
VALUES 
    ('My Awesome Project', 'This project does amazing things!', '/Projects/Schedule.png', 'https://github.com/yourusername'),
    ('Another Project', 'Another cool project description.', '/Projects/UnrealAI.png', 'https://github.com/yourusername');
```

**Option B: Using SQL Editor for Each Project**
```sql
INSERT INTO projects (name, description, image, link) 
VALUES ('Project Name', 'Project description here', '/path/to/image.png', 'https://project-url.com');
```

**To Verify Your Data:**
```sql
SELECT * FROM projects;
```
You should see all your projects listed.

---

## Part 2: Connecting Neon to Vercel

### Step 6: Deploy Your Code to Vercel

**First Time Setup:**
1. Make sure your code is pushed to GitHub/GitLab/Bitbucket
2. Go to [https://vercel.com](https://vercel.com)
3. Sign up/Login (use GitHub for easiest setup)
4. Click **"Add New Project"** or **"Import Project"**
5. Select your repository (animated-portfolio-starter)
6. Vercel will auto-detect your settings based on `vercel.json`
7. **Before clicking "Deploy"**, we need to add the environment variable first!

### Step 7: Add Database Connection to Vercel

**Option A: During Initial Deploy**
1. In the Vercel project setup page, scroll down to **"Environment Variables"**
2. Click **"Add"** or the **"+"** button
3. Add:
   - **Name**: `DATABASE_URL`
   - **Value**: Paste your Neon connection string (from Step 3)
   - **Environments**: Check all three boxes:
     - ✅ Production
     - ✅ Preview
     - ✅ Development
4. Click **"Add"** or **"Save"**

**Option B: After Deployment (If you already deployed)**
1. Go to your Vercel dashboard
2. Click on your project
3. Go to **"Settings"** tab (top navigation)
4. Click **"Environment Variables"** (left sidebar)
5. Click **"Add New"**
6. Fill in:
   - **Name**: `DATABASE_URL`
   - **Value**: Your Neon connection string
   - **Environments**: Select all (Production, Preview, Development)
7. Click **"Save"**

### Step 8: Redeploy (If Needed)
If you added the environment variable after the first deployment:
1. Go to your project's **"Deployments"** tab
2. Click the **"⋯"** (three dots) menu on the latest deployment
3. Click **"Redeploy"**
4. Select **"Use existing Build Cache"** (optional)
5. Click **"Redeploy"**

**OR** simply push a new commit to trigger a new deployment.

---

## Part 3: Verify Everything Works

### Step 9: Test Your API Endpoint
1. After deployment, visit: `https://your-project.vercel.app/api/projects`
2. You should see JSON data with your projects:
   ```json
   [
     {
       "id": 1,
       "name": "My Awesome Project",
       "description": "This project does amazing things!",
       "image": "/Projects/Schedule.png",
       "link": "https://github.com/yourusername"
     },
     ...
   ]
   ```

### Step 10: Test Your Website
1. Visit your deployed website: `https://your-project.vercel.app`
2. Navigate to the Portfolio section
3. You should see your projects displayed in the slider!

---

## Troubleshooting

### Issue: "Failed to fetch projects" Error
**Solution**: 
- Check that `DATABASE_URL` is set in Vercel environment variables
- Verify the connection string is correct
- Make sure you redeployed after adding the environment variable

### Issue: "Table 'projects' does not exist"
**Solution**: 
- Go back to Neon SQL Editor
- Run the schema.sql file again
- Verify with: `SELECT * FROM projects;`

### Issue: API returns empty array `[]`
**Solution**: 
- Your database is connected, but there's no data
- Add projects using the SQL INSERT statements (Step 5)

### Issue: Can't connect to database
**Solution**: 
- Double-check your Neon connection string
- Make sure it includes `?sslmode=require` at the end
- Verify the connection string hasn't expired (Neon connection strings don't expire, but check for typos)

---

## Quick Reference: Important URLs

- **Neon Dashboard**: https://console.neon.tech
- **Vercel Dashboard**: https://vercel.com/dashboard
- **Your API Endpoint**: `https://your-project.vercel.app/api/projects`

---

## Summary Checklist

- [ ] Neon account created
- [ ] Neon project created
- [ ] Connection string copied
- [ ] Database schema run (projects table created)
- [ ] Sample data added (at least one project)
- [ ] Code pushed to GitHub
- [ ] Vercel project created
- [ ] `DATABASE_URL` added to Vercel environment variables
- [ ] Project deployed on Vercel
- [ ] Tested API endpoint (`/api/projects`)
- [ ] Verified projects show on website

---

## Adding More Projects Later

When you want to add more projects:

1. Go to Neon SQL Editor
2. Run:
```sql
INSERT INTO projects (name, description, image, link) 
VALUES ('New Project Name', 'Description', '/path/to/image.png', 'https://link.com');
```
3. The new project will automatically appear on your website (no redeploy needed for data changes!)

