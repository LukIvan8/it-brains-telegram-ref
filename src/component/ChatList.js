//Импорт библиотек
import React from "react";
import styled from "styled-components";
//Импорт компонентов
import ChatCard from "./ChatCard";

export default function ChatList({ list }) {
  return (
    <React.Fragment>

      {!list[0] && <NoChatsMessage>Список чатів пустий</NoChatsMessage>}
      {list[0] && (
        <Container>
          {list.map((chat) => {
            return <ChatCard {...chat}></ChatCard>;
          })}
        </Container>
      )}
    </React.Fragment>
  );
}

// List styles

const Container = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  border-top: solid #3c3c434a 1px;
  border-bottom: solid #3c3c434a 1px;
`;

const NoChatsMessage = styled.p`
  text-align: center;
  font-size: 17px;
`;
