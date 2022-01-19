import { Alert, notification } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import axios from 'axios';
import { useState } from 'react';
import styled from 'styled-components';
import Input from '../../atom/Input';
import GridBoardTable from '../gridBoard/GridBoardTable';
import SubmittButton from '../submitButton/submittButton';

interface Props {
    returnedPosition: string
    setPosition: (e:string) => void
}

function BoardPage({returnedPosition, setPosition}: Props) {
    const reset = async () => {
        await axios.post("http://localhost:3333/robots/reset-position"
        ).then((response) => {
            setPosition(response.data.finalPosition);
            console.log(response);
        }).catch(error => {
            notification['error']({
                message: 'Erro no comando',
                description:
                  error.response.data.error,
              });
            
        });
    } 

    console.log("On the board page: "+returnedPosition)

    return (
    <StyledDiv> 
        <GridBoardTable command={returnedPosition}/>
        <SubmittButton handleClick={reset}></SubmittButton>
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