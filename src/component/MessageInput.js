import React, { useState } from "react";
import Input from "./Input";
import send from "../assets/icons/send.svg";
import styled from "styled-components";

export default function MessageInput({ setMessages, messages, sendMessage }) {
  const [value, setValue] = useState("");
  return (
    <EmptyDiv>
      <InputContainer>
        <Input
          value={value}
          onChange={(event) => setValue(event.target.value)}
          placeholder="Введіть ваше повідомлення"
        />
        <Image
          onClick={() => {
            sendMessage(messages, setMessages, value, setValue);
          }}
          width={32}
          height={32}
          src={send}
          alt="send"
        />
      </InputContainer>
    </EmptyDiv>
  );
}


const Image = styled.img`
  cursor: pointer;
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