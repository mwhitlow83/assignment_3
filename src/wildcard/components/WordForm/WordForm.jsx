import React from 'react';
import './WordForm.css';

export default function WordForm({ addWord }) {
  
  const handleSubmit = (e) => {
    e.preventDefault();
   const qfield = document.querySelector('[name=q]');
   const afield = document.querySelector('[name=a]');
  
    const qvalue = qfield.value;
    const avalue = afield.value;
  
    qfield.value = '';
    afield.value = '';
  
    alert(`${qvalue} - ${avalue}`);
  
    addWord(qvalue, avalue);
  
  }
 
  return (
    <section className="card-form">
  <h2>New Card</h2>
  <form actionm="#" method="get" onSubmit={handleSubmit}>
    <div className="form-row">
      <label>
        Question:</label>
        <input type="text" name="q" placeholder="Question" />     
    </div>
    <div className="form-row">
      <label>
        Answer:</label>
        <input type="text" name="a" placeholder="Answer" />
      
    </div>
    <div>
      <button type="submit" >add word</button>
    </div>
  </form>
      </section>
  );
}
