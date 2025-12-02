# 🚀 Deploy to Netlify (Easiest Free Option)

Netlify is simpler than Cloudflare and works perfectly for your site!

## Option 1: Drag & Drop (2 Minutes - Recommended!)

### Step 1: Build Your Site
Your `dist` folder is already built! If you need to rebuild:
```bash
npm run build
```

### Step 2: Deploy to Netlify
1. Go to https://app.netlify.com/drop
2. **Drag and drop** your entire `dist` folder onto the page
3. Wait 10 seconds
4. **Done!** Your site is live! 🎉

You'll get a free URL like: `https://random-name-123456.netlify.app`

### Step 3: (Optional) Change Site Name
1. Click **Site settings**
2. Click **Change site name**
3. Enter: `yslg-events` (if available)
4. Your URL becomes: `https://yslg-events.netlify.app`

**That's it! Your site is live and free forever.**

---

## Option 2: Connect to GitHub (Auto-Deploy)

If you want automatic deployments when you push to GitHub:

### Step 1: Sign Up / Login
1. Go to https://app.netlify.com/
2. Sign up with GitHub (or email)

### Step 2: Deploy from GitHub
1. Click **Add new site** → **Import an existing project**
2. Click **Deploy with GitHub**
3. Authorize Netlify to access GitHub
4. Select repository: **yaakov1565/yslg-events**
5. Configure settings:
   - **Branch**: `main`
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
6. Click **Deploy site**

### Step 3: Wait 2 Minutes
Your site builds and deploys automatically!

---

## What You Get FREE with Netlify

✅ **100 GB bandwidth/month** (more than enough)
✅ **Unlimited sites**
✅ **Automatic HTTPS/SSL**
✅ **Global CDN** (fast worldwide)
✅ **Auto-deploy** from GitHub
✅ **Custom domain** support
✅ **Deploy previews** for branches
✅ **Instant rollback**
✅ **300 build minutes/month**

---

## Updating Your Site

### With Drag & Drop (Option 1):
```bash
npm run build
# Drag new dist folder to Netlify dashboard
```

### With GitHub (Option 2):
```bash
git add .
git commit -m "Update site"
git push
# Automatic deploy!
```

---

## Custom Domain (Optional)

1. In Netlify dashboard, go to **Domain settings**
2. Click **Add custom domain**
3. Enter your domain: `yslgevents.com`
4. Follow DNS instructions
5. Free SSL automatically applied!

---

## Why Netlify is Easier

- **No complex configuration** needed
- **Clearer interface** than Cloudflare
- **Better error messages**
- **Faster builds**
- **Great documentation**

---

## Live in 2 Minutes!

Just go to https://app.netlify.com/drop and drag your `dist` folder.

Your YSLG Events site will be live worldwide in seconds! 🌎