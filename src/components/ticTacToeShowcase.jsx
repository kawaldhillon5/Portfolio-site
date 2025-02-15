import SlideShow from "./slideShow";

import ticImg1 from "../assets/imgs/ticTacToeShow1.png";
import ticImg2 from "../assets/imgs/ticTacToeShow2.png";
import ticImg3 from "../assets/imgs/ticTacToeShow3.png";
import ticImg4 from "../assets/imgs/ticTacToeShow4.png";

export default function TicTacToeShowcase({viewMode}) {
    const cls = viewMode ? "showCaseImg" : "showCaseImg_mobile";
    const imgSrcArr = [{src: ticImg1,
                            alt: "Image asking user to slect game mode Local or Online",
                            classname: cls,
                            id: "ticImgShow1",
                        },
                        {src: ticImg2,
                            alt: "Image of players choosing their names",
                            classname: cls,
                            id: "ticImgShow2",
                        },
                        {src: ticImg3,
                            alt: "Image showcasing tossing mechanism",
                            classname: cls,
                            id: "ticImgShow1",
                        },
                        {src: ticImg4,
                            alt: "Image showing a game of tic tac toe being played",
                            classname: cls,
                            id: "ticImgShow2",
                        }
                        ]
    return(
        <>
            <div className={viewMode? "showCaseImgDiv": "showCaseImgDiv_mobile"}>
                <SlideShow imgSrcArr={imgSrcArr} />
                <div className="showCaseTitle">Tic Tac Toe</div>
            </div>
            <div className={viewMode? "showCaseText" :"showCaseText_mobile"}>
                <div >
                    The Classic Game of Tic Tac Toe, designed using React and CSS. The goal was to understand basic app
                    logic and provide simple, welcoming user Interface.    
                </div>
                <div>
                    Game has "Local" and "Online" modes. Websocket Library was used to create online experience. 
                </div>
                <div >
                    The Goal of this project was to understand relation between Parent and Child components and to increase knowledge of two-way communication in web developement.
                </div>
            </div>
        </>
    )
}