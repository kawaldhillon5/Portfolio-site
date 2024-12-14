
import { useEffect } from 'react';
import calc1Sc from '../assets/imgs/calc1Sc.png';

export default function CalcShowcase({viewMode}) {
    const cls = viewMode ? "showCaseImg" : "calcImg1";
    useEffect(()=>{
        document.querySelector('#calcImg1').setAttribute('style','opacity:100%');
    })

    return(
        <>
            <div className={viewMode? "showCaseImgDiv": "showCaseImgDiv_mobile"}>
                <img className={cls} id='calcImg1' src={calc1Sc} alt="Image of the calculator from the project" />
                <div className="showCaseTitle">Calculator</div>
            </div>
            <div className={viewMode? "showCaseText" :"showCaseText_mobile"} id='calcShowCaseText'>
                <div id="calcShowCaseText1">
                    A Simple Calculator App in which one can Add, Subtract, Multiply and Divide.
                     This was the first project that required a good amount of Javascript for a beginner project.
                </div>
                <div id="calcShowCaseText2">
                    Some Difficulties that were incountered in developing 
                    this were the implementation of back and the dot(.) operation.  
                </div>
                <div id="calcShowCaseText3">
                    Various decisions like the use of flexbox instead of grid to implement buttons for the app
                    are discussed in the Explainer.   
                </div>
            </div>
        </>
    )
}