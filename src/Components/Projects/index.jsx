import './index.scss'
import Loader from 'react-loaders';
import {useEffect, useState,useRef} from 'react';
import AnimatedLetters from '../AnimatedLetters';
import {nanoid} from 'nanoid'
import {AllprojectsData, SoftwareProjectsData,MLProjectsData, WebProjectsData} from './data'

const Project = (props) =>{
    return (    
        <div className="project">
            <img src={props.imgsrc} alt={props.title} />
            <h2>{props.title}</h2>
            <p>{props.body}</p>
            <button><a target="_blank" href={props.codeLink}>Code</a></button>
        </div>)
}

const Projects = () => {
    
    const [letterClass, setLetterClass] = useState('text-animate')  
   
    useEffect(()=>{
         setTimeout(()=>{
            setLetterClass('text-animate-hover')
        },3000)
    },[])


const data= [
        {
            id: "All",
            title: "All"
        },
        {
            id: "Web",
            title: "Web Dev"
        },
        {
            id: "ML",
            title: "ML & DA"
        },
        {
            id: "Software",
            title: "Soft/Algo"
        },
    ]

const [Selected,setSelected] = useState("All")
const [portfolioData, setPortfolioData] = useState(AllprojectsData)

function queryPortfolioData (value){
    var newData =[]
    for (let i =0;i<AllprojectsData.length;i++){
        if(AllprojectsData[i].id == value){
            newData.push(AllprojectsData[i])
        }
    }
    console.log(newData);
    setPortfolioData(newData)
}

useEffect(()=>{
    switch(Selected){
        default:
        case "All":
            console.log(AllprojectsData)
            setPortfolioData(AllprojectsData)
            break;

        case 'Web':
            queryPortfolioData('Web')
            break;

        case "Software":            
        queryPortfolioData('Software')
            break;

        case "ML":        
        queryPortfolioData('ML')
            break;
    }
},[Selected])

const PortfolioList = ({id, title,active,setSelected}) =>{ 
    return (<li onClick={()=>{setSelected(id)}} className= {active ? 'portfolioList active' : 'portfolioList'}  id={id}>{title}</li>)
}
    return (
        <div className="container projects-page">
            <div className="page-heading">
            <h1>
                    <AnimatedLetters 
                    letterClass={letterClass} 
                    strArr={['P','r','o','j','e','c','t','s']} 
                    index={10}
                />
                </h1>
            </div>
            <div className="portfolio" id="portfolio">
                <ul>
                    {data.map( (item)=>{
                        return (
                        < PortfolioList 
                            key = {nanoid()}
                            title = {item.title}
                            id = {item.id}
                            active={Selected === item.id}
                            setSelected={setSelected}
                        />
                        )
                    })}
                </ul>
                <div className="projects-container">
                    {portfolioData.map( (project)=>{
                        return (<Project 
                            key = {nanoid()}
                            imgsrc={project.imgsrc}
                            title={project.title}
                            codeLink={project.codeLink}
                            body = {project.body}/>)
                    })}
                </div>
            </div>
            <Loader type="pacman" />
        </div>
            )
}

export default Projects;