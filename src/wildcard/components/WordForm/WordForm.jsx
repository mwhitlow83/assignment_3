import React from 'react';
import './WordForm.css';

export default function WordForm({ addWord }) {
  
  const handleSubmit = (e) => {
    e.preventDefault();
   const qfield = document.querySelector('[name=q]');
   
  
    const qvalue = qfield.value;
  
  
    qfield.value = '';
  
  
    alert(`${qvalue}` );
  
    addWord(qvalue);
  
  }
 
  return (
    <section className="card-form">
  <h2>New Item</h2>
  <form actionm="#" method="get" onSubmit={handleSubmit}>
    <div className="form-row">
      <label>
        Item:</label>
        <input type="text" name="q" placeholder="Item" />     
    </div>
    <div>
      <button type="submit" >Submit</button>
    </div>
  </form>
      </section>
  );
}
