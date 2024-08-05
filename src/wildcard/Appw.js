import react, { useState } from 'react';
import WordForm from './components/WordForm/WordForm';
import ActionForm from './components/ActionForm/ActionForm';
import './components/WordCard.css';
import CardsContainer from './components/CardsContainer/CardsContainer';

function Appw() {

  const [words, setWords] = useState([
    {front: 'my name', back: 'matt'},
    {front: 'a', back: '123'},
    {front: 'ag', back: '30'},
    {front: 'age', back: '3y'}
  ]);
  

  const addWord = (front, back) => {
    const newWords = [...words, { front, back}];
    setWords(newWords);
  }

const deleteWord = (front) => {
  const newWords = words.filter(word => word.front !== front);
  setWords(newWords);
}

  return (
    <div className="App">
    <h1 className="app-header" >To Do List</h1>   
        <main>    
            <WordForm addWord={addWord} />   
           <CardsContainer words={words} deleteWord={deleteWord} />
           <ActionForm />
        </main>
    </div>
  );
}

export default Appw;
