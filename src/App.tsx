import React, { useState } from 'react';
import './App.css';
import { Header } from './Components/Header';
import { Steppers } from './Components/Stepper';

function App() {

  const [islit, setlit] = useState(true);

  return (
    <div className='App'>
        <Header islit={islit} setlit={setlit} />
        <div>
          <Steppers islit={islit}/>
        </div>
    </div>
  );
}

export default App;
