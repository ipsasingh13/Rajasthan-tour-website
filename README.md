# 🏰 Rajasthan Tour Website

A comprehensive tour website for Rajasthan featuring cities, AI chatbot, itineraries, activities, reviews, and cultural information.

## ✨ Features

- 🏰 **Cities Guide**: Detailed information about major Rajasthan cities (Jaipur, Jodhpur, Udaipur, etc.)
- 🤖 **AI Chatbot**: Get information about food, culture, climate, and attractions
- 📅 **Itinerary Planner**: Create custom travel itineraries
- 🍜 **Food & Culture**: Explore Rajasthani cuisine and traditions
- ⭐ **Reviews & Ratings**: User reviews and ratings for places and experiences
- 🎭 **Activities**: Adventure and cultural activities
- 👑 **Royalty History**: Learn about Rajasthan's royal heritage
- 🔐 **User Authentication**: Secure login and registration

## 🛠 Tech Stack

### Frontend
- React 18+
- TypeScript
- Tailwind CSS
- React Router v6
- Axios
- Socket.io Client (for chatbot)

### Backend
- Node.js
- Express
- MongoDB
- JWT Authentication
- WebSocket (Socket.io)
- Multer (file uploads)

### Database
- MongoDB Atlas

## 📁 Project Structure

```
rajasthan-tour-website/
├── frontend/                 # React frontend
│   ├── src/
│   │   ├── components/      # Reusable components
│   │   ├── pages/          # Page components
│   │   ├── hooks/          # Custom hooks
│   │   ├── services/       # API services
│   │   ├── context/        # Context API
│   │   ├── styles/         # Global styles
│   │   └── App.tsx
│   ├── public/
│   ├── package.json
│   └── .env.example
│
├── backend/                  # Express backend
│   ├── src/
│   │   ├── routes/         # API routes
│   │   ├── controllers/    # Route controllers
│   │   ├── models/         # MongoDB schemas
│   │   ├── middleware/     # Custom middleware
│   │   ├── services/       # Business logic
│   │   ├── config/         # Configuration
│   │   └── server.ts
│   ├── package.json
│   └── .env.example
│
├── database/
│   ├── schemas/            # MongoDB schemas
│   └── seedData/          # Sample data
│
└── README.md
```

## 🚀 Quick Start

### Prerequisites
- Node.js v16+
- MongoDB Atlas account
- npm or yarn

### Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

### Backend Setup
```bash
cd backend
npm install
npm run dev
```

## 📋 Features Overview

### 1. Authentication
- User registration and login
- JWT-based session management
- User profiles and preferences
- Password reset functionality

### 2. Cities Information
- Jaipur (Pink City)
- Jodhpur (Blue City)
- Udaipur (City of Lakes)
- Jaisalmer (Golden City)
- Pushkar
- Bikaner
- Kota
- Mount Abu

### 3. Intelligent Chatbot
- Real-time food recommendations
- Cultural insights and traditions
- Weather and climate information
- Activity suggestions
- Local tips and tricks
- 24/7 support

### 4. Itinerary Management
- Create personalized itineraries
- 3-day, 5-day, 7-day plans
- Budget recommendations
- Save and share itineraries
- Collaborative planning

### 5. Activities
- Desert safari and camel trekking
- Fort and palace tours
- Food tours and cooking classes
- Shopping experiences
- Water activities
- Adventure sports

### 6. Reviews & Ratings
- Rate places and experiences
- Upload photos with reviews
- Read community feedback
- Filter by rating

### 7. Culture & Royalty
- Royal palaces and forts
- History timeline
- Traditional practices
- Architectural marvels
- Royal families

### 8. Additional Features
- Multi-language support
- Dark mode
- Mobile responsive design
- Booking integration
- Travel guides PDF download

## 📚 API Documentation

See [Backend API Docs](./backend/API_DOCS.md)

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

## 📝 License

This project is licensed under the MIT License - see [LICENSE](LICENSE) file for details.

## 👥 Authors

- **Ipsa Singh** - Initial work

## 📞 Support

For support, email: ipsasingh13@example.com

---

**Happy Exploring Rajasthan! 🎉**
