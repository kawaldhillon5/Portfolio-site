import { useEffect } from "react";
import "../css/projects.css"
import "../css/tile.css"

import CalcSvg from "../components/calcSvgComp";
import TicTacToeSvg from "../components/ticTacToe";
import ToDoSvg from "../components/toDoSvg";
import BlogSvg from "../components/blogSvg";
import MessageSvg from "../components/messageSvg";
import CalcShowcase from "../components/calcShowcase";

export default function Projects() {

    useEffect(()=>{
        setTimeout(()=>{
            document.querySelector("#center_info").setAttribute("style","opacity:100%; transform: scale(100%)")
            document.querySelector("#tiles_div").setAttribute("style","opacity:100%; transform: scale(1); margin-bottom: 0px");
        },2000);
        setTimeout(()=>{
            document.querySelector("#intro_ani").setAttribute("style","opacity: 0%;");
        },2200)
    },[])

    function calcXtranslate(n, nth) {
        const total =   (n/2)+0.5;
        return total - nth;
    }

    function onTileMouseIn(cls){
        document.querySelector('#center_info').setAttribute("style","opacity:0%");
        document.querySelector(`.show_${cls.slice(13,15)}`).setAttribute("style",`top:-270%; transform: translateX(${calcXtranslate(5,cls.slice(14,15))}00%) scale(5); opacity:100%`);
    }
    function onTileMouseOut(cls){
        document.querySelector('#center_info').setAttribute("style","opacity:100%; transform: scale(100%)");
        document.querySelector(`.show_${cls.slice(13,15)}`).setAttribute("style","top:50%; transform: scale(0.1); opacity:0%");
    }


    return (
        <div id="projects_main">
            <div className="animate" id="intro_ani"></div>
            <div id="center_info">
                <div id="info_light"></div>
                <div id="info_text">
                    abc
                </div>
            </div>
            <div id="tiles_div">
             <div className="tile 01">
                <div className="showcase_div show_01">
                    <CalcShowcase />
                </div>
                <div className="tile_content 01"
                    onMouseEnter={(e)=>{onTileMouseIn(e.target.className )}}
                    onMouseLeave={(e)=>{onTileMouseOut(e.target.className)}} 
                >   
                    <i>Calculator</i>
                    <CalcSvg />
                </div>
             </div>

             <div className="tile 02">
                <div className="showcase_div show_02">tile02</div>
                <div className="tile_content 02" 
                    onMouseEnter={(e)=>{onTileMouseIn(e.target.className )}}
                    onMouseLeave={(e)=>{onTileMouseOut(e.target.className)}}
                >
                    <i>Tic Tac Toe</i>
                    <TicTacToeSvg />
                </div>  
             </div>

             <div className="tile 03">
                <div className="showcase_div show_03">tile03</div>
                <div className="tile_content 03"     
                    onMouseEnter={(e)=>{onTileMouseIn(e.target.className )}}
                    onMouseLeave={(e)=>{onTileMouseOut(e.target.className)}}
                >
                    <i>To Do List</i>
                    <ToDoSvg />
                </div>
             </div>
             <div className="tile 04">
                <div className="showcase_div show_04">tile04</div>
                <div className="tile_content 04"
                    onMouseEnter={(e)=>{onTileMouseIn(e.target.className )}}
                    onMouseLeave={(e)=>{onTileMouseOut(e.target.className)}}
                >
                    <i>My Blog Site</i>
                    <BlogSvg />    
                </div>  
             </div>
             <div className="tile 05">
                <div className="showcase_div show_05">tile05</div>
                <div className="tile_content 05" 
                    onMouseEnter={(e)=>{onTileMouseIn(e.target.className )}}
                    onMouseLeave={(e)=>{onTileMouseOut(e.target.className)}}
                >
                    <i>Messaging App</i>
                    < MessageSvg />
                </div>  
             </div>
            </div>
        </div>
    )
}