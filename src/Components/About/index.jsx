import './index.scss'
import Loader from 'react-loaders';
import {useEffect, useState,useRef} from 'react';
import AnimatedLetters from '../AnimatedLetters';
import MyImg from '../../assets/images/me.jpg'
export default function About() {

    const [letterClass, setLetterClass] = useState('text-animate') 

    useEffect(()=>{
      setTimeout(()=>{
         setLetterClass('text-animate-hover')
     },3000)
     },[])


  return (
    <div className='container about-page'>
            <div className="page-heading">
                <h1>
                    <AnimatedLetters 
                    letterClass={letterClass} 
                    strArr={['A','b','o','u','t','\t','M','e']} 
                    index={10}
                    />
                </h1>
            </div>
            <div className="coded-about-me">
              <p>
              21-year-old Graduate with a bachelor’s Degree in Computer Science, specializing in Artificial Intelligence, Machine Learning, Software Development, and Programming/Analysis.
              <br/><br/>
              Orignally, i am from Ludhiana, Punjab, India and been in Toronto, Canada for last 3 years studying.  i have a Bachelor's Degree in Computer Science From Lakehead University, Thunder Bay
              <br /><br/>
              Recent Graduate currently job hunting in STEM Fields. Highly interested in Artificial Intelligence and Software Development.
              </p>
              <div className="my-img-holder">
              <img className="my-img"src={MyImg}></img>
              </div>
            </div>
    </div>
  )
}
