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
  align-self: ${({ isYou }) => {
    if (isYou) {
      return "flex-end";
    } else {
      return "flex-start";
    }
  }};
  background: ${({ isYou, hasBackground }) => {
    if (isYou) {
      return "#E1FEC6";
    } else if (hasBackground) {
      return "#00FF57";
    } else {
      return "#fff";
    }
  }};
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
  color: ${({ isBlue }) => {
    if (isBlue) {
      return "#007aff";
    } else {
      return "black";
    }
  }};
  text-decoration: ${({ isUnderline, isCrossed }) => {
    if (isUnderline) {
      return "underline";
    } else if (isCrossed) {
      return "line-through";
    } else {
      return "none";
    }
  }};
`;
