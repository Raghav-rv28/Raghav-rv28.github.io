import './index.scss'
import Loader from 'react-loaders';
import {useEffect, useState,useRef} from 'react';
import AnimatedLetters from '../AnimatedLetters';
import emailjs from '@emailjs/browser'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
const Contact = () => {
    
    const [letterClass, setLetterClass] = useState('text-animate')  
    const refForm = useRef()



    useEffect(()=>{
         setTimeout(()=>{
            setLetterClass('text-animate-hover')
        },3000)
    },[])


const sendEmail = (e) =>{
    e.preventDefault();
    emailjs.sendForm(
        'service_sq0bwbg',
        'template_r88xuut',
        refForm.current,
        'sICEC5XEV9VUxu0BM'
    )
        .then(
            () =>{
                alert('Message successfully Sent')
                window.location.reload(false)
            },
            () =>{
                alert('Failed to send the Message')

            }
        )
}
    return (
        <>
        <div className= "container contact-page">
            <div className="page-heading">
                <h1>
                    <AnimatedLetters 
                    letterClass={letterClass} 
                    strArr={['C','o',"n","t","a","c","t","  ",'M',"e"]} 
                    index={10}
                />
                </h1>
                <p>Feel Free to contact me</p>
                <div className="contact-form">
                    <form ref={refForm} onSubmit={sendEmail}>
                        <ul>
                            <li className="half">
                                <input type="text" name="name" placeholder='Name' required/>
                            </li>
                            <li className="half">
                                <input type="email" name="email" placeholder='Email' required/>
                            </li>
                            <li>
                                <input type="text" name="Subject" placeholder='Subject' required/>
                            </li>
                            <li>
                                <textarea placeholder='Message' name="message" required></textarea>
                            </li>
                            <li >
                                <input type="submit" className="submit-button" value="SEND" />
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
            <div className='map-wrap'>
            <div className='info-map'>
                Raghav Rudhra,
                <br/>
                13 Egdevalley Court, L6P2P8
                <br />
                Brampton, ON
                <br />
                <span>raghavrudhra28@gmail.com</span>
            </div>
            <MapContainer
            center={[43.730306605754876, -79.76435754194497]}
            zoom={13}
            >
                <TileLayer url = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png "/>
                <Marker position={[43.730306605754876, -79.76435754194497]}>
                    <Popup>I am Looking for work in this area!</Popup>
                </Marker>
            </MapContainer>
            </div>
        </div>
        <Loader type="pacman" />
        </>
        )
}

export default Contact;