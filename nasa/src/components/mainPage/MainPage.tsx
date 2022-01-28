import { notification } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import BoardPage from "../BoardPage/BoardPage";
import DivSubmitter from "../divSubmitter/DivSubmitter";
import StyledElements from "../elementsPosition/elementsPosition";
import GridSquare from "../gridBoard/gridSquare";
import arrowUp from "../../assets/ArrowUp.png";
import arrowLeft from "../../assets/ArrowLeft.png";
import arrowRight from "../../assets/ArrowRight.png";
import arrowDown from "../../assets/ArrowDown.png";
import nasaLogo from "../../assets/nasalogo.gif";
// @ts-ignore
import { Container } from "react-nes-component";
import styled from "styled-components";

function MainPage() {
  let board = [
    {
      0: <GridSquare />,
      1: <GridSquare />,
      2: <GridSquare />,
      3: <GridSquare />,
      4: <GridSquare />,
    },
    {
      0: <GridSquare />,
      1: <GridSquare />,
      2: <GridSquare />,
      3: <GridSquare />,
      4: <GridSquare />,
    },
    {
      0: <GridSquare />,
      1: <GridSquare />,
      2: <GridSquare />,
      3: <GridSquare />,
      4: <GridSquare />,
    },
    {
      0: <GridSquare />,
      1: <GridSquare />,
      2: <GridSquare />,
      3: <GridSquare />,
      4: <GridSquare />,
    },
    {
      0: <img src={arrowUp} alt="ArrowUp" />,
      1: <GridSquare />,
      2: <GridSquare />,
      3: <GridSquare />,
      4: <GridSquare />,
    },
  ];

  const [content, setContent] = useState<string>("");
  const [initialBoard, setBoard] = useState(board);
  let bufferPosition = "(0,0,N)";
  let bufferInitialPosition = "(0,0,N)";

  const submitt = async () => {
    await axios
      .post("http://localhost:3333/robots", {
        command: content,
      })
      .then((response) => {
        bufferPosition = response.data.finalPosition;
        bufferInitialPosition = response.data.initialPosition;

        setBoard(editBoard(bufferPosition, bufferInitialPosition));
      })
      .catch((error) => {
        notification["error"]({
          message: "Erro no comando",
          description: error.response.data.error,
        });
      });
  };

  const reset = async () => {
    await axios
      .post("http://localhost:3333/robots/reset-position")
      .then((response) => {
        setBoard(
          editBoard(response.data.finalPosition, response.data.finalPosition)
        );
      })
      .catch((error) => {
        notification["error"]({
          message: "Erro no comando",
          description: error.response.data.error,
        });
      });
  };

  useEffect(() => {
    reset();
  }, []);

  function editBoard(position: string, positionInitial: string) {
    let board = [
      {
        0: <GridSquare />,
        1: <GridSquare />,
        2: <GridSquare />,
        3: <GridSquare />,
        4: <GridSquare />,
      },
      {
        0: <GridSquare />,
        1: <GridSquare />,
        2: <GridSquare />,
        3: <GridSquare />,
        4: <GridSquare />,
      },
      {
        0: <GridSquare />,
        1: <GridSquare />,
        2: <GridSquare />,
        3: <GridSquare />,
        4: <GridSquare />,
      },
      {
        0: <GridSquare />,
        1: <GridSquare />,
        2: <GridSquare />,
        3: <GridSquare />,
        4: <GridSquare />,
      },
      {
        0: <GridSquare />,
        1: <GridSquare />,
        2: <GridSquare />,
        3: <GridSquare />,
        4: <GridSquare />,
      },
    ];

    const coordenate = {
      S: <img src={arrowDown} alt="ArrowDown" />,
      N: <img src={arrowUp} alt="ArrowUp" />,
      E: <img src={arrowRight} alt="ArrowRight" />,
      W: <img src={arrowLeft} alt="ArrowLeft" />,
    };

    const columm = {
      0: 0,
      1: 1,
      2: 2,
      3: 3,
      4: 4,
    };

    const posy = Number(position[1]) as unknown as keyof typeof columm;
    const posx = 4 - Number(position[3]);
    const direction = position[5] as keyof typeof coordenate;

    const initialPosy = positionInitial[1] as unknown as keyof typeof columm;
    const initialPosx = 4 - Number(positionInitial[3]);

    board[initialPosx][initialPosy] = <GridSquare />;
    board[posx][posy] = coordenate[direction];

    return board;
  }

  return (
    <div>
      <StyledContainer title="Robot Nasa">
        <img src={nasaLogo} alt="nasaLogo" />
        <p>
          <p>
            Plataforma de simulação de movimentação do robô em solo marciano.
            Comandos permitidos:
          </p>

          <ul>
            <li> L: Para movimentar o robô em sentido anti-horário.</li>
            <li> R: Para movimentar o robô em sentido horário.</li>
            <li> M: Para movimentar o robô para frente.</li>
          </ul>
          <p>
            O comando pode ser submetido no espaço de entrada abaixo e enviado
            com o botão "Submeter".
          </p>
          <p>
            Para colocar o robô em sua posição inicial basta clicar no botão
            "Resetar".
          </p>
          <p>
            A seta representa a posição em solo marciano do robô, apontando para
            a direção para qual o robô aponta.
          </p>
          <p>
            O espaço marciano de exploração é representado pelo grid de dimensão
            5x5.
          </p>
        </p>
      </StyledContainer>
      <StyledElements size={[2, 1]} wrap>
        <DivSubmitter
          inputContent={content}
          setInputContent={setContent}
          submitter={submitt}
        />
        <BoardPage handleReset={reset} boardData={initialBoard} />
      </StyledElements>
    </div>
  );
}

const StyledContainer = styled(Container)`
  display: flex;
  margin-top: 40px;
  margin-left: 200px;
  margin-right: 200px;
  text-align: left;
`;

export default MainPage;
