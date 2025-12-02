# ✅ GitHub Connected! Now Deploy to Cloudflare Pages

Your code is now live on GitHub at:
**https://github.com/yaakov1565/yslg-events**

## Next: Connect to Cloudflare Pages (5 minutes)

### Step 1: Go to Cloudflare Dashboard
Visit: **https://dash.cloudflare.com/**

### Step 2: Create New Pages Project
1. Click **Workers & Pages** in the left sidebar
2. Click **Create application**
3. Click the **Pages** tab
4. Click **Connect to Git**

### Step 3: Connect GitHub
1. Click **Connect GitHub**
2. Authorize Cloudflare to access your GitHub account
3. Select **Only select repositories**
4. Choose **yaakov1565/yslg-events**
5. Click **Install & Authorize**

### Step 4: Configure Build Settings
You'll see a configuration page. Enter these settings:

**Basic Settings:**
- **Project name**: `yslg-events` (or any name you prefer)
- **Production branch**: `main`

**Build Settings:**
- **Framework preset**: Select **Vite** from dropdown
- **Build command**: `npm run build`
- **Build output directory**: `dist`

**Environment Variables:**
- None needed (leave empty)

### Step 5: Deploy!
1. Click **Save and Deploy**
2. Wait 1-3 minutes for the first build
3. Your site will be live! 🎉

### Your Live URL
Cloudflare will provide a URL like:
`https://yslg-events.pages.dev`

You can also add a custom domain later!

---

## 🎊 After Deployment

### Auto-Deploy is Active!
Every time you push to GitHub, Cloudflare automatically:
1. Detects the change
2. Builds your site
3. Deploys the update
4. Takes about 1-2 minutes

### How to Update Your Site
```bash
# Make changes to your code, then:
git add .
git commit -m "Update site"
git push
```

That's it! Cloudflare handles the rest automatically.

---

## 🌟 Features You Get FREE

✅ **Unlimited bandwidth** - No traffic limits
✅ **Unlimited requests** - Handle any traffic
✅ **500 builds/month** - More than enough
✅ **Global CDN** - Lightning fast worldwide
✅ **Free SSL/HTTPS** - Automatic security
✅ **DDoS protection** - Enterprise-grade
✅ **99.99% uptime SLA**
✅ **Automatic deployments** from GitHub
✅ **Deploy previews** for branches
✅ **Rollback** to previous versions
✅ **Custom domain** support

---

## 📱 Custom Domain (Optional)

### Add Your Own Domain
1. In your Cloudflare Pages project
2. Go to **Custom domains** tab
3. Click **Set up a custom domain**
4. Enter your domain (e.g., `yslgevents.com`)
5. Follow the DNS instructions
6. Free SSL certificate automatically applied!

---

## 🛠️ Managing Your Site

### View Deployments
- See all builds in Cloudflare dashboard
- Each commit creates a new deployment
- Easy rollback to any previous version

### Check Build Logs
- Click any deployment to see logs
- Debug any build issues
- Monitor performance

### Analytics (Coming Soon)
- Cloudflare will add free analytics
- Track visitors and performance
- No configuration needed

---

## 🎯 You're All Set!

Your YSLG Events website is now:
- ✅ On GitHub for version control
- ✅ Ready for Cloudflare Pages deployment
- ✅ Set for automatic updates

**Next step**: Follow the instructions above to connect GitHub to Cloudflare Pages!