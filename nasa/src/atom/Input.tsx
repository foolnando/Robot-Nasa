import React from "react";
import "nes.css/css/nes.min.css";
import styled from "styled-components";

interface Props {
  content: string;
  setContent: (e: string) => void;
}

const Input = ({ content, setContent }: Props) => {
  return (
    <StyledInput value={content} onChange={(e) => setContent(e.target.value)} />
  );
};

const StyledInput = styled.input`
  margin-top: 8px;
  padding: 4px;
  border: black;
  background-color: whitesmoke;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 100;
`;

export default Input;
