import { Button } from 'antd';
import styled from 'styled-components';


interface Props {
    handleClick: () => void
}

function SubmittButton({handleClick}: Props) {

    return ( <ButtonCustomized onClick={handleClick} >
        Submeter
    </ButtonCustomized>
        
    )
}

const ButtonCustomized = styled(Button)`
    margin-top: 10px;
    align-self: flex-end;
    width: 30%;
`

export default SubmittButton;