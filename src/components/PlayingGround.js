import secImage from '../static/images/playingDice.png';
import './PlayingGround.css';
import {useState} from 'react';
import { arrayOfImages } from '../constant/constant';
import SlideImages from './SlideImages';



function PlayingGround(props) {
    const [number, setNumber] = useState(0);
    const [showSlider, setshowSlider] = useState(false);
   

    const  randomNumberGenerator = () => {
        setshowSlider(true);
        setTimeout(()=> {setshowSlider(false)}, 2000)
        setNumber (Math.floor(Math.random() * 6))

    }
    return (
        <div>{
            showSlider?<SlideImages /> : <img src={arrayOfImages[number]} className='playing_dice_image'></img>
        }
            
            
            <button onClick={randomNumberGenerator} className='btn'>Toss!</button>
            <button onClick = {() => props.handleHome(true)} className='btn'>Go Back</button>
        </div>
    )
}
export default PlayingGround;

