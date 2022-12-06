
import './App.css' 
import Card  from './Components/Card';
import Questions from './Components/Questions';

function App() {
  return (
    <Card>
      <h1 className='header'>Climate Resilence Quiz</h1> 
      <Questions/>
    </Card>
  )
}
export default App
