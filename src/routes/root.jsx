import { Link, Outlet } from "react-router-dom";
import "../css/root.css"
import { useEffect } from "react";

export default function Root() {

    useEffect(()=>{
        setTimeout(()=>{document.querySelectorAll('.start_div').forEach((elm,i)=>{
            if(i === 0){
                elm.classList.add("start_top_c");
            } else {
                elm.classList.add("start_bottom_c");
            }
        })},1000)
    },[])

    return (
        <>
            <header>
                <div id="header_title"><Link to={"/"}>ਕਵਲ ਢਿਲੋਂ</Link></div>
                <div id="header_links">
                    <Link to={'projects'}>Projects</Link>
                    <Link to={'contact'}>Contact</Link>
                    <Link to={'about'}>About</Link>
                </div>    
            </header>
            
            <div id="content">
                <Outlet />
            </div>

            <footer>
                <span>By</span>
                <a href="https://github.com/kawaldhillon5" target="_blank" >Kawal dhillon</a>
            </footer>
            <div className="start_div" id="start_top">Kawal Dhillon</div>
            <div className="start_div" id="start_bottom">Goal is to Win</div>
        </>
    )    
}