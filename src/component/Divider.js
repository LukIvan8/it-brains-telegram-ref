//Импорт библиотек
import styled from "styled-components";

export default function Divider() {
  return <StyledDivider />;
};

const StyledDivider = styled.hr`
  display: block;
  border: none;
  border-bottom: 0.33px solid rgba(60, 60, 67, 0.29);  
  width: 70%;
  margin: 0 auto;
`

