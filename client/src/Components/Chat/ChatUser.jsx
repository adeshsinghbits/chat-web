import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUsers, setSelectedUser } from "../../features/chatSlice";
import UserSkeleton from "./UsersSkeleton";
import userProfile from "../../assets/userProfile.png";
import { RiContactsBook3Fill } from "react-icons/ri";

const ChatUser = () => {
  const { users, selectedUser, isUsersLoading } = useSelector((state) => state.chat);
  const { onlineUsers, } = useSelector((state) => state.auth);
  const [showOnlineOnly, setShowOnlineOnly] = useState(false);

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const filteredUsers = showOnlineOnly
    ? users.filter((user) => onlineUsers?.includes(user._id))
    : users;
    
  if (isUsersLoading) return <UserSkeleton />;

  return (
    <aside className="h-full w-20 lg:w-72 fixed z-50 border-r border-base-300 flex flex-col transition-all duration-200">
      <div className="border-b border-base-300 w-full p-5">
        <div className="flex items-center gap-2">
          <RiContactsBook3Fill className="w-10 h-10" />
          <span className="font-medium  text-lg hidden lg:block">Contacts</span>
        </div>
        <div className="mt-3 hidden lg:flex items-center gap-2">
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={showOnlineOnly}
              onChange={(e) => setShowOnlineOnly(e.target.checked)}
              className="sr-only peer"
            />
            <div
              className={`w-12 h-6 bg-gray-300 peer-focus:ring-2 peer-focus:ring-blue-400 rounded-full peer peer-checked:bg-green-500 transition-all`}
            ></div>
            <div
              className={`absolute w-5 h-5 bg-white rounded-full shadow-md transform transition-all left-1 top-1 peer-checked:translate-x-6`}
            ></div>
            <span className="ml-3 text-sm font-medium text-gray-900">
              {showOnlineOnly ? "Online Only" : "All Users"}
            </span>
          </label>
        </div>
      </div>

      <div className="overflow-y-auto w-full py-3">
        {filteredUsers.map((user) => (
          <button
            key={user._id}
            onClick={() => dispatch(setSelectedUser(user))}
            className={`w-full p-3 flex items-center gap-3 hover:bg-base-300 transition-colors ${
              selectedUser?._id === user._id ? "bg-base-300 ring-1 ring-base-300" : ""
            }`}
          >
            <div className="relative mx-auto lg:mx-0">
              <img
                src={userProfile}
                alt={user.name}
                className="w-12 h-12 object-cover rounded-full"
              />
              {onlineUsers.includes(user._id) && (
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full ring-2 ring-zinc-900" />
              )}
            </div>

            {/* User info - only visible on larger screens */}
            <div className="hidden lg:block text-left min-w-0">
              <div className="font-medium text-lg truncate">{user.name}</div>
              <div className="text-sm text-zinc-400">
                {onlineUsers.includes(user._id) ? "Online" : "Offline"}
              </div>
            </div>
          </button>
        ))}

        {filteredUsers.length === 0 && (
          <div className="text-center text-zinc-500 py-4">No online users</div>
        )}
      </div>
    </aside>
  );
};

export default ChatUser;
