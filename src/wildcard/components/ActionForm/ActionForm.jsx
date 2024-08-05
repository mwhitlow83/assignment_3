import React from 'react';
import './ActionForm.css';

export default function ActionForm() {
  
  const handleSubmit = (e) => {
    e.preventDefault();
  
  }
 
  return (
    <section className="action-form">
  
  <form action="#" method="get" onSubmit={handleSubmit}>
    
      <button type="submit" >All</button>
      <button type="submit" >Active</button>
      <button type="submit" >Completed</button>
  
  </form>
      </section>
  );
}
