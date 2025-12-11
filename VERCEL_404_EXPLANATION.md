# Complete Explanation: Vercel 404 Error

## 1. The Fix

**Problem:** The rewrite rule in `vercel.json` was too broad, catching ALL routes including API endpoints.

**Solution:** Exclude `/api/*` routes from the rewrite pattern:

```json
{
  "rewrites": [
    {
      "source": "/((?!api).*)",
      "destination": "/index.html"
    }
  ]
}
```

This regex means: "Match any path that does NOT start with 'api'"

---

## 2. Root Cause Analysis

### What Was Happening vs. What Should Happen

**What the code was doing:**
```json
{
  "source": "/(.*)"  // Matches EVERYTHING: /, /api/projects, /assets/logo.png
}
```
- User visits `/api/projects` → Rewritten to `/index.html` ❌
- User visits `/assets/index.js` → Rewritten to `/index.html` ❌  
- User visits `/` → Rewritten to `/index.html` ✅ (correct)
- User visits `/about` → Rewritten to `/index.html` ✅ (correct for SPA)

**What it SHOULD do:**
- User visits `/api/projects` → Goes to serverless function ✅
- User visits `/assets/index.js` → Serves the actual file ✅
- User visits `/` → Serves `index.html` ✅
- User visits `/about` → Rewrites to `index.html` for React Router ✅

### What Triggered This Error

1. **Request Flow on Vercel:**
   ```
   Request: GET /api/projects
   ↓
   Vercel checks: Does file exist? No (it's a serverless function)
   ↓
   Vercel checks: Does rewrite match? YES - "/(.*)" matches everything!
   ↓
   Result: Serve /index.html instead of running the API function
   ↓
   Browser gets HTML instead of JSON → 404 or wrong content type
   ```

2. **The Cascade Effect:**
   - API calls return HTML instead of JSON
   - Frontend can't parse the response
   - App breaks, shows errors/404s

### The Misconception

**Wrong mental model:** "Rewrites are for routing - catch all routes"

**Correct mental model:** "Rewrites are exceptions - only handle routes that DON'T have files or functions"

You should think: "What routes do I need to handle manually?" not "What routes should I catch?"

---

## 3. Understanding the Concept

### Why This Error Exists

Vercel's routing system has multiple layers that process in order:

1. **Static Files** - Files in `dist/` (automatically served)
2. **Serverless Functions** - Files in `api/` (automatically executed)
3. **Rewrites** - Manual rules (only for routes not handled above)
4. **404** - Nothing matched

**The rewrite rule should only handle routes that:**
- Don't correspond to actual files
- Don't correspond to API functions
- Need special handling (like SPA routing)

### Correct Mental Model

Think of Vercel's routing as a **waterfall**:

```
Request comes in
    ↓
Is it a static file? → Yes → Serve file → DONE
    ↓ No
Is it an API route? → Yes → Run function → DONE  
    ↓ No
Does rewrite match? → Yes → Apply rewrite → Continue checking
    ↓ No
404 Not Found
```

**Key Insight:** Rewrites are a **fallback**, not the primary mechanism.

### How This Fits Into Vercel's Design

Vercel is designed for:
- **JAMstack** (JavaScript, APIs, Markup)
- **Serverless** architecture
- **Static site generation** with dynamic capabilities

The framework expects:
- Most routes = static files (fast, cached)
- Some routes = API functions (dynamic, serverless)
- Few routes = rewrites (special cases like SPAs)

Your rewrite was fighting against this design by trying to handle everything.

---

## 4. Warning Signs & Prevention

### Red Flags to Watch For

1. **Overly broad patterns:**
   ```json
   // ❌ BAD - Too broad
   "source": "/(.*)"
   "source": "/*"
   
   // ✅ GOOD - Specific exclusions
   "source": "/((?!api).*)"
   ```

2. **Rewrites catching API routes:**
   - If `/api/*` endpoints return HTML instead of JSON
   - If API calls work in dev but fail in production

3. **Rewrites catching static assets:**
   - If CSS/JS/images don't load
   - If asset URLs return HTML

4. **All routes returning the same content:**
   - Every URL shows your React app (even API endpoints)

### Code Smells

- Rewrite pattern without exclusions: `"/(.*)"`
- Testing only the homepage during development
- Not testing API endpoints after adding rewrites
- Build succeeds but site doesn't work

### Testing Checklist

Before deploying, always test:
- [ ] Homepage loads (`/`)
- [ ] API endpoint works (`/api/projects`)
- [ ] Static assets load (`/assets/logo.png`)
- [ ] SPA routes work (`/about`, `/contact`)
- [ ] Direct URL navigation works (refresh on `/about`)

---

## 5. Alternative Approaches & Trade-offs

### Approach 1: Negative Lookahead Regex (Current Solution)
```json
{
  "source": "/((?!api).*)",
  "destination": "/index.html"
}
```
**Pros:**
- Simple, one rule
- Explicit exclusion of API routes
- Works with Vercel's auto-detection

**Cons:**
- Regex can be confusing
- Need to add more exclusions if you add other prefixes

### Approach 2: Explicit Builds Configuration
```json
{
  "version": 2,
  "builds": [
    { "src": "api/**/*.js", "use": "@vercel/node" },
    { "src": "package.json", "use": "@vercel/static-build", "config": { "distDir": "dist" } }
  ],
  "routes": [
    { "src": "/api/(.*)", "dest": "/api/$1" },
    { "handle": "filesystem" },
    { "src": "/(.*)", "dest": "/index.html" }
  ]
}
```
**Pros:**
- Very explicit, clear separation
- Full control over build process
- Clear file handling order

**Cons:**
- More verbose
- Requires understanding of builds/routes system
- More complex configuration

### Approach 3: Separate Rewrite Rules
```json
{
  "rewrites": [
    {
      "source": "/api/:path*",
      "destination": "/api/:path*"
    },
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```
**Pros:**
- Explicit API handling
- Clear intent

**Cons:**
- Redundant (Vercel auto-detects `api/`)
- More rules to maintain

### Recommended Approach

**Use Approach 1 (Negative Lookahead)** for most cases because:
- Vercel auto-detects `api/` folder - don't fight it
- Simple configuration
- Easy to extend if needed

**Use Approach 2 (Explicit Builds)** if you need:
- Complex build configurations
- Multiple build outputs
- Fine-grained control

---

## Key Takeaways

1. **Rewrites are exceptions, not defaults** - Only use for routes that need special handling

2. **Vercel auto-detects** - `api/` folder and static files are handled automatically

3. **Test API endpoints** - Always verify API routes work after adding rewrites

4. **Be specific** - Use negative lookaheads or exclusions in regex patterns

5. **Order matters** - Vercel processes: files → functions → rewrites → 404

Remember: **If it's already handled automatically, don't rewrite it!**

