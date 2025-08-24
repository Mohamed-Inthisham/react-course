import { useState } from 'react'
import { ChatInput } from './components/ChatInput'
import ChatMessages from './components/ChatMessages'
import './App.css'


function App(){
  const [chatMessages, setChatMessages] = useState([{  // arraydestructuring for useState
  //   message: 'hello from props',
  //   sender: 'user',
  //   id: 'id1'
  // },{
  //     message: 'hi from props robot',
  //     sender: 'robot',
  //     id: 'id2'

      message: "Hello! I'm your friendly chatbot 🤖. Feel Free to ask anything?",
      sender: 'robot',
      id: crypto.randomUUID()
  }])

  // const[chatMessages, setChatMessages] =array;  arraydestructuring
  // const chatMessages = array[0];
  // const setChatMessages = array[1];
  return (
    <div className = "app-container"> 
      <ChatMessages 
        chatMessages ={chatMessages}
      />
      <ChatInput 
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
    </div>

  );
}

export default App
