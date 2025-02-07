import { Helmet } from 'react-helmet-async'
import Chat from '../Components/Chat/Chat'

function ChatPage() {
  return (
    <div>
        <Helmet>
            <title>Chat - chatapp</title>
        </Helmet>
        <Chat />
    </div>
  )
}

export default ChatPage