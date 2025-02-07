import chatImage from "../assets/chat-img.png"; 

function Home() {
  const features = [
    {
      title: "End-to-End Encryption",
      description: "All messages are encrypted using AES-256 and RSA-2048, ensuring secure communication.",
      icon: "🔒",
    },
    {
      title: "Secure Authentication",
      description: "JWT-based authentication with bcrypt hashing keeps user credentials safe.",
      icon: "🛡️",
    },
    {
      title: "Room-Based Access Control",
      description: "Private chat rooms require invitations, preventing unauthorized access.",
      icon: "📌",
    },
    {
      title: "Real-Time Communication",
      description: "Powered by Socket.io, ensuring instant message delivery and updates.",
      icon: "⚡",
    },
    {
      title: "Data Integrity & Privacy",
      description: "Messages are never stored in plain text and are deleted after expiration.",
      icon: "🗄️",
    },
  ];

  
  return (
    <div className="min-h-screen  flex flex-col items-center pt-16">
      <header className="text-center py-8">
        <h1 className="text-4xl font-bold text-gray-800">Welcome to ChatApp</h1>
        <p className="text-gray-600 mt-2">Connect, chat, and collaborate seamlessly</p>
      </header>
      
      <section className="w-full text-center flex flex-wrap justify-center p-8  rounded-xl">
        <img 
          src={chatImage} 
          alt="ChatApp Preview" 
          className="md:w-[500px] max-h-80 object-cover rounded-lg mb-6"
        />
        <div>
        <h2 className="text-3xl font-bold text-left text-gray-700">What is ChatApp?</h2>
          <p className="text-gray-600 text-lg md:w-[500px] text-justify mt-2">
            ChatApp is a modern messaging platform that enables instant communication with
            friends, family, and colleagues. Enjoy real-time messaging, file sharing, and
            discover new features to make your conversations more interactive.
          </p>
        </div>
      </section>
      
      <section className="max-w-4xl mt-10">
        <div className="max-w-5xl mx-auto py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-900 text-white p-6 rounded-2xl shadow-lg flex flex-col items-center"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-300 text-center">{feature.description}</p>
            </div>
          ))}
        </div>
        </div>
      </section>
      <section className="max-w-4xl mt-10">
        <div className="max-w-4xl mx-auto p-6 bg-gray-900 text-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-4">About This Project</h1>
        <p className="text-lg text-gray-300 mb-4">
          Welcome to our chat web application! This platform allows users to connect with others in real-time using room-based invitations. 
          The app is built using the MERN stack, ensuring high performance and security.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Developer Details</h2>
        <p className="text-lg text-gray-300 mb-4">
          <strong>Developer:</strong>adesh  Singh<br />
          <strong>GitHub:</strong> <a href="https://github.com/adeshsinghbits" className="text-blue-400 hover:underline">github.com/adeshsinghbits</a><br />
          <strong>Email:</strong> adeshsingh824@.gmail.com
        </p>
        <h2 className="text-2xl font-semibold mb-2">Technologies Used</h2>
        <ul className="list-disc list-inside text-gray-300">
          <li>MongoDB - Database</li>
          <li>Express.js - Backend framework</li>
          <li>React.js with Redux Toolkit - Frontend</li>
          <li>Node.js - Server runtime</li>
          <li>Socket.io - Real-time messaging</li>
          <li>JWT, bcrypt - Authentication & security</li>
          <li>Tailwind CSS - Styling</li>
          <li>Vite - Fast build tool</li>
        </ul>
        </div>
    </section>
    </div>
  );
}

export default Home;
