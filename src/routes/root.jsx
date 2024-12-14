import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import "../css/root.css"
import { useEffect } from "react";

export default function Root() {
    const navigate = useNavigate();
    useEffect(()=>{
        setTimeout(()=>{document.querySelectorAll('.start_div').forEach((elm,i)=>{
            if(i === 0){
                elm.classList.add("start_top_c");
            } else {
                elm.classList.add("start_bottom_c");
            }
        })},1000);
        setTimeout(()=>{
            document.querySelectorAll('.start_div').forEach(elm =>{
                elm.setAttribute('style',"display:none");
            })
        },1800)
        navigate('/projects')
    },[])

    return (
        <>
            <header>
                <div id="header_title"><Link to={"/projects"}>ਕਵਲ ਢਿਲੋਂ</Link></div>
                <div id="header_links">
                    <NavLink to={'projects'} className={({ isActive, isPending }) =>
                      isActive
                        ? "active"
                        : isPending
                        ? "pending"
                        : ""
                    }>Projects</NavLink>
                    <NavLink to={'contact'} className={({ isActive, isPending }) =>
                      isActive
                        ? "active"
                        : isPending
                        ? "pending"
                        : ""
                    }>Contact</NavLink>
                    <NavLink to={'about'}className={({ isActive, isPending }) =>
                      isActive
                        ? "active"
                        : isPending
                        ? "pending"
                        : ""
                    }>About</NavLink>
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