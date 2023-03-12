import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios'
function App() {

  const [number, setNumber] = useState(2);
  const [type, setType] = useState('text');
  const [data, setData] = useState();

  const getParagraphs = async () => {
    const res = await axios(`https://baconipsum.com/api/?type=all-meat&paras=${number}&format=${type}`)
    console.log('ress: ', res);
    setData(res.data)

  }

  useEffect(() => {
    getParagraphs();
  }, [type, number])



  return (
    <div className="App">
      <header className="App-header">
        React Sample Text Generator
      </header>
      <hr />
      <div className="container">
        <div className="App-selections">
          <label>
            Paragraphs
            <input className='number-input' type={`number`} value={number} onChange={(e) => setNumber(e.target.value)} />
          </label>
          <label>
            Include HTML
            <select onChange={(e) => setType(e.target.value)} className='selection' value={type}>
              <option value="html">Yes</option>
              <option value="text">No</option>
            </select>
          </label>
        </div>
        <div className="output-paragraph">
          {data?.split('\n').map((paragraph, index) => {
            return <div key={index}>{`${paragraph}`}</div>
          })}
        </div>
      </div>

    </div>
  );
}

export default App;
