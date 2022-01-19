import { Alert, notification } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import axios from 'axios';
import { useState } from 'react';
import styled from 'styled-components';
import Input from '../../atom/Input';
import GridBoardTable from '../gridBoard/GridBoardTable';
import SubmittButton from '../submitButton/submittButton';

function BoardPage() {
    const [content, setContent] = useState<string>("");

    const reset = async () => {
        await axios.post("http://localhost:3333/robots/reset-position", {
            command: content
        }
        ).then((response) => {
            console.log(response);
        }).catch(error => {
            notification['error']({
                message: 'Erro no comando',
                description:
                  error.response.data.error,
              });
            
        });
    } 

    //console.log(content)
    return (
    <StyledDiv> 
        <GridBoardTable></GridBoardTable>
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