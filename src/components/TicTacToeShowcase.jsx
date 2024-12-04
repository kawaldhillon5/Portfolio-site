import SlideShow from "./slideShow";

import ticImg1 from "../assets/imgs/ticTacToeShow1.png";
import ticImg2 from "../assets/imgs/ticTacToeShow2.png";

export default function TicTacToeShowcase() {
    const imgSrcArr = [{src: ticImg1,
                        alt: "Image showing a form for choosing player names and player symbol",
                        classname: "showCaseImg",
                        id: "ticImgShow1",
                        },
                        {src: ticImg2,
                         alt: "Image showing a game of tic tac toe being played",
                         classname: "showCaseImg",
                         id: "ticImgShow2",
                        }]
    return(
        <>
            <div className="showCaseImgDiv">
                <SlideShow imgSrcArr={imgSrcArr} />
                <div className="showCaseTitle">Tic Tac Toe</div>
            </div>
            <div className="showCaseText">
                jhdfs
            </div>
        </>
    )
}