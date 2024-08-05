import React from 'react';
import './ActionForm.css';

export default function ActionForm() {
  
  const handleSubmit = (e) => {
    e.preventDefault();
  
  }
 
  return (
    <section className="action-form">
  
  <form actionm="#" method="get" onSubmit={handleSubmit}>
    <div className="button-row">  
      <button type="submit" >All</button>
      <button type="submit" >Active</button>
      <button type="submit" >Completed</button>
    </div>
  </form>
      </section>
  );
}
