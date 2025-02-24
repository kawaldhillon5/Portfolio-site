import React, { useRef, useEffect } from 'react'; // Import useRef and useEffect
import '../css/projectsMobile.css';
import CalcSvg from '../components/calcSvgComp';
import ToDoSvg from '../components/toDoSvg';
import TicTacToeSvg from '../components/ticTacToe';
import BlogSvg from '../components/blogSvg';
import MessageSvg from '../components/messageSvg';
import CalcShowcase from '../components/calcShowcase';
import ToDoShowcase from '../components/toDoShowcase';
import TicTacToeShowcase from '../components/ticTacToeShowcase';
import BlogShowcase from '../components/BlogShowcase';
import ChatShowcase from '../components/chatShowcase';
import  {useOutletContext} from 'react-router-dom';

function ProjectMobile() {
  const viewMode = useOutletContext();
  const lowerDivMainRef = useRef(null); // Create useRef for direct DOM access if needed

  useEffect(()=>{
        setTimeout(()=>{
            document.querySelector(".container").setAttribute("style","opacity:100%; transform: scale(100%)")
        },500);
        setTimeout(()=>{
            document.querySelector("#intro_ani").setAttribute("style","opacity: 0%;");
        },700)
    });

  useEffect(() => { // useEffect hook for side effects (like event listeners)
    const lowerDivMain = lowerDivMainRef.current; // Get the DOM element from the ref
    const upperDivMain = document.getElementById('upper-div-main'); // Directly get upperDivMain - consider useRef for this too in larger apps
    const tiles = document.querySelectorAll('.tile-mobile'); 
    const projects = document.querySelectorAll('.mobile-project-showcase');

    const upperScrollWidth = upperDivMain.scrollWidth - upperDivMain.clientWidth;   // Calculate max horizontal scroll width of upperDivMain
    upperDivMain.scrollLeft = upperScrollWidth;

    const handleScrollLower = () => { // Scroll event handler function
      if (lowerDivMain) { // Check if lowerDivMain ref is correctly attached
        const lowerScrollLeft = lowerDivMain.scrollLeft;
        if (upperDivMain) { // Check if upperDivMain exists
          const upperScrollWidth = upperDivMain.scrollWidth - upperDivMain.clientWidth;
          const lowerScrollWidth = lowerDivMain.scrollWidth - lowerDivMain.clientWidth;

          let upperScrollLeft = (lowerScrollLeft / lowerScrollWidth) * upperScrollWidth;
          upperScrollLeft = upperScrollWidth - upperScrollLeft;

          upperDivMain.scrollLeft = upperScrollLeft;
        }
        tiles.forEach(tile => { // Keep snap scaling effect (optional)
            const rect = tile.getBoundingClientRect();
            const containerRect = lowerDivMain.getBoundingClientRect();

            const tileCenter = rect.left + rect.width / 2;
            const containerCenter = containerRect.left + containerRect.width / 2;
            const threshold = containerRect.width / 3;

            if (Math.abs(tileCenter - containerCenter) < threshold) {
                tile.classList.add('tile-snapped');
            } else {
                tile.classList.remove('tile-snapped');
            }
        });
      }
    };

    const handleScrollUpper = ()=> {
        projects.forEach(project => { 
            const rect = project.getBoundingClientRect();
            const containerRect = upperDivMain.getBoundingClientRect();
    
            const tileCenter = rect.left + rect.width / 2;
            const containerCenter = containerRect.left + containerRect.width / 2;
            const threshold = containerRect.width / 3; 
    
            if (Math.abs(tileCenter - containerCenter) < threshold) { 
                project.classList.add('project-snapped'); 
            } else {
                project.classList.remove('project-snapped'); 
            }
        });
    }
    upperDivMain.addEventListener('scroll', handleScrollUpper);
    lowerDivMain.addEventListener('scroll', handleScrollLower); // Add event listener

    return () => { // Cleanup function (important to prevent memory leaks)
      lowerDivMain.removeEventListener('scroll', handleScrollLower); // Remove event listener when component unmounts
      upperDivMain.removeEventListener('scroll', handleScrollUpper);

    };
  }, []); // Empty dependency array means this effect runs only once after initial render

  return (
    <>
        <div className="animate" id="intro_ani"></div>
        <div className="container">
        <div id="upper-div-main" className="gear"> {/* Keep id for now, consider refactoring later */}
            <div className="mobile-project-showcase" id="mProject05">
                <ChatShowcase />
            </div>
            <div className="mobile-project-showcase" id="mProject04" >
                <BlogShowcase />
            </div>
            <div className="mobile-project-showcase" id="mProject03" >
                <TicTacToeShowcase />
            </div>
            <div className="mobile-project-showcase" id="mProject02" >
                <ToDoShowcase />
            </div>
            <div className="mobile-project-showcase" id="mProject01" >
                <CalcShowcase  viewMode={viewMode}/>
            </div>
        </div>

        <div id="lower-div-main" className="gear" ref={lowerDivMainRef}> {/* Add ref to lowerDivMain */}
            <div className="tile-mobile project-tile tile-snapped" id="tile01" data-project-id="1">                        
                <a href="https://kawaldhillon5.github.io/TOP_calculator/" target='_blank'>  
                    <i>Calculator</i>
                    <CalcSvg />
                </a>
            </div>
            <div className="tile-mobile project-tile" id="tile02" data-project-id="2">
                <a href="https://kawaldhillon5.github.io/TOP_Todo_list/" target='_blank'>  
                    <i>To Do List</i>
                    <ToDoSvg />
                </a></div>
            <div className="tile-mobile project-tile" id="tile03" data-project-id="3">
                <a href="https://tictactoe0511.netlify.app/" target='_blank'>
                        <i>Tic Tac Toe</i>
                        <TicTacToeSvg />
                </a>    
            </div>
            <div className="tile-mobile project-tile" id="tile04" data-project-id="4">
                <a href="https://github.com/kawaldhillon5/blogpost-client" target='_blank'>
                    <i>My Blog Site</i>
                    <BlogSvg />
                </a>
            </div>
            <div className="tile-mobile project-tile" id="tile05" data-project-id="5">
                <a href="https://github.com/kawaldhillon5/messagin-app-client" target='_blank'>
                    <i>Messaging App</i>
                    < MessageSvg />
                </a>                
            </div>
        </div>
        </div>
    </>
  );
}

export default ProjectMobile;