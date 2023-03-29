import React from 'react';
import './App.css';




function App() {
  var greeting="";
  const cssStyle={};
  const currTime=new Date().getHours();
  if(currTime>=1 && currTime<=11){
  greeting="Good Morning";
  cssStyle.color="green";
  }
  else if(currTime>=12 && currTime<=20){
  greeting="Good AfterNoon";
  cssStyle.color="orange";
  }
  else{
  greeting="Good Night";
  cssStyle.color="blue";
  }

  return (
    <>
  <div>
    <h1>Hello Sir, <span style={cssStyle}>{greeting}</span></h1>
  </div>
</>
  );
}

export default App;
