//Импорт библиотек
import styled from "styled-components";

export default function Divider() {
  return <StyledDivider />;
};

const StyledDivider = styled.hr`
  border: none;
  border-bottom: 1px solid #d7d7d7;
  width: 70%;
  margin: 0 auto;
`

