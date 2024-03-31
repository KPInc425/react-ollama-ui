import { useState } from "react";
import ChatMessageBox from "./ChatMessageBox";
import ChatMessageInput from "./ChatMessageInput";

const ChatInterface = () => {
  const [messageList, setMessageList] = useState([]);

  const addToMessageList = (msg, owner) => {
    console.log(msg);
    console.log(owner);
    const newMessageList = [...messageList, {owner: owner, message: msg}];
    console.log(newMessageList);
    setMessageList(newMessageList);
  }
  return (
    <>
      <ChatMessageBox messages={messageList} />
      <ChatMessageInput addMessage={addToMessageList} />
    </>
  )
}

export default ChatInterface;