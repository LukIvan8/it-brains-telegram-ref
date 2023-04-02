// Импорт библиотек
import React from "react";
import styled from "styled-components";
// Импорт компонентов
import Divider from "./Divider";

export default function OptionList({ settingList }) {
  return (
    <List>
      {settingList.map((setting) => {
        return (
          <OptionItem
            key={setting.key}
            img={setting.image}
            title={setting.title}
          ></OptionItem>
        );
      })}
    </List>
  );
}

function OptionItem({ img, title }) {
  return (
    <React.Fragment>
      <Item>
        <img width={29} height={29} src={img} alt="setting" />
        <p>{title}</p>
      </Item>
      <Divider />
    </React.Fragment>
  );
}

const Item = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  gap: 15px;
  padding-left: 15px;
  font-size: 17px;
`;

const List = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  width: 100%;
  border-top: solid #3c3c434a 1px;
  border-bottom: solid #3c3c434a 1px;
`;
