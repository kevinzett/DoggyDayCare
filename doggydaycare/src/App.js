import logo from './logo.svg';
import './App.css';
import { HashRouter as Router, Route, Routes} from 'react-router-dom'
import { useState } from 'react';
import dogRegister from './doggyregister.json';

import Register from './components/Register';
import Welcome from './components/Welcome';
import Info from './components/Info';
import Changedstatus from './components/Changedstatus';

function App() {
  

   

  const [currentDog, setCurrentDog] = useState();
  const currentDogInfo = currentDog;
  
  const [presentStatus, setPresentStatus] = useState();
  

  
//<Route path="/game" element ={

return (
    <div className="App">
      <main>
      <Router>
        <Routes>
          <Route exact path="/" element ={
          <Welcome/>
        }/>

          <Route path='/register' element ={
            <Register setCurrentDog={setCurrentDog} setPresentStatus={setPresentStatus}/>
          } />

          <Route path='/info' element ={
            <Info currentDog={currentDog}/>
          }/> 
          <Route path='/changedstatus' element ={
          <Changedstatus/>
        }/>
          
        </Routes>
      </Router>
      </main>
    </div>
  );

}

/*<Router>
<Routes>
  <Route exact path="/" element={
    <Welcome/>
  } />
  <Route path="/game" element ={
    <Game answeredCorrectly={() => setScore(score + 1)} />
  } />
  <Route path="/game/:currentquestion" element={<Game answeredCorrectly={() => setScore(score + 1)} />}
  />
  <Route path="/result" element={
    <Result score={score} restartQuiz={restartQuiz} />
  } />

</Routes>
</Router> */

export default App;





// <button className="buttonfordogs" onClick={() => setCurrentDog({dogInfo})}>Information</button>