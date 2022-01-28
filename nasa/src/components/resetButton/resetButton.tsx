// @ts-ignore
import { Button } from "react-nes-component";
//import { Button } from 'antd';
import "antd/dist/antd.min.css";
import styled from "styled-components";

interface Props {
  handleClick: () => void;
}

function ResetButton({ handleClick }: Props) {
  return (
    <ButtonCustomized type="error" onClick={handleClick}>
      Resetar
    </ButtonCustomized>
  );
}
const ButtonCustomized = styled(Button)`
  margin-top: 20px;
  align-self: flex-end;
  width: 40%;
`;

export default ResetButton;
