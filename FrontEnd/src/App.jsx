import React, { useEffect } from 'react'
import Chat from './Components/Chat'
import { ChatMessagesProvider } from './Contexts/ChatContext'


const App = () => {

   

  return (
    <div>
      <ChatMessagesProvider>

        <Chat />

      </ChatMessagesProvider>
    </div>
  )
}

export default App
