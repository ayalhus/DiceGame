 
 import { arrayOfImages } from '../constant/constant';
 import { useEffect, useState } from 'react';
 
 function SlideImages() {
    const [index, setIndex] = useState(0);
    const next = () => {
      setIndex(Math.floor(Math.random() * 6));
    }
useEffect(() => {
    setInterval(next,200);
}, [])
    

    return (
      <div>
        <img className='img blurred' src={arrayOfImages[index]} alt="" />
      </div>
    );
  }

  export default SlideImages;