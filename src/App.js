import logo from './logo.svg';
import './App.css';
import React , {useState} from "react";

const customDictionary = {
  teh: "the",
  wrok: "work",
  fot: "for",
  exampl: "example"
};


function App() {
  const [text,setText]=useState("")
  const [suggestion,setSuggestion]=useState("")


  const handleChange=(e)=>{
    const text=e.target.value;
    setText(text)
    const words = text.split(" ")
    const correctedWords=words.map((word)=>{
      const correctedWord=customDictionary[word.toLowerCase()]
      return correctedWord || word;
    })
    const correctedText=correctedWords.join(' ')
    const firstCorrection=correctedWords.find((word,idx)=>word!==words[idx])
    setSuggestion(firstCorrection)
  }

  return (
    <div className="App">
      <h1>Spell Check and Auto-Correction</h1>
      <textarea value={text} placeholder="Enter text..." rows={5} columns={40} onChange={handleChange}/>
      {suggestion && (<p>
        Did you mean: <strong>{suggestion}</strong>?
      </p>)}
    </div>
  );
}

export default App;
