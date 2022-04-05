import './index.scss'
import Loader from 'react-loaders';
import {useEffect, useState,useRef} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import resume from '../../assets/Resume.pdf'
import AnimatedLetters from '../AnimatedLetters';
import MyImg from '../../assets/images/me.jpg'
import { faDownLeftAndUpRightToCenter, faMaximize, faX } from '@fortawesome/free-solid-svg-icons';
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
                <span className="Top">
                  <FontAwesomeIcon icon={faMaximize} color="#00FF00" />
                  <FontAwesomeIcon icon={faDownLeftAndUpRightToCenter} color="#FFFF00" />
                  <FontAwesomeIcon icon={faX} color="#FF0000 " />
                </span>
                const  general= [&#123; <br/>
                'title': 'Mr',<br/>
                'Age' : '21', <br/>
                'first_name': "Raghav",<br/>
                'last_name' : "Rudhra",<br/>
                'email' : 'raghavrudhra28@gmail.com',<br/>
                'Nationality' : 'Indian'<br/>&#125;,<br/>
                Education: &#123;<br/>
                  'Degree' : 'Bachelors',<br/>
                  'Major' : 'Computer Science (DUH)',<br/>
                  'University' : 'Lakehead University',<br/>
                  &#125;,<br/>
                  Location: &#123;<br/>       
                  'city' : 'Toronto',<br/>
                    'province' : 'Ontario',<br/>
                    'Country' : 'Canada'<br/>
                    &#125;, <br/>
               <br/>
               const Specializations = [ <br/>
                  Machine Learning, <br/>
                  Aritifical Intelligence, <br/>
                  Software Development<br/>
               ]<br/><br/>
               function currentStatus() &#123;<br/>
                lookingForEmployment = True <br/>
                  resume = <a href={resume} target="_blank">Resume</a> <br/>
               &#125;<br/>
               <br/>
              {/* 21-year-old Graduate with a bachelor’s Degree in Computer Science, specializing in Artificial Intelligence, Machine Learning, Software Development, and Programming/Analysis.
              <br/><br/>
              Orignally, i am from Ludhiana, Punjab, India and been in Toronto, Canada for last 3 years studying.  i have a Bachelor's Degree in Computer Science From Lakehead University, Thunder Bay
              <br /><br/>
              Recent Graduate currently job hunting in STEM Fields. Highly interested in Artificial Intelligence and Software Development. */}
              </p>
              <div className="my-img-holder">
              <img className="my-img"src={MyImg}></img>
              </div>
            </div>
    </div>
  )
}
