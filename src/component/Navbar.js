import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as Settings } from "../assets/icons/settings-gear.svg";
import { ReactComponent as Chats } from "../assets/icons/chats.svg";

const Navbar = ({ page }) => {
  return (
    <NavbarContainer>
      <ItemsContainer>
        <NavbarItem
          path="/settings"
          isActive={page === "settings"}
          title="Settings"
        />
        <NavbarItem path="/chats" isActive={page === "chats"} title="Chats" />
      </ItemsContainer>
    </NavbarContainer>
  );
};

const NavbarItem = ({ path, isActive, title }) => {
  return (
    <StyledLink to={path}>
      <StyledNavbarItem>
        <IconWrapper isActive={isActive}>
          {path === "/settings" && <Settings  />}
          {path === "/chats" && <Chats />}
        </IconWrapper>

        <Title isActive={isActive}>{title}</Title>
      </StyledNavbarItem>
    </StyledLink>
  );
};

// Стиль итема
const StyledNavbarItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 95px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const Title = styled.p`
  color: ${({ isActive }) => {
    if (isActive) {
      return "#007AFF";
    }
    return "#8D8D8F";
  }};
  margin: 0;
`;

//Стили иконок
const IconWrapper = styled.div`
  & > * {
    fill: ${({isActive}) => {
      if (isActive) {
        return "#007AFF";
      } else {
        return "#8D8D8F";
      }
    }};
  }
`;



//То же что и в Header
const NavbarContainer = styled.div`
  height: 110px;
`;

const ItemsContainer = styled.div`
  //Фиксация снизу страницы
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;

  //Flexbox для ссылок
  display: flex;
  justify-content: center;
  align-items: center;

  //Стили
  height: 110px;
  background-color: #f6f6f6;
  border-top: 1px solid #d7d7d7;
  
  //Для создания вида мобильного телефона
  max-width: 375px;
  margin: 0 auto;
`;

export default Navbar;