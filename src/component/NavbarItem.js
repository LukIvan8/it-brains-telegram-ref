import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as settings } from "../assets/icons/settings-gear.svg";
import { ReactComponent as chats } from "../assets/icons/chats.svg";

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

const StyledNavbarItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 95px;
`

const Title = styled.p`
  color: ${props => props.isActive ? "#007AFF" : "#8D8D8F"};
  margin: 0;
`

const Settings = styled(settings)`
  fill: ${props => props.isActive ? "#007AFF" : "#8D8D8F"};
`

const Chats = styled(chats)`
  fill: ${props => props.isActive ? "#007AFF" : "#8D8D8F"};
`

const StyledLink = styled(Link)`
  text-decoration: none;
`

export default NavbarItem;