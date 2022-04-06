import { Link, NavLink } from 'react-router-dom'
import { useState,useEffect} from 'react'
import './index.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faBars, faEnvelope, faFolderClosed, faHome, faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function SideNavBar(){

    const [menuVisible,setmenuVisible] = useState(true)
    
    
// useEffect(() => {
//     const x = window.matchMedia("(max-width: 700px)")
//     function myFunction(e) {
//       setNavOpen(false);
//     };
//     x.addListener(myFunction)
//     return () => x.removeListener(myFunction);
//   }, []);
  
    useEffect(()=>{
        setTimeout(()=>{
            setmenuVisible(true)
            document.getElementById("navbar").style.visibility = "hidden" //big navbar
            document.getElementById("collapsedMenu").style.visibility = "visible" //collapsed
       },5000)
   },[menuVisible])

    function CollapsedMenu(){
        const handleClick= () =>{
            setmenuVisible(false)
            document.getElementById("navbar").style.visibility = "visible"
            document.getElementById("collapsedMenu").style.visibility = "hidden"
        }
    return (
        <button 
                className="collapsed" 
                id="collapsedMenu"
                onClick={handleClick}
                >
                <FontAwesomeIcon icon={faBars} color="#444444"/>
            </button>)
        /* On max-width: 968px;
         after 3 seconds render navbar invisible
         and show collasped menu (turn it visible)
        if user clicks do the opposite
        */
    }
    return ( <> 
    <div className = "navbar">
    <nav id="navbar">
        <NavLink exact="true" activeclassName="active" to=''>
            <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink exact="true" activeclassName="active" className="about-link" to='/about'>
            <FontAwesomeIcon icon={faUser} color="#4d4d4d" />
        </NavLink>
        <NavLink exact="true" activeclassName="active" className="intersets-link" to='/interests'>
            <FontAwesomeIcon icon={faMagnifyingGlass} color="#4d4d4d" />
        </NavLink>
        <NavLink exact="true" activeclassName="active" className="projects-link" to='/projects'>
            <FontAwesomeIcon icon={faFolderClosed} color="#4d4d4d" />
        </NavLink>
        <NavLink exact="true" activeclassName="active" className = "contact-link" to='/contact'>
            <FontAwesomeIcon icon={faEnvelope} color="#4d4d4d" />
        </NavLink>
        {<CollapsedMenu />}
    </nav>
    <ul>
        <li>
            <a target="_blank" rel="noreferrer" href="https://github.com/Raghav-rv28">
                <FontAwesomeIcon icon={faGithub} color ="#4d4d4d" />
            </a>
        </li>
        <li>
            <a target="_blank" rel="noreferrer"  href="https://www.google.com">
                <FontAwesomeIcon icon={faLinkedin} color ="#4d4d4d" />
            </a>
        </li>
    </ul> 
    </div>

    </>
)
}
