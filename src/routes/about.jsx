import { useEffect } from "react"

export default function About(){

    useEffect(()=>{
        setTimeout(()=>{
            document.querySelector("#about_info").setAttribute("style","opacity:100%; transform: scale(100%)")
        },800);
        setTimeout(()=>{
            document.querySelector("#intro_ani").setAttribute("style","opacity: 0%;");
        },1000)
    });

    return (
        <>
            <div id="about_main">
                <div className="animate" id="intro_ani"></div>
                <div id="about_info">
                    <div id="info_light"></div>
                    <div id="info_text">
                        <p>
                            Hi there! I'm Kawal Dhillon, a passionate junior full-stack web developer. 
                            My love and desire for technology led me to The Odin Project and with it I had the opportunity to gain 
                            and develope skills to create elegant and functional Web applications.
                        </p>
                        <p>
                            The Program's Project based learning approach helped gain problem solving 
                            abilities, deep understanding of JavaScript, frameworks, databases, data structures and various 
                            aspects of the web.
                        </p>
                        <p>
                            My main focus while developing projects was the functional aspect of the apps.
                            Effective and safe coding practices, deep knowledge of the language itself 
                            were prioritized.
                        </p>
                        <p>
                            All the Projects showcased will demonstrate different hurdles encountered throughout 
                            the journey and positive problem solving mindset with which every hurdle got solved.
                            The Odin Project community has been invaluable in my growth, providing support 
                            and guidance throughout my learning journey. 
                        </p>
                        <p>
                            I am proud of myself and all the skills I have Achieved and Grateful to The Odin Project.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}