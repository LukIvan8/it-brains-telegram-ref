// Импорт компонентов
import MessageList from "../component/MessageList";
import React, {useState} from "react";
import MessageInput from "../component/MessageInput";
import Header from "../component/Header";
import Navbar from "../component/Navbar";

const MESSAGE_LIST = [
  {text: "Hello!", time: "10:00", isYou: false},
  {
    text: "You can write here and message will appear! Right now only from one side(",
    time: "10:00",
    isYou: false,
  },
  {
    text: "Hello!",
    time: "11:00",
    isYou: false,
    isUnderline: true,
    isCrossed: false,
    isBlue: false,
    hasBackground: false,
  },
  {
    text: "Hello!",
    time: "12:00",
    isYou: false,
    isUnderline: false,
    isCrossed: true,
    isBlue: false,
    hasBackground: false,
  },
  {
    text: "Hello!",
    time: "13:00",
    isYou: false,
    isUnderline: false,
    isCrossed: false,
    isBlue: true,
    hasBackground: false,
  },
  {
    text: "Hello!",
    time: "14:00",
    isYou: false,
    isUnderline: false,
    isCrossed: false,
    isBlue: false,
    hasBackground: true,
  },
];

export default function Dialog() {
  const [messages, setMessages] = useState(MESSAGE_LIST);

  return (
    <React.Fragment>
      <Header title="Сторінка чату" />
      <MessageList list={messages} />
      <MessageInput
        sendMessage={handleSendMessage}
        setMessages={setMessages}
        messages={messages}
      />
      <Navbar page="dialog" />
    </React.Fragment>
  );
}

function handleSendMessage(messages, setMessages, value, setValue) {
  console.log(value);
  if (value === "") {
    return;
  }
  let currentMessages = messages.slice();
  currentMessages.push({ text: value, isYou: true, time: "10:00" });
  setMessages(currentMessages);
  setValue("");
}


