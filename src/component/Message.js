//Импорт библиотек
import styled from "styled-components";

export default function Message({
  text,
  time,
  isYou,
  isBlue,
  isUnderline,
  isCrossed,
  hasBackground,
}) {
  return (
    <StyledMessage isYou={isYou} hasBackground={hasBackground}>
      <Text isBlue={isBlue} isUnderline={isUnderline} isCrossed={isCrossed}>
        {text}
      </Text>
      <Time>{time}</Time>
    </StyledMessage>
  );
}

//Message styles
const StyledMessage = styled.div`
  display: flex;
  align-items: end;
  padding: 15px;
  max-width: 70%;
  align-self: ${(props) => (props.isYou ? "flex-end" : "flex-start")};
  background: ${(props) =>
          props.isYou ? "#E1FEC6" : props.hasBackground ? "#00FF57" : "#fff"};
  border-radius: 15px;
  overflow: hidden;
`;

const Time = styled.p`
  color: #8e8e93;
  font-size: 11px;
  margin: 0;
`;

const Text = styled.p`
  font-size: 16px;
  padding-right: 12px;
  font-weight: 400;
  margin: 0;
  color: ${(props) => (props.isBlue ? "#007aff" : "black")};
  text-decoration: ${(props) =>
          props.isUnderline
                  ? "underline"
                  : props.isCrossed
                          ? "line-through"
                          : "none"};
`;
