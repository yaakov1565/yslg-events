# 🔧 Fix Cloudflare Pages Deployment

## The Problem
Cloudflare Pages is trying to run a deploy command (`npx wrangler deploy`) which is for Workers, not Pages. Static sites like yours don't need a deploy command.

## The Solution - Update Your Cloudflare Pages Settings

### Step 1: Go to Your Project Settings
1. Visit https://dash.cloudflare.com/
2. Click **Workers & Pages**
3. Click on your **yslg-events** project
4. Click **Settings** tab

### Step 2: Fix Build Configuration
Scroll down to **Build configuration** section:

**Build command**: `npm run build` ✅ (This is correct)

**Build output directory**: `dist` ✅ (This is correct)

**Root directory**: `/` ✅ (This is correct - leave blank or /)

### Step 3: Remove Deploy Command (IMPORTANT!)
Look for **"Deploy command"** or any custom command settings.

**Deploy command**: Should be **EMPTY** or **NOT SET**

If there's anything like `npx wrangler deploy` in there, **DELETE IT**.

Cloudflare Pages automatically deploys the `dist` folder after building - no deploy command needed!

### Step 4: Save and Retry
1. Click **Save** at the bottom
2. Go back to **Deployments** tab
3. Click **Retry deployment** on the failed build
   - OR make a small change and push to trigger new deployment

---

## Alternative: Create New Deployment

If settings won't save or you want a fresh start:

### Option A: Retry Current Deployment
1. Go to **Deployments** in your project
2. Find the failed deployment
3. Click the three dots menu (⋮)
4. Click **Retry deployment**

### Option B: Manual Trigger
Make a small change and push:
```bash
# Add a comment to trigger rebuild
echo "# Trigger rebuild" >> README.md
git add .
git commit -m "Trigger rebuild"
git push
```

---

## Correct Settings Summary

For your Vite/React site, Cloudflare Pages needs:

```
Framework preset: Vite (or None)
Build command: npm run build
Build output directory: dist
Root directory: (leave blank or /)
Deploy command: (EMPTY - no deploy command needed!)
```

---

## After Fixing

Once saved correctly, your deployment should succeed and show:

✅ Build command completed
✅ Deploying to Cloudflare's global network
✅ Deployment complete

Your site will be live at: `https://yslg-events.pages.dev`

---

## Still Having Issues?

The deploy command might be set at the project level. Try:

1. **Delete the project** from Cloudflare Pages
2. **Reconnect from GitHub** following these exact steps:
   - Workers & Pages → Create → Pages → Connect to Git
   - Select your repo: yaakov1565/yslg-events
   - **Framework preset**: Select "Vite"
   - **Build command**: `npm run build`
   - **Build output**: `dist`
   - **Deploy command**: Leave EMPTY
   - Click Save and Deploy

This should work perfectly!