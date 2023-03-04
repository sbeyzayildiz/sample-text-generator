import { useState } from 'react';
import './App.css';

function App() {

  const [number, setNumber] = useState(2);
  const [type, setType] = useState('text');



  return (
    <div className="App">
      <header className="App-header">
        React Sample Text Generator
      </header>
      <hr />
      <div className="App-selections">
        <label>
        Paragraphs
        <input className='number-input' type={`number`} value={number} onChange={(e) => setNumber(e.target.value)}  />
        </label>
        <label>
        Include HTML
        <select onChange={(e) => setType(e.target.value)}>
          <option value="html">Yes</option>
          <option value="text">No</option>
        </select>
        </label>
      </div>
      <div className="output-paragraph">

      </div>

    </div>
  );
}

export default App;
