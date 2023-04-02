import styled from "styled-components";

export default function Message({ text, time, isYou }) {
  return (
    <StyledMessage isYou={isYou}>
      <Text>{text}</Text>
      <Time>{time}</Time>
    </StyledMessage>
  );
}

//Message styles
const StyledMessage = styled.div`
  display: flex;
  flex-direction: row;
  align-items: end;
  padding: 15px;
  width: fit-content;
  max-width: 70%;
  align-self: ${(props) => (props.isYou ? "flex-end" : "flex-start")};
  background: ${(props) => (props.isYou ? "#E1FEC6" : "#fff")};
  border-radius: 15px;
  overflow: clip;
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
`;