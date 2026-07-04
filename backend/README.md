# Rajasthan Tour Website - Backend

Express.js backend API for the Rajasthan Tour Website.

## Installation

```bash
npm install
```

## Environment Setup

Copy `.env.example` to `.env` and fill in your configuration:

```bash
cp .env.example .env
```

## Development

```bash
npm run dev
```

The server runs on `http://localhost:5000`

## Build

```bash
npm run build
```

## Start Production

```bash
npm start
```

## Project Structure

```
src/
├── routes/           # API routes
│   ├── auth.ts
│   ├── cities.ts
│   ├── itineraries.ts
│   ├── activities.ts
│   ├── reviews.ts
│   └── chatbot.ts
├── controllers/      # Route controllers
├── models/           # MongoDB schemas
├── middleware/       # Custom middleware
├── services/         # Business logic
├── config/           # Configuration files
└── server.ts         # Main server file
```
