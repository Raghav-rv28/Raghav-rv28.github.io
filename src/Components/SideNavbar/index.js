import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoR from '../../assets/images/logo-image.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faEnvelope, faFolderClosed, faHome, faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function SideNavBar(){
    return ( <> 
    <div className = "navbar">
    <Link className='logo' to='/'>
        {/* <img src={LogoR} alt="logo" /> */}
    </Link>
    <nav>
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
    </nav>
    {/* <ul>
        <li>
            <a target="_blank" rel="noreferrer" href="https://github.com/Raghav-rv28">
                <FontAwesomeIcon icon={faGithub} color ="#4d4d4d" />
            </a>
        </li>
        <li>
            <a target="_blank" rel="noreferrer" href="https://www.google.com">
                <FontAwesomeIcon icon={faLinkedin} color ="#4d4d4d" />
            </a>
        </li>

    </ul> */}
    </div>
    </>
)
}
