import React from 'react';
import styled from "styled-components";

const Header = ({title}) => {
  return (

      <HeaderContainer>
        <TitleContainer>
          <h1>{title}</h1>
        </TitleContainer>
      </HeaderContainer>

  );
};
const HeaderContainer = styled.div`
  height: 70px;
`;

const TitleContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  height: 70px;
  font-weight: bold;
  font-size: 10px;
  background-color: #f6f6f6;
  border-bottom: 1px solid #d7d7d7;
  //Для создания вида мобильного телефона
  max-width: 375px;
  margin: 0 auto;
`;

export default Header;