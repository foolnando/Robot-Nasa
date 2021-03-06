import React from "react";
import styled from "styled-components";
import Input from "../../atom/Input";
import SubmittButton from "../submitButton/submittButton";

interface Props {
  inputContent: string;
  setInputContent: (e: string) => void;
  submitter: () => void;
}

function DivSubmitter({ inputContent, setInputContent, submitter }: Props) {
  return (
    <StyledDiv>
      <Input content={inputContent} setContent={setInputContent} />
      <SubmittButton handleClick={submitter}></SubmittButton>
    </StyledDiv>
  );
}


const StyledDiv = styled.div`
  flex-grow: 4;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 12px 40px;
  margin-top: 20px;
  margin-left: 50px;
  margin-right: 50px;
`;
export default DivSubmitter;
