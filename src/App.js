import logo from './logo.svg';
import './App.css';
import React from 'react';
import QuoteCard from './components/QuoteCard';
import {useState} from 'react';
import axios from 'axios';


function App() {
  const sampleSimpson = {
    quote: "By chilling my loins I increase the chances of impregnating my wife.",
    character: "Apu Nahasapeemapetilon",
    image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FApuNahasapeemapetilon.png?1497567511629",
    characterDirection: "Left"
    }
  const getSimpson = () => {
    axios
      .get('https://simpsons-quotes-api.herokuapp.com/quotes')
 
      .then((response) => response.data)
 
      .then((data) => {
        setSimpson(data[0]);
      });
 };
   const [simpson, setSimpson] = useState(sampleSimpson);
  return (
    <div>
      <QuoteCard {...simpson} />
      <button type="button" onClick={getSimpson}>Generate a Simpson's quote !</button>
    </div>
  );
}

export default App;
//key={index} {...quote}//