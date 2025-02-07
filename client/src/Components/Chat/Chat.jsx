import ChatUser from './ChatUser'
import ProtectedRoute from '../../Protectedroute/ProtectedRoute';
import ChatContainer from './ChatContainer';
import { useSelector } from 'react-redux';
import NoChatSelected from './NoChat';

function Chat() {
  const {selectedUser} = useSelector((state) => state.chat);

  return (
    <ProtectedRoute>
          <div className='flex pt-20'>
            <ChatUser />
            {!selectedUser ? <NoChatSelected /> : <ChatContainer />}
          </div>
    </ProtectedRoute>
  )
}

export default Chat