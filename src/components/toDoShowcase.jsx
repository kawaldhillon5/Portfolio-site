import SlideShow from "./slideShow";


import toDoImg1 from "../assets/imgs/toDoSc1.png";
import toDoImg2 from "../assets/imgs/toDoSc3.png";
import toDoImg3 from "../assets/imgs/todoSc4.png";

export default function ToDoShowcase() {
    const imgSrcArr = [{src: toDoImg1,
        alt: "Image showing a Screen Shot of To Do List app creating a new Project",
        classname: "showCaseImg",
        id: "toDoImg1",
        },
        {src: toDoImg2,
         alt: "Image showing a to do item being added into the project",
         classname: "showCaseImg",
         id: "toDoImg2",
        },
        {src: toDoImg3,
            alt: "Image showing a to do Project in My Projects folder",
            classname: "showCaseImg",
            id: "toDoImg3",
        }]
return(
        <>
            <div className="showCaseImgDiv">
                <SlideShow imgSrcArr={imgSrcArr} />
                <div className="showCaseTitle">To Do List</div>
            </div>
            <div className="showCaseText">
                <div >
                    To do List was one of the biggest Multi Route Project with a lot of
                     learning opportunities throughout the developement process   
                </div>
                <div>
                    Interestingly The Odin Project had not thaught to use any Router for navigation
                     yet, so its all done using functions that run onClick 
                </div>
                <div>
                    Main objective was to learn about factory functions and classes. The project does 
                    not use any front-end framework, learning to manipulate html 
                    elements using just javaScript was invalubale.
                </div>
            </div>
        </>
    )
}