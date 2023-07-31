import mainImage from '../static/images/dice-shield.svg';
import './Home.css';


function Home(props) {
    console.log(props);
    return (
<div className='container'>
    <h1 className='title'>Chance Chasers: The Dice Adventure</h1>
    <img className='img' src={mainImage}></img>
    <button onClick={() => props.handleHome(false)} className='btn'>Play</button>
</div>

    )
}

export default Home;
