import React from 'react';
import styled from "styled-components";
import Divider from "./Divider";

const SettingItem = ({img, title}) => {
    return (
        <React.Fragment>
                <Item>
                    <img width={29} height={29} src={img} alt="setting"/>
                    <p>{title}</p>
                </Item>
                <Divider/>
        </React.Fragment>
    );
};

const Item = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  gap: 15px;
  padding-left: 15px;
  font-size: 17px;
`



export default SettingItem;