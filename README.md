# Chat Web App

A MERN-based real-time chat web application with room-based invitations, built using Socket.io and Redux Toolkit for state management. The app features authentication with JWT, bcrypt, and cookies, and is styled using Tailwind CSS with Vite as the frontend build tool.

## Features
- **Real-time Chat:** Powered by Socket.io for seamless communication.
- **Room-Based Invitations:** Users can invite others to join specific chat rooms.
- **Authentication & Security:** JWT-based authentication with bcrypt password hashing and cookies.
- **Redux Toolkit:** Used for efficient state management.
- **MongoDB Storage:** Stores users, messages, and chat rooms.
- **RESTful API:** Modular backend architecture with separate router files.
- **Tailwind CSS & Vite:** For fast and optimized frontend development.

## Tech Stack
### Frontend
- React.js
- Redux Toolkit
- Tailwind CSS
- Vite
- Socket.io Client

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose ORM)
- Socket.io
- JWT, bcrypt, cookies

## Installation

### Prerequisites
Ensure you have the following installed:
- Node.js (v16+ recommended)
- MongoDB (running locally or a cloud database like MongoDB Atlas)

### Clone the Repository
```sh
git clone https://github.com/adeshsinghbits/chat-web.git
cd chat-web
```

### Backend Setup
```sh
cd server
npm install
```

#### Configure Environment Variables
Create a `.env` file inside the `server` directory and add:
```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
CLIENT_URL=http://localhost:5173
```

#### Start Backend
```sh
npm run dev
```

### Frontend Setup
```sh
cd ../client
npm install
```

#### Configure Environment Variables
Create a `.env` file inside the `client` directory and add:
```
VITE_API_URL=http://localhost:5000
```

#### Start Frontend
```sh
npm run dev
```

### Running the App
Once both backend and frontend servers are running, open your browser and navigate to:
```
http://localhost:5173
```

## Folder Structure
```
chat-web/
├── client/         # Frontend (React, Vite, Redux Toolkit, Tailwind)
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── store/
│   │   ├── App.js
│   │   ├── main.jsx
│   ├── public/
│   ├── .env
│   ├── package.json
│   └── vite.config.js
│
├── server/         # Backend (Node.js, Express, MongoDB, Socket.io)
│   ├── routes/
│   ├── controllers/
│   ├── models/
│   ├── middleware/
│   ├── config/
│   ├── server.js
│   ├── .env
│   ├── package.json
│   └── socket.js
│
└── README.md
```

## API Endpoints
### Auth Routes
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login a user
- `POST /api/auth/logout` - Logout user
- `GET /api/auth/user` - Get logged-in user details

### Chat Routes
- `POST /api/chat/create-room` - Create a chat room
- `POST /api/chat/send-message` - Send a message
- `GET /api/chat/rooms` - Get chat rooms
- `GET /api/chat/messages/:roomId` - Get messages for a room

## WebSocket Events
- `connect` - Establish connection
- `join-room` - Join a chat room
- `new-message` - Receive new message
- `send-message` - Send a message

## Contributing
1. Fork the repository.
2. Create a new branch (`feature/your-feature`).
3. Commit your changes.
4. Push the branch and create a Pull Request.

## License
This project is licensed under the MIT License.

---
### Happy Coding! 🚀

