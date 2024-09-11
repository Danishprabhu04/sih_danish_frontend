import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { FaRobot, FaPaperPlane } from 'react-icons/fa';

// Keyframe animations
const slideIn = keyframes`
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const gradientAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const fadeInPop = keyframes`
  0% {
    transform: scale(0.8);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

// Styled components
const ChatbotContainer = styled.div`
  position: fixed;
  bottom: 30px;
  right: 380px;
  width: 700px;
  height: 650px;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 20px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  animation: ${slideIn} 0.5s ease-out;
`;

const ChatHeader = styled.div`
  background: linear-gradient(-45deg, #56FBDA, #3A3A3A, #10053D);
  background-size: 400% 400%;
  animation: ${gradientAnimation} 10s ease infinite;
  color: white;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
   fontFamily: 'Inter, sans-serif',
`;

const ChatHeaderIcon = styled(FaRobot)`
  margin-right: 10px;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
  padding: 5px;
  transition: color 0.3s ease;
   fontFamily: 'Inter, sans-serif';

  &:hover {
    color: #FFD700;
  }
`;

const ChatMessages = styled.div`
  flex-grow: 1;
  padding: 15px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  background-color: #3A3A3A;
`;

const ChatMessage = styled.div`
  margin-bottom: 10px;
  align-self: ${props => props.sender === 'user' ? 'flex-end' : 'flex-start'};
  background-color: ${props => props.sender === 'user' ? '#56FBDA' : '#EAEAEA'};
  border-radius: 10px;
  padding: 10px;
  max-width: 70%;
  word-wrap: break-word;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  font-size: 14px;
  color: ${props => props.sender === 'user' ? '#3A3A3A' : '#10053D'};
  animation: ${fadeInPop} 0.3s ease-out;
  position: relative;
   fontFamily: 'Inter, sans-serif',
`;

const Timestamp = styled.span`
  font-size: 10px;
  color: #aaa;
  position: absolute;
  bottom: -15px;
  right: ${props => props.sender === 'user' ? '10px' : 'auto'};
  left: ${props => props.sender !== 'user' ? '10px' : 'auto'};
   fontFamily: 'Inter, sans-serif';
`;

const ChatInputContainer = styled.div`
  display: flex;
  padding: 15px;
  background-color: #f4f4f4;
  border-top: 1px solid #ddd;
`;

const ChatInput = styled.input`
  flex-grow: 1;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 30px;
  box-shadow: inset 0px 1px 3px rgba(0, 0, 0, 0.1);
  font-size: 14px;
  outline: none;
  transition: box-shadow 0.3s ease, border-color 0.3s ease;
   fontFamily: 'Inter, sans-serif',

  &:focus {
    box-shadow: 0 0 10px #56FBDA;
    border-color: #56FBDA;
  }
`;

const SendButton = styled.button`
  background-color: #56FBDA;
  border: none;
  color: white;
  padding: 12px;
  border-radius: 50%;
  margin-left: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #4ec8b0;
  }
`;

// Chatbot component
const Chatbot = ({ onClose }) => {
  const [messages, setMessages] = useState([{ text: "Hi there! How can I help you today?", sender: 'bot' }]);
  const [input, setInput] = useState('');

  const handleSend = (e) => {
    e.preventDefault();
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: 'user', timestamp: new Date().toLocaleTimeString() }]);
      setInput('');
      setTimeout(() => {
        setMessages(prev => [...prev, { text: `You said: ${input}`, sender: 'bot', timestamp: new Date().toLocaleTimeString() }]);
      }, 500);
    }
  };

  return (
    <ChatbotContainer>
      <ChatHeader>
        <div>
          <ChatHeaderIcon />
          <span>Chatbot</span>
        </div>
        <CloseButton onClick={onClose}>×</CloseButton>
      </ChatHeader>
      <ChatMessages>
        {messages.map((msg, index) => (
          <ChatMessage key={index} sender={msg.sender}>
            {msg.text}
            <Timestamp sender={msg.sender}>{msg.timestamp}</Timestamp>
          </ChatMessage>
        ))}
      </ChatMessages>
      <ChatInputContainer>
        <form onSubmit={handleSend} style={{ display: 'flex', width: '100%' }}>
          <ChatInput 
            type="text" 
            value={input} 
            onChange={(e) => setInput(e.target.value)} 
            placeholder="Type a message..."
            autoFocus
          />
          <SendButton type="submit">
            <FaPaperPlane />
          </SendButton>
        </form>
      </ChatInputContainer>
    </ChatbotContainer>
  );
};

export default Chatbot;



















































































































