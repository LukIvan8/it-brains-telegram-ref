//Импорт библиотек
import styled from "styled-components";
//Импорт компонентов
import Divider from "./Divider";
import { Link } from "react-router-dom";
//Импорт иконок
import { ReactComponent as Read } from "../assets/icons/read.svg";
import { ReactComponent as Sent } from "../assets/icons/sent.svg";

export default function ChatCard({
  image,
  name,
  lastMessage,
  time,
  description,
  newMessages,
  hashtag,
  isSent,
  isRead,
  isMuted,
  filtered,
}) {
  return (
    <StyledLink to="/messenger">
      <CardContainer filtered={filtered}>
        <Parted>
          <Image width={60} height={60} src={image} alt="avatar" />
          <TextContainer>
            <Name>{name}</Name>
            <Description>{description}</Description>
            <LastMessage>{lastMessage}</LastMessage>
            <Hashtag>{hashtag}</Hashtag>
          </TextContainer>
        </Parted>
        <StatusContainer>
          <Time>{time}</Time>
          {displayStatus(newMessages, isSent, isRead, isMuted)}
        </StatusContainer>
      </CardContainer>
      <Divider />
    </StyledLink>
  );
}

function displayStatus(newMessages, isSent, isRead, isMuted) {
  if (newMessages) {
    return (
      <NewMessagesCounter isMuted={isMuted}>{newMessages}</NewMessagesCounter>
    );
  } else if (isRead) {
    return <Read />;
  } else if (isSent) {
    return <Sent />;
  }
}

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const CardContainer = styled.div`
  display: ${props => props.filtered ? "none" : "flex"};
  flex-direction: row;
  width: 90%;
  margin: 0 auto;
  justify-content: space-between;
  gap: 15px;
  align-items: start;
  background-color: #fff;
  padding: 15px;

  &:hover {
    cursor: pointer;
  }
`;

const Parted = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  width: 85%;
`;

const Image = styled.img`
  border-radius: 50%;
  object-fit: cover;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  white-space: nowrap;
  overflow: hidden;
  max-width: 100%;
  color: #000000;
`;

const Name = styled.p`
  margin: 0;
  font-weight: 500;
  font-size: 16px;
`;
const Description = styled.p`
  margin: 0;
  font-weight: 400;
  font-size: 15px;
`;
const LastMessage = styled.p`
  margin: 0;
  font-weight: 400;
  color: #8e8e93;
  font-size: 15px;
`;
const Hashtag = styled.p`
  margin: 0;
  font-weight: 400;
  color: #037ee5;
  font-size: 15px;
`;

const StatusContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: space-between;
  align-self: stretch;
  justify-self: end;
`;

const Time = styled.p`
  margin: 0;
  font-weight: 400;
  color: #8e8e93;
  font-size: 15px;
`;

const NewMessagesCounter = styled.p`
  margin: 0;
  font-weight: 400;
  color: #fff;
  font-size: 14px;
  background-color: ${(props) => (props.isMuted ? "#AEAEB2" : "#037ee5")};
  padding-left: 5px;
  padding-right: 5px;
  border-radius: 20px;
`;