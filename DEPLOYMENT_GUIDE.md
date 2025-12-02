# Deploy YSLG Events to Cloudflare Pages (FREE)

This guide will help you deploy your YSLG Events website to Cloudflare Pages for free hosting.

## Prerequisites
- A Cloudflare account (free at https://cloudflare.com)
- Git installed on your computer (or you can use direct upload)

---

## Option 1: Deploy via GitHub (Recommended - Auto-updates)

### Step 1: Create a GitHub Repository
1. Go to https://github.com/new
2. Name it: `yslg-events` (or any name you prefer)
3. Make it **Public** or **Private** (both work)
4. Click **Create repository**

### Step 2: Initialize Git and Push Your Code
Open terminal in your project folder and run:

```bash
git init
git add .
git commit -m "Initial commit - YSLG Events website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/yslg-events.git
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

### Step 3: Connect to Cloudflare Pages
1. Go to https://dash.cloudflare.com/
2. Click **Workers & Pages** in the left sidebar
3. Click **Create application**
4. Select **Pages** tab
5. Click **Connect to Git**
6. Authorize Cloudflare to access GitHub
7. Select your `yslg-events` repository
8. Click **Begin setup**

### Step 4: Configure Build Settings
In the build configuration page:

- **Production branch**: `main`
- **Framework preset**: Select **Vite**
- **Build command**: `npm run build`
- **Build output directory**: `dist`
- **Root directory**: `/` (leave as default)

Click **Save and Deploy**

### Step 5: Wait for Deployment
- First build takes 1-3 minutes
- You'll get a free `.pages.dev` URL (e.g., `yslg-events-abc.pages.dev`)
- Every git push will automatically redeploy!

---

## Option 2: Direct Upload (Quick Start)

### Step 1: Build Your Site Locally
In your project terminal, run:

```bash
npm run build
```

This creates a `dist` folder with your built website.

### Step 2: Upload to Cloudflare Pages
1. Go to https://dash.cloudflare.com/
2. Click **Workers & Pages**
3. Click **Create application**
4. Select **Pages** tab
5. Click **Upload assets**
6. Name your project: `yslg-events`
7. Drag and drop the entire `dist` folder
8. Click **Deploy site**

Your site will be live in seconds at `yslg-events-xyz.pages.dev`!

**Note**: With direct upload, you must manually rebuild and reupload for updates.

---

## Custom Domain (Optional)

### Add Your Own Domain
1. In Cloudflare Pages dashboard, go to your project
2. Click **Custom domains**
3. Click **Set up a custom domain**
4. Enter your domain (e.g., `yslgevents.com`)
5. Follow DNS setup instructions
6. Free SSL certificate is automatic!

---

## Build Configuration Details

Your project is already configured correctly:

```json
{
  "scripts": {
    "build": "vite build"
  }
}
```

Build settings:
- **Build command**: `npm run build`
- **Output directory**: `dist`
- **Node version**: 18+ (automatically detected)

---

## Free Tier Benefits

✅ **Unlimited bandwidth**
✅ **Unlimited requests**
✅ **500 builds per month**
✅ **Global CDN** (super fast worldwide)
✅ **Free SSL certificate**
✅ **Automatic HTTPS**
✅ **DDoS protection**
✅ **99.99% uptime**

---

## Updating Your Site

### With GitHub (Option 1):
```bash
# Make your changes, then:
git add .
git commit -m "Update website"
git push
```
Cloudflare automatically rebuilds and deploys!

### With Direct Upload (Option 2):
```bash
npm run build
# Then upload the new dist folder via Cloudflare dashboard
```

---

## Troubleshooting

### Build Fails
- Check build logs in Cloudflare dashboard
- Ensure `package.json` and `package-lock.json` are committed
- Verify Node version compatibility

### Images Not Loading
- Check that images are in `public/` folder
- Image paths should start with `/` (e.g., `/portfolio/image.jpg`)
- Clear cache and redeploy

### 404 Errors on Refresh
Cloudflare Pages handles this automatically for SPAs (Single Page Apps).

### Need Help?
- Cloudflare Docs: https://developers.cloudflare.com/pages/
- Cloudflare Community: https://community.cloudflare.com/

---

## Your Site Info

**Current Build Command**: `npm run build`
**Output Folder**: `dist/`
**Framework**: React + Vite + TypeScript
**Hosting**: Cloudflare Pages (FREE)

Once deployed, your site will be available 24/7 worldwide with blazing fast performance!