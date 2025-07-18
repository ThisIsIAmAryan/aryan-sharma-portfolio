# Deployment Guide

## 🚀 Deploy to Vercel

### Step 1: Push to GitHub

1. **Initialize Git repository** (if not already done):
```bash
git init
git add .
git commit -m "Initial commit: Aryan Sharma Portfolio"
```

2. **Create a new GitHub repository**:
   - Go to [GitHub](https://github.com/new)
   - Repository name: `aryan-sharma-portfolio`
   - Description: "Modern portfolio website showcasing web development skills and projects"
   - Make it public
   - Click "Create repository"

3. **Push to GitHub**:
```bash
git remote add origin https://github.com/ThisIsIAmAryan/aryan-sharma-portfolio.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy to Vercel

1. **Go to Vercel**:
   - Visit [vercel.com](https://vercel.com)
   - Sign up/Login with your GitHub account

2. **Import Project**:
   - Click "New Project"
   - Select your `aryan-sharma-portfolio` repository
   - Click "Import"

3. **Configure Project**:
   - Project Name: `aryan-sharma-portfolio`
   - Framework Preset: `Vite`
   - Build Command: `npm run build`
   - Output Directory: `client/dist`
   - Install Command: `npm install`

4. **Environment Variables**:
   - Add `DATABASE_URL` with your PostgreSQL connection string
   - You can use Vercel's PostgreSQL or keep your current database

5. **Deploy**:
   - Click "Deploy"
   - Your site will be available at: `https://aryan-sharma-portfolio.vercel.app`

### Step 3: Custom Domain (Optional)

If you want a custom domain like `aryansharma.dev`:

1. **Purchase Domain**:
   - Buy from providers like Namecheap, GoDaddy, or directly from Vercel

2. **Add to Vercel**:
   - Go to your project settings
   - Domains section
   - Add your custom domain
   - Follow DNS configuration instructions

### Step 4: Database Setup for Production

For production database:

1. **Neon (Recommended)**:
   - Free PostgreSQL database
   - Go to [neon.tech](https://neon.tech)
   - Create account and new database
   - Copy connection string to Vercel environment variables

2. **Vercel Postgres**:
   - Go to Storage tab in Vercel dashboard
   - Create new Postgres database
   - Environment variables are automatically added

### Step 5: Final Steps

1. **Test Deployment**:
   - Visit your deployed site
   - Test contact form functionality
   - Verify all sections load correctly

2. **Update Links**:
   - Update resume PDF link if needed
   - Test all social media links
   - Verify project GitHub links

## 📋 Troubleshooting

### Common Issues:

1. **Build Errors**:
   - Check if all dependencies are in package.json
   - Ensure TypeScript types are correct
   - Verify environment variables are set

2. **Database Connection**:
   - Ensure DATABASE_URL is correct
   - Check if database is accessible from Vercel
   - Verify schema is pushed to production database

3. **Contact Form Not Working**:
   - Check API routes are deployed
   - Verify database connection
   - Check browser console for errors

### Performance Tips:

1. **Optimize Images**:
   - Use WebP format when possible
   - Compress images before uploading
   - Use proper alt texts for SEO

2. **SEO Optimization**:
   - Add meta tags to index.html
   - Include sitemap.xml
   - Optimize page titles and descriptions

## 🎯 Next Steps

After deployment:

1. **Share Your Portfolio**:
   - Add link to your GitHub profile
   - Update LinkedIn with portfolio link
   - Share on social media

2. **Analytics** (Optional):
   - Add Google Analytics
   - Monitor site performance
   - Track visitor engagement

3. **Continuous Updates**:
   - Add new projects as you build them
   - Update skills and experience
   - Keep content fresh and relevant

## 📞 Support

If you encounter any issues:
- Check Vercel deployment logs
- Review GitHub repository settings
- Verify environment variables
- Test locally first before debugging production

---

Your portfolio will be live at: `https://aryan-sharma-portfolio.vercel.app`