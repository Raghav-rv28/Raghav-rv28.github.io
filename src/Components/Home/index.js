import{Link} from 'react-router-dom'
import './index.scss';
import {useEffect, useState,useRef} from 'react';
import AnimatedLetters from "../AnimatedLetters";
import Loader from 'react-loaders';
import BIRDS from 'vanta/dist/vanta.birds.min'

const Home =() => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const HelloArr = ['H','e','l','l','o',',']
    const RaghavArr = ['I','\'','m','    ','R','a','g','h','a','v']
    const [vantaEffect, setVantaEffect] = useState(0)
    const myRef = useRef(null)

    useEffect(() => {
        if (!vantaEffect) {
          setVantaEffect(BIRDS({
            el: myRef.current,
            backgroundAlpha: 0
          }))
        }
        return () => {
          if (vantaEffect) vantaEffect.destroy()
        }
      }, [vantaEffect])

    useEffect(()=>{
         setTimeout(()=>{
            setLetterClass('text-animate-hover')
        },3000)
    },[])

    return (
    <><div className="container home-page" ref={myRef} id="homepage">
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