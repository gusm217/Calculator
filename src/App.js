import React from 'react';
import ComposedTextField from './ValuesComponent';
import CustomizedSelects from './OperatorComponent';

function App(){
  return (
    <div className='App'>
      <h1>CALCULATOR</h1>
      <ComposedTextField></ComposedTextField>
      <CustomizedSelects></CustomizedSelects>
    </div>
  )
}


export default App;
