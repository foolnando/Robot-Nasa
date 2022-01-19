import { Alert, notification } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import axios from 'axios';
import { useState } from 'react';
import styled from 'styled-components';
import Input from '../../atom/Input';
import SubmittButton from '../submitButton/submittButton';

interface Props{ 
    inputContent: string
    setInputContent: (e:string) => void
    submitter: () => void
}

function DivSubmitter({inputContent, setInputContent, submitter}: Props) {
    // const [content, setContent] = useState<string>("");
    // const onClose = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    //     console.log(e, 'I was closed.');
    //   };

    // const submitt = async () => {
    //     await axios.post("http://localhost:3333/robots", {
    //         command: inputContent
    //     }
    //     ).then((response) => {
    //         console.log(response);
    //     }).catch(error => {
    //         notification['error']({
    //             message: 'Erro no comando',
    //             description:
    //               error.response.data.error,
    //           });
            
    //     });
    // } 

    //console.log(content)
    return (
    <StyledDiv> 
        <Input content={inputContent} setContent={setInputContent}/>
        <SubmittButton handleClick={submitter}></SubmittButton>
    </StyledDiv>)
}

const StyledDiv = styled.div`
    flex-grow: 2;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    padding: 12px 40px
`
export default DivSubmitter;