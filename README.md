# ChatWeb

ChatWeb is a real-time chat application built using the MERN (MongoDB, Express, React, Node.js) stack with Socket.io for live messaging. It supports room-based invitations, JWT authentication, and Redux Toolkit for state management.

## Features
- Real-time messaging with Socket.io
- Room-based chat with invite-only access
- Authentication using JWT, bcrypt, and cookies
- Redux Toolkit for state management
- MongoDB with Mongoose for database management
- Separate backend router files for scalability
- Tailwind CSS for styling (without UI component libraries)
- Built using Vite for the React frontend

## Prerequisites
Ensure you have the following installed on your system:
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)
- [VS Code](https://code.visualstudio.com/)

## Installation
### 1. Clone the repository
```sh
git clone https://github.com/yourusername/chatweb.git
cd chatweb
```

### 2. Install dependencies
#### Backend
```sh
cd backend
npm install
```
#### Frontend
```sh
cd ../frontend
npm install
```

## Configuration
### Backend (server/.env)
Create a `.env` file in the `backend` directory and add the following:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
COOKIE_SECRET=your_cookie_secret
```

### Frontend (frontend/.env)
Create a `.env` file in the `frontend` directory and add:
```env
VITE_API_URL=http://localhost:5000
```

## Running the Application
### Start the backend server
```sh
cd backend
npm run dev
```

### Start the frontend (React app)
```sh
cd frontend
npm run dev
```

The frontend will be available at [http://localhost:5173](http://localhost:5173), and the backend at [http://localhost:5000](http://localhost:5000).

## Project Structure
```
chatweb/
  ├── backend/
  │   ├── controllers/
  │   ├── models/
  │   ├── routes/
  │   ├── server.js
  │   └── .env
  ├── frontend/
  │   ├── src/
  │   ├── components/
  │   ├── store/
  │   ├── App.jsx
  │   └── .env
  ├── README.md
  ├── package.json
  └── .gitignore
```

## Technologies Used
- **Backend:** Node.js, Express, MongoDB, Mongoose, JWT, bcrypt, Socket.io
- **Frontend:** React, Redux Toolkit, Vite, Tailwind CSS
- **Tools & Deployment:** VS Code, Git, Postman

## Contributing
Feel free to fork this project, submit issues, or make pull requests.

## License
This project is licensed under the MIT License.

