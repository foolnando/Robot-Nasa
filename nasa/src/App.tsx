import './App.css';
import Input from './atom/Input';
import StyledElements from './components/elementsPosition/elementsPosition';
import StyledDiv from './components/divSubmitter/DivSubmitter';
import GridBoard from './components/gridBoard/gridBoard';
import GridBoardTable from './components/gridBoard/GridBoardTable';
import StyledButton from './components/submitButton/submittButton';
import DivSubmitter from './components/divSubmitter/DivSubmitter';
import BoardPage from './components/BoardPage/BoardPage';



function App() {
  return (
    <div className="App">
    
      <StyledElements>
        <DivSubmitter/>
        <BoardPage />
      </StyledElements>
      
    </div>
    
  );
}

export default App;