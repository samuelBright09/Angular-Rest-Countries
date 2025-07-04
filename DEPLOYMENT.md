# Deployment Guide

This guide explains how to deploy the Rest Countries app to various hosting platforms.

## Prerequisites

- Node.js 18+ installed
- Git repository set up
- Build the project: `npm run build:prod`

## Hosting Options

### 1. Netlify (Recommended)

**Automatic Deployment:**
1. Connect your GitHub repository to Netlify
2. Netlify will automatically detect the `netlify.toml` configuration
3. Deployments will happen automatically on every push to main branch

**Manual Deployment:**
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build the project
npm run build:prod

# Deploy
netlify deploy --prod --dir=dist/rest-countries
```

### 2. Vercel

**Automatic Deployment:**
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect the `vercel.json` configuration
3. Deployments will happen automatically on every push

**Manual Deployment:**
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

### 3. GitHub Pages

**Automatic Deployment:**
1. The GitHub Actions workflow (`.github/workflows/deploy.yml`) will automatically deploy on push to main
2. Enable GitHub Pages in your repository settings
3. Set the source to "GitHub Actions"

**Manual Deployment:**
```bash
# Build the project
npm run build:prod

# Push to gh-pages branch (requires gh-pages package)
npx gh-pages -d dist/rest-countries
```

### 4. Firebase Hosting

**Setup:**
```bash
# Install Firebase CLI
npm install -g firebase-tools

# Login to Firebase
firebase login

# Initialize Firebase
firebase init hosting

# Build and deploy
npm run build:prod
firebase deploy
```

### 5. AWS S3 + CloudFront

**Setup:**
1. Create an S3 bucket
2. Enable static website hosting
3. Upload the contents of `dist/rest-countries/`
4. Set up CloudFront distribution for CDN

## Environment Variables

The app uses the REST Countries API which is public and doesn't require API keys. If you need to change the API URL:

1. Update `src/environments/environment.ts` for development
2. Update `src/environments/environment.prod.ts` for production

## Build Commands

- `npm run build` - Development build
- `npm run build:prod` - Production build (optimized)
- `npm run build:staging` - Production build with file hashing
- `npm run serve:prod` - Serve production build locally

## Troubleshooting

### Common Issues:

1. **404 errors on refresh**: Ensure your hosting platform is configured for SPA routing (all routes redirect to index.html)
2. **Build failures**: Check Node.js version (requires 18+)
3. **CORS issues**: The REST Countries API supports CORS, but if you change the API, ensure CORS is enabled

### Performance Optimization:

- The production build includes:
  - Tree shaking
  - Minification
  - Bundle optimization
  - Service worker (if configured)

## Monitoring

After deployment, monitor:
- Page load times
- API response times
- Error rates
- User engagement metrics 