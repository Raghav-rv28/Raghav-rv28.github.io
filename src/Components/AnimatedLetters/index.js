import './index.scss'

const AnimatedLetters = ({letterClass, strArr, index}) =>{
    return (    
    <span>
        {
            strArr.map( (char, i)=>(
                <span key ={char + i} className={`${letterClass} _${i + index}`}>
                    {char}
                </span>
            ))
        }
    </span>
    )
}
export default AnimatedLetters