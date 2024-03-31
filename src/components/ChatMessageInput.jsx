import { useState } from 'react';

const ChatMessageInput = ({addMessage}) => {
  const [chatMessage, setChatMessage] = useState("");

  const handleSetChatMessage = (e) => {
    setChatMessage(e.target.value)
  }

  const sendChatMessage = (e) => {
    // console.log(chatMessage);
    e.preventDefault();
    addMessage(chatMessage, 'user');
    setChatMessage("");
  }
  return (
    <form style={{width: '100%', display: 'grid', gridTemplateColumns: '3fr 1fr'}} onSubmit={sendChatMessage}>
      <input type='text' value={chatMessage} onChange={handleSetChatMessage} />
      <button type='submit'>Send</button>
    </form>
  );
};

export default ChatMessageInput;