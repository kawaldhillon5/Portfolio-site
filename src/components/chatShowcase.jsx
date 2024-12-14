import chatImg1 from '../assets/imgs/chatSc1.png';
import chatImg2 from '../assets/imgs/chatSc2.png';
import chatImg3 from '../assets/imgs/chatSc3.png';
import SlideShow from './slideShow';

export default function ChatShowcase({viewMode}) {
    const cls = viewMode ? "showCaseImg" : "showCaseImg_mobile";
    const imgSrcArr = [{src: chatImg1,
        alt: "Image showing friend list",
        classname: cls,
        id: "chatImg1",
        },
        {src: chatImg3,
         alt: "Image showing chat bettween two users",
         classname: cls,
         id: "chatImg2",
        },
        {src: chatImg2,
            alt: "Image showing serach functionality of the app",
            classname: cls,
            id: "chatImg3",
        }]
    return(
        <>
            <div className={viewMode? "showCaseImgDiv": "showCaseImgDiv_mobile"}>
                <SlideShow imgSrcArr={imgSrcArr} />
                <div className="showCaseTitle">Messaging App</div>
            </div>
            <div className={viewMode? "showCaseText" :"showCaseText_mobile"}>
                <div >
                    The most fun I ever had until now programming was with this Project, The core app is similar to the
                     Blog Post Site with Athentication a Database support.    
                </div>
                <div>
                  The Real time chat aspect is where I got to learn about websockets and incredible functionality
                   the library offers. 
                </div>
                <div>
                    The App is also made with responsive design in mind and scales acurately with the deminsions of the device.
                </div>
            </div>
        </>
    )
}