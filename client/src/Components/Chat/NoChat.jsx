import chatGif  from "../../assets/Icons8-chat.gif"
const NoChatSelected = () => {
  return (
    <div className="w-full h-screen flex flex-1 flex-col items-center justify-center p-16 bg-base-100/50">
      <div className="text-center space-y-6">
        {/* Icon Display */}
        <div className="flex justify-center gap-4 mb-4">
          <div className="relative">
            <div
              className="w-40 rounded-2xl bg-primary/10 flex items-center justify-center"
            >
              <img src={chatGif} alt="" className="w-28"/>
            </div>
          </div>
        </div>

        {/* Welcome Text */}
        <h2 className="text-2xl font-bold">Welcome to Chatbits</h2>
        <p className="w-96">
          Send and receive messages with your friends, family, and colleagues with end-to-end encryption.
        </p>
      </div>
    </div>
  );
};

export default NoChatSelected;