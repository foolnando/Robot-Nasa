import { Alert, notification } from 'antd/lib';
import { Content } from 'antd/lib/layout/layout';
import axios from 'axios';
import { useState } from 'react';
import styled from 'styled-components';
import Input from '../../atom/Input';
import GridBoardTable from '../gridBoard/GridBoardTable';
import ResetButton from '../resetButton/resetButton';
import SubmittButton from '../submitButton/submittButton';

interface Props {
    returnedPosition: string
    handleReset: () => void 
    boardData: {
        0: any
        1: any
        2: any
        3: any
        4: any
      }[]
}

function BoardPage({returnedPosition, handleReset, boardData}: Props) {

    return (
    <StyledDiv> 
        <GridBoardTable boardData={boardData}/>
        <ResetButton handleClick={handleReset}></ResetButton>
    </StyledDiv>)
}

const StyledDiv = styled.div`
    flex-grow: 2;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    padding: 12px 40px
`
export default BoardPage;