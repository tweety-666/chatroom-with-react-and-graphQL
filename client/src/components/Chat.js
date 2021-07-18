import React from 'react';
import { useChatMessages } from '../hooks/useChatMessages';
import ChatInput from './ChatInput';
import ChatList from './ChatList';

const Chat = ({ user }) => {
  const { messages, addMessage } = useChatMessages();
  return (
    <section className="section">
      <div className="container">
        <h1 className="title">{user}</h1>
        <ChatList user={user} messages={messages} />
        <ChatInput onSend={addMessage} />
      </div>
    </section>
  );
};

export default Chat;
