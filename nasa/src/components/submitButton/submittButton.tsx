//import { Button } from 'antd';
import styled from "styled-components";
// @ts-ignore
import { Button } from "react-nes-component";

interface Props {
  handleClick: () => void;
}

function SubmittButton({ handleClick }: Props) {
  return (
    <ButtonCustomized type="primary" onClick={handleClick}>
      Submeter
    </ButtonCustomized>
  );
}

const ButtonCustomized = styled(Button)`
  margin-top: 20px;
  align-self: flex-end;
`;

export default SubmittButton;
