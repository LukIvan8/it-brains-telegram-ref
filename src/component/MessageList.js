//Импорт библиотек
import styled from "styled-components";
//Импорт компонентов
import Message from "./Message";

export default function MessageList({ list }) {
  if (!list.length) {
    return <EmptyListMessage>Список повідомлень пустий</EmptyListMessage>;
  }
  return (
    <div>
      <List>
        {list.map((msg) => {
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
    </div>
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



