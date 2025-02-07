import { useEffect, useRef } from "react";
import MessageInput from "./MessageInput";
import MessageSkeleton from "./MessageSkeleton";
import { useDispatch, useSelector } from "react-redux";
import { getMessages, addMessage } from "../../features/chatSlice";

const ChatContainer = () => {
  const { messages, isMessagesLoading, selectedUser } = useSelector((state) => state.chat);
  const { authUser, socket } = useSelector((state) => state.auth);
  const messageEndRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (selectedUser?._id) {
      dispatch(getMessages(selectedUser._id));
    }
  }, [selectedUser, dispatch]);

  useEffect(() => {
    if (!socket || !selectedUser) return;

    const handleNewMessage = (newMessage) => {
      if (newMessage.senderId === selectedUser._id || newMessage.senderId === authUser._id) {
        dispatch(addMessage(newMessage));
      }
    };

    socket.on("newMessage", handleNewMessage);

    return () => {
      socket.off("newMessage", handleNewMessage);
    };
  }, [socket, selectedUser, dispatch, authUser]);

  useEffect(() => {
    if (messageEndRef.current) {
      messageEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  if (isMessagesLoading) {
    return (
      <div className="flex-1 flex flex-col overflow-auto">
        <MessageSkeleton />
        <MessageInput />
      </div>
    );
  }

  return (
    <div className="relative h-screen flex-1 flex flex-col overflow-auto">
      <div className="absolute bottom-10 left-0 right-0 ml-72 flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message._id}
            className={`flex ${message.senderId === authUser._id ? "justify-end" : "justify-start"}`}
            ref={messageEndRef}
          >
            <div className="flex flex-col max-w-[70%]">
              <p className="font-semibold">
                {message.senderId === authUser._id ? "Me" : selectedUser?.name}
              </p>
              {message.text && (
                <p className={`px-5 py-1 rounded-lg ${message.senderId === authUser._id ? "bg-green-200" : "bg-slate-300"}`}>
                  {message.text}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
      <MessageInput />
    </div>
  );
};

export default ChatContainer;
