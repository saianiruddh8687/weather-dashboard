# Weather Dashboard - Setup Guide

## Prerequisites

- **Node.js**: v16 or higher
- **npm** or **yarn**: Package manager
- **OpenWeatherMap Account**: Free tier available

## Step-by-Step Setup

### 1. Get OpenWeatherMap API Key

1. Visit [OpenWeatherMap](https://openweathermap.org/api)
2. Sign up for a free account
3. Navigate to "API keys" section in your dashboard
4. Copy your default API key

### 2. Clone and Navigate

```bash
git clone https://github.com/saianiruddh8687/weather-dashboard.git
cd weather-dashboard
```

### 3. Frontend Setup

```bash
cd frontend
npm install
```

Create `.env.local` file in `frontend` directory:

```env
VITE_WEATHER_API_KEY=your_api_key_here
VITE_WEATHER_API_BASE_URL=https://api.openweathermap.org/data/2.5
```

Start development server:

```bash
npm run dev
```

Open `http://localhost:5173` in your browser.

### 4. Backend Setup (Optional)

```bash
cd backend
npm install
```

Create `.env` file in `backend` directory:

```env
PORT=5000
NODE_ENV=development
WEATHER_API_KEY=your_api_key_here
WEATHER_API_BASE_URL=https://api.openweathermap.org/data/2.5
CORS_ORIGIN=http://localhost:5173
```

Start backend server:

```bash
npm run dev
```

Backend will run on `http://localhost:5000`.

## Available Scripts

### Frontend

```bash
npm run dev       # Start Vite dev server
npm run build     # Build for production
npm run preview   # Preview production build
npm run lint      # Run ESLint
```

### Backend

```bash
npm start         # Start production server
npm run dev       # Start with nodemon (auto-reload)
npm run build     # Compile TypeScript
npm run lint      # Run ESLint
```

## API Endpoints (Backend)

### Current Weather

- **By City**: `GET /api/weather/current?city=London&units=metric`
- **By Coordinates**: `GET /api/weather/current/coords?lat=51.5&lon=-0.1&units=metric`

### Forecast

- **By City**: `GET /api/weather/forecast?city=London&units=metric`
- **By Coordinates**: `GET /api/weather/forecast/coords?lat=51.5&lon=-0.1&units=metric`

### Geocoding

- **Get Coordinates**: `GET /api/weather/geocode?city=London`

### Health Check

- **Server Status**: `GET /api/health`

## Query Parameters

| Parameter | Type | Description | Example |
|-----------|------|-------------|---------|
| `city` | string | City name | London |
| `lat` | number | Latitude | 51.5 |
| `lon` | number | Longitude | -0.1 |
| `units` | string | metric/imperial | metric |
| `lang` | string | Language code | en |
| `limit` | number | Results limit | 5 |

## Common Issues

### Issue: "Invalid API Key"

**Solution**: 
- Verify your API key is correct in `.env.local` or `.env`
- Check that your OpenWeatherMap account is active
- Wait a few minutes after account creation for activation

### Issue: CORS Error

**Solution**:
- If using backend, ensure `CORS_ORIGIN` matches your frontend URL
- Direct frontend approach bypasses CORS

### Issue: Rate Limiting

**Solution**:
- Free tier: 60 calls/minute
- Implement caching or upgrade to paid tier
- Check OpenWeatherMap API limits

### Issue: "City not found"

**Solution**:
- Verify city name spelling
- Try full name: "New York" instead of "NY"
- Use coordinates instead

## Performance Tips

1. **Implement Caching**: Cache weather data locally
2. **Debounce Searches**: Limit API calls during typing
3. **Use Lazy Loading**: Load forecast data only when needed
4. **Optimize Images**: Weather icons are already optimized

## Security Best Practices

1. **Never commit `.env` files**: Add to `.gitignore`
2. **Use Backend Proxy**: Hide API key using backend server
3. **Rate Limiting**: Implement on backend
4. **Input Validation**: Validate all user inputs

## Deployment

### Frontend (Vercel)

```bash
npm install -g vercel
vercel
```

### Frontend (Netlify)

```bash
npm run build
# Deploy the 'dist' folder to Netlify
```

### Backend (Heroku)

```bash
heroku create your-app-name
git push heroku main
```

### Backend (Railway)

```bash
railway login
railway link
railway up
```

## Environment Setup for Different Services

### Vercel (Frontend)

Add environment variables in Vercel dashboard:
- `VITE_WEATHER_API_KEY`
- `VITE_WEATHER_API_BASE_URL`

### Heroku (Backend)

```bash
heroku config:set WEATHER_API_KEY=your_key
heroku config:set WEATHER_API_BASE_URL=https://api.openweathermap.org/data/2.5
```

## Testing

### Manual Testing

1. Search for various cities
2. Test geolocation feature
3. Toggle between Celsius/Fahrenheit
4. Test search history
5. Toggle dark/light theme

### API Testing

Use Postman or curl:

```bash
curl "http://localhost:5000/api/weather/current?city=London"
curl "http://localhost:5000/api/health"
```

## Troubleshooting

### Port Already in Use

```bash
# Frontend (if 5173 is busy)
npm run dev -- --port 3000

# Backend (if 5000 is busy)
PORT=3001 npm start
```

### Module Not Found

```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Build Errors

```bash
# Clear TypeScript cache
rm -rf dist
npm run build
```

## Support

- Check GitHub Issues
- Review OpenWeatherMap Documentation
- Check console for specific error messages

## Additional Resources

- [React Documentation](https://react.dev)
- [TypeScript Documentation](https://www.typescriptlang.org)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [OpenWeatherMap API Docs](https://openweathermap.org/api)
- [Express.js Documentation](https://expressjs.com)

---

Happy coding! 🌤️
