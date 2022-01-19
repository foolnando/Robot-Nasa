import React, { useState } from 'react';
import styled from 'styled-components';
import DivSubmitter from '../components/divSubmitter/DivSubmitter';

interface Props{ 
    content: string
    setContent: (e:string) => void
}

const Input = ( {content, setContent}: Props) => {    
    //console.log(content);
    return (
        <StyledInput 
            value={content}
            onChange={(e)=> setContent(e.target.value)}
        />
        
    )
} 

const StyledInput = styled.input`
    margin-top: 8px;
    padding: 4px;
    border: black;
    background-color: whitesmoke;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 100;
`


export default Input;