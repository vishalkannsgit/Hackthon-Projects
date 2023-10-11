
import React, { useState, useCallback } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';

const ChatScreen = () => {
  const [messages, setMessages] = useState([]);

  const onSend = useCallback((newMessages = []) => {
    setMessages((prevMessages) => GiftedChat.append(prevMessages, newMessages));
  }, []);

  return <GiftedChat messages={messages} onSend={onSend} />;
};

export default ChatScreen;
