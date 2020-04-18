import React from 'react';
import './App.css';
import ScrollPosition from './facc/scrollPosition';

function App() {
  return (
    <div className="App">
        <div className='spacer' ></div>
        <ScrollPosition className="text">
          {
            (position='position') => <div>
              ScrollPosition- {position}
            </div>
          }
        </ScrollPosition>
        <div className='spacer' ></div>
    </div>
  );
}

export default App;
