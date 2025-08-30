# 🌤️ Netlify serverless function (React Weather App)

A weather application built with React, Vite, and Tailwind CSS. Features a clean UI with real-time weather data fetched through Netlify serverless functions.

## ✨ Features

- **Real-time Weather Data**: Get current weather information for any city worldwide
- **Dynamic Weather Icons**: Visual weather representation based on conditions
- **Detailed Weather Info**: Temperature, feels like, humidity, pressure, and wind speed
- **Serverless Backend**: Secure API calls through Netlify Functions
- **Error Handling**: User-friendly error messages and loading states

## 🛠️ Tech Stack

- **Frontend**: React 19, Vite
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **Backend**: Netlify Serverless Functions
- **Weather API**: OpenWeatherMap
- **Deployment**: Netlify

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- OpenWeatherMap API key

### Installation

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd netlify-serverless-function
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env` file in the root directory:

   ```env
   OPENWEATHER_API_KEY=your_openweathermap_api_key_here
   ```

   To get an API key:

   - Sign up at [OpenWeatherMap](https://openweathermap.org/api)
   - Navigate to your API keys section
   - Copy your API key

4. **Run the development server**

   ```bash
   npm run dev
   ```

   The app will be available at `http://localhost:3000`

### Development with Netlify Functions

To test the serverless functions locally:

```bash
npm start
```

This will start the Netlify dev server with function support.

## 📁 Project Structure

```
netlify-serverless-function/
├── netlify/
│   ├── functions/
│     └── weather.js          # Serverless function for weather API
├── public/
│   └── vite.svg
├── src/
│   ├── App.jsx                 # Main application component
│   ├── index.css               # Global styles
│   └── main.jsx                # Application entry point
├── index.html
|── netlify.toml            # Netlify configuration
├── package.json
├── vite.config.js
└── eslint.config.js
```

## 🔧 Available Scripts

- `npm run dev` - Start Vite development server
- `npm run build` - Build for production
- `npm run start` - Start Netlify dev server with functions
- `npm run preview` - Preview production build

## 🔒 Security

- API keys are stored as environment variables
- Serverless functions handle API calls securely
- CORS headers are properly configured
- Input validation prevents malicious requests

## 🎨 UI Features

- **Gradient Background**: Beautiful blue gradient effects
- **Weather Icons**: Dynamic icons based on weather conditions
- **Responsive Grid**: Clean layout for weather details
- **Loading States**: Smooth loading animations
- **Error Handling**: User-friendly error messages

## 📱 Usage

1. Enter a city name in the search input
2. Press Enter or click the search button
3. View current weather information including:
   - Temperature (°C)
   - Weather description
   - Feels like temperature
   - Humidity percentage
   - Atmospheric pressure
   - Wind speed

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 🙏 Acknowledgments

- [OpenWeatherMap](https://openweathermap.org/) for weather data
- [Lucide React](https://lucide.dev/) for beautiful icons
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Netlify](https://netlify.com/) for hosting and serverless functions

## 📞 Support

If you encounter any issues or have questions:

1. Check the [Issues](https://github.com/yourusername/react-weather-app-netlify-serverless-function/issues) page
2. Create a new issue with detailed information
3. Include your Node.js version and operating system

---

Made with ❤️ using React and Netlify
