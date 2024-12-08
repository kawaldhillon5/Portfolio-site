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
                <div >
                    The Classic Game of Tic Tac Toe, designed using JavaScript, HTML and CSS only. The goal was to understand basic app
                     logic and provide simple, welcoming user Interface.    
                </div>
                <div>
                    Game can be played between 2 players and after each round the board could be reset and played again.
                </div>
                <div >
                    The key take away from this project was to not over complicate things that can be achieved using simple actions.
                </div>
            </div>
        </>
    )
}