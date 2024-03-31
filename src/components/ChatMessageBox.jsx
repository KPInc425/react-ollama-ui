import { useEffect, useRef } from 'react';

const ChatMessageBox = ({ messages }) => {
  const messagesEndRef = useRef();
  useEffect(() => {
    scrollToBottom();
  }, [messages])

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({behavior: 'smooth'});
  }
  return (
    <div style={{ border: '1px solid green', padding: '1rem 2rem', height: '300px', width: '500px', overflowY: 'scroll' }}>
      {/* {JSON.stringify(messages)} */}
      {messages.map((msg, index) => {
        return (msg.owner == 'user' ? (
          <div key={index} style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-end', marginTop: '0.5rem'}}>
            <p style={{fontStyle: 'italic', fontWeight: '700', fontSize: '12px'}}>UserMessage</p> <p>{msg.message}</p>
          </div>
        ) : (
          <p>BotMessage: {msg.message}</p>
        ));
      })}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default ChatMessageBox;
