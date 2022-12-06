
import { useState } from 'react';
import './App.css'
import crops from "./crops.json"; 
import Card  from './Components/Card';
import Questions from './Components/Questions';

function App() {
  const [puntuacion, setPuntuacion] = useState(0);
  const [isFinish, setIsFinished] = useState(false);

  return (
    <Card>
      <h1 className='tittle' id='fuente personalizada'>Climate Resilence Quiz</h1>
      <Questions/>
      
      
  
    </Card>


  );
}

export default App
