import { notification } from "antd";
import axios from "axios";
import { useState } from "react";
import BoardPage from "../BoardPage/BoardPage";
import DivSubmitter from "../divSubmitter/DivSubmitter";
import StyledElements from "../elementsPosition/elementsPosition";

function MainPage() {
    const [content, setContent] = useState<string>("");
    const [position, setPosition] = useState<string>("(0,0,N)");

    let currentPosition = position;

    const submitt = async () => {
        await axios.post("http://localhost:3333/robots", {
            command: content
        }
        ).then((response) => {
            currentPosition = response.data.finalPosition;
            console.log(response.data.finalPosition);
            setPosition(response.data.finalPosition);
        }).catch(error => {
            notification['error']({
                message: 'Erro no comando',
                description:
                  error.response.data.error,
              });
            
        });
    }

    return (      
        <StyledElements>
          <DivSubmitter inputContent={content} setInputContent={setContent} submitter={submitt} />
          <BoardPage returnedPosition={position} setPosition={setPosition}/>
        </StyledElements>      
    );
  }
  
  export default MainPage;