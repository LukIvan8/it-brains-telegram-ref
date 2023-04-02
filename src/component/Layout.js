//Импорт библиотек
import React from "react";
import styled from "styled-components";

//Импорт компонентов
import { Link } from "react-router-dom";

//Импорт иконок
import { ReactComponent as settings } from "../assets/icons/settings-gear.svg";
import { ReactComponent as chats } from "../assets/icons/chats.svg";

const pageHeader = {
  settings: "Налаштування",
  chats: "Чати",
  messenger: "Сторінка чату",
};

export default function Layout({children, page}) {
  return (
    <React.Fragment>
      <HeaderContainer>
        <Header>
          <h1>{pageHeader[page]}</h1>
        </Header>
      </HeaderContainer>

      <div>{children}</div>
      <NavbarContainer>
        <Navbar>
          <NavbarItem
            path="/settings"
            isActive={page === "settings"}
            title="Settings"
          />
          <NavbarItem path="/chats" isActive={page === "chats"} title="Chats" />
        </Navbar>
      </NavbarContainer>
    </React.Fragment>
  );
}

const NavbarItem = ({ path, isActive, title }) => {
  return (
    <StyledLink to={path}>
      <StyledNavbarItem>
        {path === "/settings" && <Settings isActive={isActive} />}
        {path === "/chats" && <Chats isActive={isActive} />}
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
  color: ${(props) => (props.isActive ? "#007AFF" : "#8D8D8F")};
  margin: 0;
`;

//Стили иконок
const Settings = styled(settings)`
  fill: ${(props) => (props.isActive ? "#007AFF" : "#8D8D8F")};
`;

const Chats = styled(chats)`
  fill: ${(props) => (props.isActive ? "#007AFF" : "#8D8D8F")};
`;


//Так как хэдер фиксированный нам нужен для него контейнер который будет занимать его пространство
const HeaderContainer = styled.div`
  height: 70px;
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
  font-weight: bold;
  font-size: 10px;
  position: fixed;
  background-color: #f6f6f6;
  border-bottom: 1px solid rgba(60, 60, 67, 0.29);
  top: 0;
  left: 0;
  right: 0;
  //Для создания вида мобильного телефона
  max-width: 375px;
  margin: 0 auto;
`;

//То же что и в Header
const NavbarContainer = styled.div`
  height: 110px;
`;

const Navbar = styled.div`
  //Фиксация на странице
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
  border-top: 1px solid rgba(60, 60, 67, 0.29);


  //Для создания вида мобильного телефона
  max-width: 375px;
  margin: 0 auto;
`;

