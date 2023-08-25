import React, {useState} from 'react';
import './App.css';
import Menu from './menu';
function App() {

  let [defaultmode, changemode] = useState(false);

  return (

    <div className= {`${defaultmode? 'darkmode': 'lightmode'}`}>
        <Menu/>
      <br/>
        <button onClick={()=> changemode(defaultmode=true)}> Dark Mode</button>
        <button  onClick={()=> changemode(defaultmode=false)}> light Mode</button>
    </div>
    
  );
}

export default App;
