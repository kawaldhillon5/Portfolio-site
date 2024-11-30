import { findRenderedComponentWithType } from "react-dom/test-utils";
import "../css/projects.css"

export default function Projects() {

    function calcXtranslate(width, n) {
        // console.log(document.querySelector("#tiles_div").getBoundingClientRect());
    }

    function onTileMouseIn(cls){
        document.querySelector(`.show_${cls.slice(5,7)}`).setAttribute("style","top:5%; transform: scale(1);opacity:100%");
    }
    function onTileMouseOut(cls){
        document.querySelector(`.show_${cls.slice(5,7)}`).setAttribute("style","top:50%; transform: scale(0.1); opacity:0%");
    }


    return (
        <div id="projects_main">
            <div className="showcase_div show_01">tile01</div>
            <div className="showcase_div show_02">tile02</div>
            <div className="showcase_div show_03">tile03</div>
            <div className="showcase_div show_04">tile04</div>
            <div className="showcase_div show_05">tile05</div>

            <div id="tiles_div">
             <div className="tile 01" 
                onMouseEnter={(e)=>{onTileMouseIn(e.target.className )}}
                onMouseLeave={(e)=>{onTileMouseOut(e.target.className)}} 
             >  
             </div>
             <div className="tile 02" 
                onMouseEnter={(e)=>{onTileMouseIn(e.target.className )}}
                onMouseLeave={(e)=>{onTileMouseOut(e.target.className)}} 
             >  
             </div>
             <div className="tile 03" 
                onMouseEnter={(e)=>{onTileMouseIn(e.target.className )}}
                onMouseLeave={(e)=>{onTileMouseOut(e.target.className)}} 
             >  
             </div><div className="tile 04" 
                onMouseEnter={(e)=>{onTileMouseIn(e.target.className )}}
                onMouseLeave={(e)=>{onTileMouseOut(e.target.className)}} 
             >  
             </div><div className="tile 05" 
                onMouseEnter={(e)=>{onTileMouseIn(e.target.className )}}
                onMouseLeave={(e)=>{onTileMouseOut(e.target.className)}} 
             >  
             </div>
            </div>
        </div>
    )
}