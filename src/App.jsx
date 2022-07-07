import { useState } from 'react'
import quotes from './quotes.json'
import './App.css'

const colors = [
  "red",
  "blue",
  "green",
  "brown",
  "yellow",
  "pink",
  "orange"
];

function App() {

  const random = Math.floor(Math.random() * quotes.length);
  const [index, setIndex] = useState(random);

  const changeQuote = () => {
    const random2 = Math.floor(Math.random() * quotes.length);
    setIndex(random2);
  }

  document.body.style = "background: red";

  return (
    <div className="App">
      <div className="container">
        <div className="quoteh1">
          <h1>{quotes[index].quote}</h1>
        </div>
        <footer className="footer">
          <h2>{quotes[index].author}</h2>
          <button onClick={changeQuote}>
            <i className="fa-thin fa-angle-right"></i>
          </button>
        </footer>
      </div>
    </div>
  )
}

export default App
