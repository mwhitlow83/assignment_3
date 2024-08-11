import { useState } from "react";
import './todoApp/css/main.css';


export default function Contact() {






  const [formData, setFormData] = useState({name: "",email: "",message: ""});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
     };

  const handleSubmit = (e) => {

    e.preventDefault();
    alert(`Name: ${formData.name}, Email: ${formData.email}, Message: ${formData.message}`
    );
    };

    const handleReset = (e) => {
        setFormData({ name: "", email: "", message: "" });
    };

  return (

    <div className="form">
    <form  onSubmit={handleSubmit}>
      <label className="cl" htmlFor="name">Name:</label>
      <input className="if" type="text" id="name" name="name" value={formData.name} onChange={handleChange}/>

      <label className="cl" htmlFor="email">Email:</label>
      <input className="if" type="email" id="email" name="email" value={formData.email} onChange={handleChange}/>

      <label className="cl" htmlFor="message">Message:</label>
      <textarea id="message" name="message" value={formData.message} onChange={handleChange}/>

      <button className='fb' type="submit">Submit</button>
      <button className='fb' type="reset" onClick={handleReset}
      >Reset</button>
    </form>
    <p>{state}</p>
    </div>
  );
}