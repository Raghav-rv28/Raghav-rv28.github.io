import './index.scss'
import Loader from 'react-loaders';
import {useEffect, useState,useRef} from 'react';
import AnimatedLetters from '../AnimatedLetters';
import {nanoid} from 'nanoid'

import Logo1 from '../../assets/images/blockchain.png'
import Logo2 from '../../assets/images/brain.png'
import Logo3 from '../../assets/images/coding.png'
import Logo4 from '../../assets/images/www.png'
import { react,css,html,js,bootstrap,py,numpy,vs} from '../../assets/images/Ticker/index'
function Card(props) {
  return(
  <div className="card">
    <img src={props.imgSrc} alt=""></img>
      <div class="card-body">
        <h2>{props.title}</h2>
        <p>{props.body}</p>
      </div>
  </div>
  )
}

const data = [
  {
    imgSrc: Logo2, 
    title: "Machine Learning/Artificial Intelligence",
    body:  "Skilled in using languages like Python, SQL for developing NN & other AI structures,and libraries like numpy, pandas, and Experienced in using matplotlib and seaborn."
  },
  {
    imgSrc: Logo3, 
    title: "Software Development",
    body:  "Proficient in Developing Large framework based softwares like MVC, and OOP in multiple languages like Java, Javascript, Python."
  },
  {
    imgSrc: Logo1, 
    title: "Blockchain Technology/Quantitative Analysis",
    body:  "Dabbled with QA to make prediction models, and risk management tools using Data Analysis techniques like ANFIS,ANN and regressive modeling."
  },
  {
    imgSrc: Logo4,
    title: "Web Development",
    body:  "Experienced in developing websites using html,css and javascript. Worked with Wordpress and other backend frameworks in Python like Django and Flask."
  },
]
export default function About() {

  const tickers = [react,css,html,js,bootstrap,py,numpy,vs]
  const [letterClass, setLetterClass] = useState('text-animate') 

    useEffect(()=>{
       setTimeout(()=>{
          setLetterClass('text-animate-hover')
      },3000)
  },[])

    const CardElements = data.map( (item)=>{
      return <Card 
      key = {nanoid()}
      title= {item.title}
      imgSrc = {item.imgSrc}
      body = {item.body}
      />
   })
    const Ticker = ({ticker}) =>{
      return (
        <div className="ticker__item"><img src={ticker} alt=""/>
          </div>)
    }

  return (
    <div className='container interests-page'>
            <div className="page-heading">
                <h1>
                    <AnimatedLetters 
                    letterClass={letterClass} 
                    strArr={['M','y','\t','I','n','t','e','r','e','s','t','s']} 
                    index={10}
                    />
                </h1>
            </div>
            <div className='container-intereset'>
              {CardElements}
            </div>
            <Loader type="pacman"/>
            <div className="ticker-wrap" id="interest">
      <div className="ticker">
              {tickers.map( (ticker)=>{
                return <Ticker key={nanoid()}ticker={ticker}/>
              })}
        </div>
    </div>
    </div>
  )
}
