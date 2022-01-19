import styled from 'styled-components';


interface Props {
    handleClick: () => void
}

function ResetButton({handleClick}: Props) {

    return (
        <StyledButton 
        onClick={handleClick}>Resetar</StyledButton>
    )
}

const StyledButton = styled.button`
    margin-top: 8px;
    align-self: flex-end;
    width: 30%;
    background-color: var(--secundaria);
    font-weight: 400;
`
export default ResetButton;