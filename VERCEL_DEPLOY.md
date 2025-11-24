# Vercel Deployment Fix

## The Problem
Vercel 404 error means it can't find your files. This happens when the build configuration is wrong.

## Solution: Two Options

### Option 1: Use vercel.json (Recommended)

I've added a `vercel.json` file. Now deploy:

1. Push to GitHub:
```bash
git add .
git commit -m "Add Vercel config"
git push
```

2. In Vercel dashboard:
   - Go to your project settings
   - **Remove** the Root Directory setting (leave it empty)
   - Redeploy

Vercel will now use the vercel.json config automatically.

### Option 2: Manual Configuration

If you prefer not to use vercel.json:

1. In Vercel project settings:
   - Framework Preset: **Vite**
   - Root Directory: **frontend**
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

2. Make sure "Override" is checked for Build Command

3. Redeploy

## Common Issues

### Still 404?

**Check 1: Build Logs**
- Go to Vercel dashboard
- Click on your deployment
- Check "Building" tab
- Look for errors

**Check 2: Output Directory**
After build completes, Vercel should show:
```
✓ Build Completed
✓ Uploading Build Outputs
```

If you see "No Output Directory", the build failed.

**Check 3: File Structure**
Your repo should have:
```
mediscan-ai/
├── frontend/
│   ├── src/
│   ├── package.json
│   └── vite.config.ts
└── vercel.json
```

### Build Failed?

Common causes:
1. Missing dependencies in package.json
2. TypeScript errors
3. Wrong Node version

Check the build logs for specific errors.

## Quick Test

After deploying, your Vercel URL should show:
- MediScan AI header
- Upload interface
- Statistics section

If you see a blank page or 404, check the browser console (F12) for errors.

## Need Help?

Share:
1. Your Vercel deployment URL
2. Build logs from Vercel dashboard
3. Any error messages
