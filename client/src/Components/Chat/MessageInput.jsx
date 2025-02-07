import {  useState } from "react";
import { LuSendHorizontal } from "react-icons/lu";
import { sendMessage } from "../../features/chatSlice";
import { useDispatch, useSelector } from "react-redux";


const MessageInput = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  
  const {selectedUser,} =  useSelector((state) => state.chat);

  const handleSendMessage = async (e) => {
    
    e.preventDefault();
    if (!text.trim() ) return;
    try { 
      await dispatch(sendMessage( { messageData: { text }, selectedUserId: selectedUser._id })).unwrap();
        setText("");

    } catch (error) {
      console.error("Failed to send message:", error);
    }
  };

  return (
    <div className="p-4 w-full">
      <form onSubmit={handleSendMessage} className="bg-slate-400 fixed bottom-0 left-72 right-0 flex items-center gap-2 py-2 px-3 rounded-lg">
        <div className="flex-1 flex gap-2">
          <input
            type="text"
            className="w-full input input-bordered rounded-lg input-sm sm:input-md  focus:outline-none"
            placeholder="Type a message..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="btn btn-sm btn-circle"
          disabled={!text.trim()}
        >
          <LuSendHorizontal size={22} />
        </button>
      </form>
    </div>
  );
};
export default MessageInput;