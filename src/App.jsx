import logo from './logo.svg';
import './App.css';
import './globalStyles.css'
import { useState } from 'react';
import LandingPage from './components/landingPage';
import MainPage from './components/mainPage';

function App() {

  const [start, setStart] = useState(false)

  function enter(){
    setStart(true)
  }
  function leave(){
    setStart(false)
  }

  return (
    <div className="App">

      {
        !start ? <LandingPage enter={enter} />: <MainPage/>
      }

    </div>
  );
}

export default App;
