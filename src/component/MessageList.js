import React, { useState } from "react";
import styled from "styled-components";
import Message from "./Message";
import send from "../assets/icons/send.svg";

export default function MessageList({ list }) {
  const [messages, setMessages] = useState(list);

  return (
    <div>
      {!list[0] && (
        <EmptyListMessage>Список повідомлень пустий</EmptyListMessage>
      )}
      {list[0] && (
        <List>
          {messages.map((msg) => {
            return (
              <Message
                key={list.indexOf(msg)}
                {...msg}
              ></Message>
            );
          })}
        </List>
      )}
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

//List styles
const EmptyListMessage = styled.p`
  text-align: center;
  font-size: 17px;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  gap: 15px;
  padding: 15px;
`;

//Input styles
const EmptyDiv = styled.div`
  height: 60px;
`;

const InputContainer = styled.div`
  background-color: #f6f6f6;
  width: 375px;
  height: 60px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 110px;
  left: 0;
  right: 0;
  gap: 10px;
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


