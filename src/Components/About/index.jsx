import './index.scss'
import Loader from 'react-loaders';
import {useEffect, useState,useRef} from 'react';
import AnimatedLetters from '../AnimatedLetters';

export default function About() {

    const [letterClass, setLetterClass] = useState('text-animate') 




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
              
            </div>
    </div>
  )
}
