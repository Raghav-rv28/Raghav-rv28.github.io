import{Link} from 'react-router-dom'
import './index.scss';
import {useEffect, useState} from 'react';
import AnimatedLetters from "../AnimatedLetters";
import Loader from 'react-loaders';


const Home =() => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const HelloArr = ['H','e','l','l','o',',']
    const RaghavArr = ['I','\'','m','    ','R','a','g','h','a','v']

    useEffect(()=>{
        return ()=>{
         setTimeout(()=>{
            setLetterClass('text-animate-hover')
        },3000)
    }
    },[])

    return (
    <><div className="container home-page" id="homepage">
        <div className="page-heading">
            <h1><AnimatedLetters letterClass={letterClass} strArr={HelloArr} index={10}/><br />
            <AnimatedLetters letterClass={letterClass} strArr={RaghavArr} index={16}/>
            </h1>
            <Link to="contact"className="contactme-btn">CONTACT ME</Link>
        </div>
    </div>
    <Loader type="pacman"/> 
    </>
    )
}
export default Home