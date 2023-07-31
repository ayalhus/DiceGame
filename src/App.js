
import { useState } from 'react';
import './App.css';
import Home from './components/Home';
import PlayingGround from './components/PlayingGround'

function App() {
  const [isTrue, setisTrue] = useState(true);
  
  let Component = null;
  if (isTrue) {
    Component = Home
  } else {
    Component = PlayingGround
  }
  return (
    <div className="App">
     <Component handleHome = {setisTrue} />
    </div>
  );
}

export default App;
