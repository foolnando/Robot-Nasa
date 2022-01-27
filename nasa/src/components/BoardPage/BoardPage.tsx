import styled from "styled-components";
import GridBoardTable from "../gridBoard/GridBoardTable";
import ResetButton from "../resetButton/resetButton";

interface Props {
  handleReset: () => void;
  boardData: {
    0: any;
    1: any;
    2: any;
    3: any;
    4: any;
  }[];
}

function BoardPage({ handleReset, boardData }: Props) {
  return (
    <StyledDiv>
      <GridBoardTable boardData={boardData} />
      <ResetButton handleClick={handleReset}></ResetButton>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  flex-grow: 2;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 12px 40px;
`;
export default BoardPage;
