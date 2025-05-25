import { useEffect, useState } from "react";
import "../css/projects.css"
import "../css/tile.css"

import CalcSvg from "../components/calcSvgComp";
import TicTacToeSvg from "../components/ticTacToe";
import ToDoSvg from "../components/toDoSvg";
import BlogSvg from "../components/blogSvg";
import MessageSvg from "../components/messageSvg";
import CalcShowcase from "../components/calcShowcase";
import TicTacToeShowcase from "../components/ticTacToeShowcase";
import ToDoShowcase from "../components/toDoShowcase";
import BlogShowcase from "../components/BlogShowcase";
import ChatShowcase from "../components/chatShowcase";
import { useOutletContext } from "react-router-dom";

export default function Projects() {

    const viewMode = useOutletContext();

    useEffect(()=>{
        document.querySelector("#intro_ani").setAttribute("style","opacity: 100%;");
        if(viewMode === 1){
            setTimeout(()=>{
                document.querySelector("#center_info").setAttribute("style","opacity:100%; -webkit-transform: scale(100%); transform: scale(100%)")
                document.querySelector("#tiles_div").setAttribute("style","opacity:100%; transform: scale(1); -webkit-transform: scale(1); margin-bottom: 0px");
            },2000);
        } else {
            setTimeout(()=>{
                document.querySelector("#center_info_mobile").setAttribute("style","opacity:100%; transform: scale(100%)")
            },2000)
        }
        setTimeout(()=>{
            document.querySelector("#intro_ani").setAttribute("style","opacity: 0%;");
        },2200)
    },[viewMode])

    function calcXtranslate(n, nth) {
        const total =   (n/2)+0.5;
        return total - nth;
    }

    function onTileMouseIn(cls){
        document.querySelector('#center_info').setAttribute("style","opacity:0%");
        document.querySelector(`.show_${cls.slice(13,15)}`).setAttribute("style",`top:-270%; transform: translateX(${calcXtranslate(5,cls.slice(14,15))}00%) scale(5); -webkit-transform: translateX(${calcXtranslate(5,cls.slice(14,15))}00%) scale(5); opacity:100%`);
    }
    function onTileMouseOut(cls){
        document.querySelector('#center_info').setAttribute("style","opacity:100%; transform: scale(100%); -webkit-transform: scale(100%);");
        document.querySelector(`.show_${cls.slice(13,15)}`).setAttribute("style","top:50%; transform: scale(0.1); -webkit-transform: scale(0.1); opacity:0%");
    }


    return (
        <div id={viewMode ? "projects_main" : "projects_main_mobile"}>
            <div className="animate" id="intro_ani"></div>
            
            {   (viewMode === 1) 
                ?
                <>
                <div id="center_info">
                    <div id="info_light"></div>
                    <div id="info_text">
                    The Personal portfolio site is dedicated to demonstrating experience and skills accumulated
                     by completing The Odin Project, A programe Geared towards gaining practical abilities to 
                     become a Web Developer. The journey began with amatuer knowledge of C/C++ and with the 
                     Project's help, functional web-apps were developed with best 
                     coding practices in mind.
                     
                     <p>
                        Tiles below Showcase Some of many Great Projects that significantly Improved the understanding of 
                        various aspects of web developement throughout the journey.   
                        Hover On The tile to see a short summary about the Project and click to learn more.
                     </p>
                    </div>
                </div> 
                <div id="tiles_div">
                <div className="tile 01">
                    <div className="showcase_div show_01">
                        <CalcShowcase  viewMode={viewMode}/>
                    </div>
                    <div className="tile_content 01"
                        onMouseEnter={(e)=>{onTileMouseIn(e.target.parentNode.className )}}
                        onMouseLeave={(e)=>{onTileMouseOut(e.target.parentNode.className)}} 
                    >
                        <a href="https://kawaldhillon5.github.io/TOP_calculator/" target='_blank'>  
                            <i>Calculator</i>
                            <CalcSvg />
                        </a>
                    </div>
                </div>

                <div className="tile 02">
                    <div className="showcase_div show_02">
                        <ToDoShowcase viewMode={viewMode} />
                    </div>
                    <div className="tile_content 02"     
                        onMouseEnter={(e)=>{onTileMouseIn(e.target.parentNode.className)}}
                        onMouseLeave={(e)=>{onTileMouseOut(e.target.parentNode.className)}}
                    >
                        <a href="https://kawaldhillon5.github.io/TOP_Todo_list/" target='_blank'>  
                            <i>To Do List</i>
                            <ToDoSvg />
                        </a>
                    </div>
                </div>

                <div className="tile 03">
                   
                    <div className="showcase_div show_03">
                        <TicTacToeShowcase viewMode={viewMode} />
                    </div>
                    <div className="tile_content 03" 
                        onMouseEnter={(e)=>{onTileMouseIn(e.target.parentNode.className )}}
                        onMouseLeave={(e)=>{onTileMouseOut(e.target.parentNode.className)}}
                    >   
                        <a href="https://tictactoe0511.netlify.app/" target='_blank'>
                            <i>Tic Tac Toe</i>
                            <TicTacToeSvg />
                        </a>
                    </div>  
                </div>
                <div className="tile 04">
                    <div className="showcase_div show_04">
                        <BlogShowcase viewMode={viewMode}/>
                    </div>
                    <div className="tile_content 04"
                        onMouseEnter={(e)=>{onTileMouseIn(e.target.parentNode.className )}}
                        onMouseLeave={(e)=>{onTileMouseOut(e.target.parentNode.className)}}
                    >
                        <a href="https://github.com/kawaldhillon5/blogpost-client" target='_blank'>
                            <i>My Blog Site</i>
                            <BlogSvg />
                        </a>    
                    </div>  
                </div>
                <div className="tile 05">
                    <div className="showcase_div show_05">
                        <ChatShowcase  viewMode={viewMode}/>
                    </div>
                    <div className="tile_content 05" 
                        onMouseEnter={(e)=>{onTileMouseIn(e.target.parentNode.className )}}
                        onMouseLeave={(e)=>{onTileMouseOut(e.target.parentNode.className)}}
                    >
                        <a href="https://github.com/kawaldhillon5/messagin-app-client" target='_blank'>
                            <i>Messaging App</i>
                            < MessageSvg />
                        </a>
                    </div>  
                </div>
                </div>
                </>
                : 
                    <div id="center_info_mobile">
                        <div id= "info_light_mobile"></div>
                        <div id= "info_text_mobile">
                        The Personal portfolio site is dedicated to demonstrating experience and skills accumulated
                        by completing The Odin Project, A programe Geared towards gaining practical abilities to 
                        become a Web Developer. The journey began with amatuer knowledge of C/C++ and with the 
                        Project's help, functional web-apps were developed with best 
                        coding practices in mind.
                        
                        <p>
                            Tiles below Showcase Some of many Great Projects that significantly Improved the understanding of 
                            various aspects of web developement throughout the journey.   
                            Click on the tiles to learn more.
                        </p>
                        </div>
                    </div>  
                }
        </div>
    )
}