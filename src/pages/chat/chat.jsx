import React from 'react';
import './chat.css';
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar';
import RightSidebar from '../../components/RightSidebox/RightSidebar';
import ChatBox from '../../components/ChatBox/ChatBox';

const Chat=() => {
  return (
    <div className='chat'>
      <div className="chat-container">
       <LeftSidebar />
       <ChatBox />
       <RightSidebar /> 
       
      </div>
    </div>
  );
}

export default Chat;
