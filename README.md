# Live Weather Map

A real-time interactive map showing natural events happening around the world. Built with Next.js and powered by NASA's EONET API.

![Live Weather Map](https://img.shields.io/badge/Next.js-15.3.4-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19.0.0-blue?style=flat-square&logo=react)
![Leaflet](https://img.shields.io/badge/Leaflet-1.9.4-green?style=flat-square&logo=leaflet)

## What it does

This app displays live natural events on an interactive world map. You can see things like:
-  Volcanic eruptions
-  Wildfires  
-  Storms and hurricanes
-  Floods
- Ice events

All data comes directly from NASA's Earth Observatory Natural Event Tracker (EONET), so you're seeing real events as they happen.

## Features

- **Real-time data** from NASA's EONET API
- **Interactive map** with zoom and pan controls
- **Event filtering** by category (volcanoes, fires, storms, etc.)
- **Responsive design** that works on desktop and mobile
- **Clean, modern UI** with Tailwind CSS

## Quick start

1. Clone the repo:
```bash
git clone https://github.com/yourusername/Live-Weather-Map.git
cd Live-Weather-Map
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

 The map will load with current natural events around the world.

## How it works

The app fetches event data from NASA's EONET API, which tracks natural disasters and events globally. Each event gets plotted on the map with its exact coordinates. You can filter by event type using the dropdown in the top-right corner.

The map is built with Leaflet (via react-leaflet) and uses OpenStreetMap tiles for the base layer.

## Tech stack

- **Next.js 15** - React framework
- **React 19** - UI library  
- **Leaflet** - Interactive maps
- **Tailwind CSS** - Styling
- **NASA EONET API** - Event data

