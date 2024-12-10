import { useEffect } from "react"

export default function Contact(){

    useEffect(()=>{
        setTimeout(()=>{
            document.querySelector("#about_info").setAttribute("style","opacity:100%; transform: scale(100%)")
        },500);
        setTimeout(()=>{
            document.querySelector("#intro_ani").setAttribute("style","opacity: 0%;");
        },7000)
    });

    return (
        <>
            <div id="about_main">
                <div className="animate" id="intro_ani"></div>
                <div id="about_info">
                    <div id="info_light"></div>
                    <div id="contact_info_text">
                        <div id="contact_title">Get in touch</div>
                        <div id="contact_content">
                            <p>Email: Kawaldhillon5@gmail.com</p>
                            <p>Github: <a target="blank" href="https://github.com/kawaldhillon5">kawaldhillon5</a></p>
                            <p>Contact no. +14379255911</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}