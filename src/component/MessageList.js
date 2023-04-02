//Импорт библиотек
import { useState } from "react";
import styled from "styled-components";
//Импорт компонентов
import Message from "./Message";
//Импорт иконки
import send from "../assets/icons/send.svg";

export default function MessageList({ list }) {
  const [messages, setMessages] = useState(list);

  if (!list.length) {
    return <EmptyListMessage>Список повідомлень пустий</EmptyListMessage>;
  }
  return (
    <div>
      <List>
        {messages.map((msg) => {
          return (
            <Message
              key={list.indexOf(msg)}
              text={msg.text}
              hasBackground={msg.hasBackground}
              isYou={msg.isYou}
              time={msg.time}
              isBlue={msg.isBlue}
              isUnderline={msg.isUnderline}
              isCrossed={msg.isCrossed}
            />
          );
        })}
      </List>
      <EmptyDiv>
        <MessageInput setMessages={setMessages} messages={messages} />
      </EmptyDiv>
    </div>
  );
}

function handleClick(messages, setMessages, value, setValue) {
  if (value === "") {
    return;
  }
  let currentMessages = messages.slice();
  currentMessages.push({ text: value, isYou: true, time: "10:00" });
  setMessages(currentMessages);
  setValue("");
}

function MessageInput({ setMessages, messages }) {
  const [value, setValue] = useState("");
  return (
    <InputContainer>
      <Input
        value={value}
        onChange={(event) => setValue(event.target.value)}
        placeholder="Введіть ваше повідомлення"
      />
      <Image
        onClick={() => {
          handleClick(messages, setMessages, value, setValue);
        }}
        width={32}
        height={32}
        src={send}
        alt="send"
      />
    </InputContainer>
  );
}

const EmptyListMessage = styled.p`
  text-align: center;
  font-size: 17px;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 90%;
  padding: 15px;
`;

const EmptyDiv = styled.div`
  height: 60px;
`;

const InputContainer = styled.div`
  background-color: #f6f6f6;
  height: 60px;
  width: 375px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  position: fixed;
  bottom: 110px;
  left: 0;
  right: 0;
`;

const Input = styled.input`
  width: 75%;
  border-radius: 30px;
  box-shadow: none;
  border: 1px #d1d1d6 solid;
  padding: 10px;
  font-size: 14px;
`;

const Image = styled.img`
  cursor: pointer;
`;


