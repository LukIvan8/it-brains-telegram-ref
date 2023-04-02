import React from "react";
import styled from "styled-components";

export default function Input({ value, onChange, placeholder }) {
  return (
    <StyledInput value={value} onChange={onChange} placeholder={placeholder} />
  );
}

const StyledInput = styled.input`
  width: 75%;
  border-radius: 30px;
  box-shadow: none;
  border: 1px #d1d1d6 solid;
  padding: 10px;
  font-size: 14px;
`;

