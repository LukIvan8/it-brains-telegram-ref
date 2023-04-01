import React from 'react';
import styled from "styled-components";
import SettingItem from "./SettingItem";

const SettingList = ({settingList}) => {
    return (
        <List>
            {settingList.map(setting => {
                return <SettingItem key={setting.key} img={setting.image} title={setting.title}></SettingItem>
            })}
        </List>
    );
};

const List = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  margin-bottom: 34px;
  width: 100%;

  border-top: solid #3C3C434A 0.1px;
  border-bottom: solid #3C3C434A 0.1px;



`

export default SettingList;