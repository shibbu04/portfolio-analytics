# Portfolio Analytics Dashboard 🚀

A modern, feature-rich portfolio analytics platform designed to empower investors with actionable insights, track investments, and monitor market performance in real-time. Built with cutting-edge technologies, this platform offers an intuitive interface and robust functionality for all users.

![Portfolio Analytics Dashboard](https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=1200)

---

## 🌟 Features

- 📊 **Interactive Charts**: Real-time visualization of portfolio performance.
- 💰 **Investment Tracking**: Monitor multiple investment strategies effortlessly.
- 📈 **Market Updates**: Live market data and recent trade information.
- 📱 **Responsive Design**: Seamless experience across all devices.
- 🔒 **Secure Authentication**: JWT-based user authentication and protected routes.
- 📊 **Strategy Comparison**: Compare multiple investment strategies side by side.
- 📉 **Performance Metrics**: Monitor key metrics like ROI, CAGR, and drawdown.
- ⚡ **Real-time Updates**: Leverage React Query for live data synchronization.

---

## 🛠️ Tech Stack

### Frontend

- React.js with Vite
- TypeScript
- Tailwind CSS for styling
- Framer Motion for animations
- React Query for state management
- Recharts for data visualization
- Lucide React Icons for UI elements
- Axios for API requests

### Backend

- Node.js with Express
- MongoDB with Mongoose ODM
- JWT for secure authentication
- Bcrypt.js for password hashing
- Helmet for enhanced security
- CORS for cross-origin resource sharing

---

## 📂 Project Structure

```plaintext
portfolio-analytics/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Auth/
│   │   │   ├── Dashboard.tsx
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── LandingPage.tsx
│   │   │   └── StrategyComparison.tsx
│   │   ├── App.tsx
│   │   └── main.tsx
│   ├── package.json
│   └── vite.config.ts
│
└── backend/
    ├── src/
    │   ├── models/
    │   ├── routes/
    │   ├── middleware/
    │   ├── data/
    │   └── index.js
    ├── package.json
    └── .env
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB installed locally or MongoDB Atlas account
- Git

## Installation

1. Clone the repository:
```bash
git clone https://github.com/shibbu04/portfolio-analytics.git
cd portfolio-analytics
```

2. Install backend dependencies:
```bash
cd backend
npm install
```

3. Configure backend environment variables:
- Create a `.env` file in the backend directory
- Add the following variables:
```
MONGODB_URI=your_mongodb_connection_string
PORT=5000
NODE_ENV=development
JWT_SECRET=your_jwt_secret_key
```

4. Install frontend dependencies:
```bash
cd frontend
npm install
```

5. Configure frontend environment variables:
- Create a `.env` file in the frontend directory
- Add the following variables:
```
VITE_API_URL=http://localhost:5000/api
```

## Running the Application

1. Start the backend server:
```bash
cd backend
npm start
```

2. Start the frontend development server:
```bash
cd frontend
npm run dev
```


## 📋 API Documentation

### Authentication Endpoints

- `POST /api/auth/register` - Register a new user.
- `POST /api/auth/login` - Log in a user.

### Portfolio Endpoints

- `GET /api/portfolio/:userId` - Fetch portfolio data.
- `PUT /api/portfolio/:userId` - Update portfolio data.

### Strategy Endpoints

- `GET /api/strategy` - Retrieve all strategies.
- `GET /api/strategy/:id` - Retrieve a specific strategy.

---

## 🌐 Live Demo

- **Frontend**: [https://portfolio-analytiz.vercel.app](https://portfolio-analytiz.vercel.app)
- **Backend**: [https://portfolio-analytics-ajiz.onrender.com/api/](https://portfolio-analytics-ajiz.onrender.com/api/)

---

## 🤝 Contributing

We welcome contributions from the community! Follow these steps to contribute:

1. Fork the repository.
2. Create a new branch for your feature.
3. Commit your changes.
4. Push to your branch.
5. Create a Pull Request.

---

## 👨‍💻 Developed By

**[Your Name]** - Full Stack Developer

- Email: shivamsingh57680@gmail.com
- GitHub: [@shibbu04](https://github.com/shibbu04/)
- LinkedIn: [Shivam Singh](https://linkedin.com/in/shivamsingh57680/)

---

**Happy Investing! 📈**

