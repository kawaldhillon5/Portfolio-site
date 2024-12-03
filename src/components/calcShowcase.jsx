
import calc1Sc from '../assets/imgs/calc1Sc.png';

export default function CalcShowcase() {
    return(
        <>
            <div className="showCaseImgDiv">
                <img className='showCaseImg' src={calc1Sc} alt="Image of the calculator from the project" />
                <div className="showCaseTitle">Calculator</div>
            </div>
            <div className="showCaseText" id='calcShowCaseText'>
                <div id="calcShowCaseText1">
                    A Simple Calculator App in which one can Add, Subtract, Multiply and Divide.
                     This was the first project that required a good amount of Javascript for a beginner project.
                </div>
                <div id="calcShowCaseText2">
                    Some Difficulties that were incountered in developing 
                    this were the implementation of back and the dot(.) operation.  
                </div>
            </div>
        </>
    )
}