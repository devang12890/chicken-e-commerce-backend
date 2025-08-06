# CHICKEN Frontend

This is the frontend for the CHICKEN streetwear e-commerce website.

## Features

- Modern, responsive design
- Dark/Light theme toggle
- Product catalog with dynamic loading
- Shopping cart functionality
- Local storage for cart persistence

## Deployment on Vercel

### Prerequisites
- Vercel account
- Backend API deployed (Railway/Render/Heroku)

### Steps to Deploy

1. **Update API URL**
   - Open `script.js`
   - Update `API_BASE_URL` with your backend URL:
   ```javascript
   const API_BASE_URL = 'https://your-backend-url.railway.app/api';
   ```

2. **Deploy to Vercel**
   ```bash
   # Install Vercel CLI
   npm i -g vercel
   
   # Navigate to frontend directory
   cd frontend
   
   # Deploy
   vercel
   ```

3. **Alternative: GitHub Integration**
   - Push your code to GitHub
   - Connect your repository to Vercel
   - Vercel will automatically deploy on push

### Environment Variables (Optional)
You can set environment variables in Vercel dashboard:
- `API_BASE_URL`: Your backend API URL

## Local Development

1. **Serve locally**
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   ```

2. **Open browser**
   - Navigate to `http://localhost:8000`

## File Structure

```
frontend/
├── index.html          # Main page
├── cart.html           # Cart page
├── style.css           # Styles
├── script.js           # JavaScript functionality
├── vercel.json         # Vercel configuration
└── README.md           # This file
```

## API Integration

The frontend communicates with the backend through REST API endpoints:

- `GET /api/products` - Get all products
- `GET /api/products/{id}` - Get specific product
- `POST /api/orders` - Create new order

## Customization

- Update colors in `style.css`
- Modify product data in `script.js`
- Add new pages as needed
- Customize theme toggle functionality 