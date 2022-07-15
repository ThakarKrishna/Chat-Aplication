import React from "react";
import Message from "./Message/Message";
import "./Messages.css"

import ScrollToBottom from "react-scroll-to-bottom";
const Messages = ({ messages, name }) => (
  <ScrollToBottom className="messages">
    {messages.map((message, i) => (
      <div key={i}>
        <Message message={message} name={name}></Message>
      </div>
    ))}
  </ScrollToBottom>
);

export default Messages;
