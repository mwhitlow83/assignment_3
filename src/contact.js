import { useState } from "react";
import './todoApp/css/main.css';


const Contact = (props) => {

  const [formData, setFormData] = useState({firstname: "", lastname: "", email: "", message: ""});
  const [submitted, setSubmitted] = useState(false);


  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
     };

  const handleSubmit = (e) => {

    e.preventDefault();
    alert(`First Name: ${formData.firstname}, Last Name: ${formData.lastname},  Email: ${formData.email}, Message: ${formData.message}`);
    handleReset();
    setSubmitted(true);
    };

    const handleReset = (e) => {
        setFormData({ firstname: "", lastname: "" , email: "", message: "" });
    };


    if (!submitted) {
  return (

    <div className="form">
    <form  onSubmit={handleSubmit}>
      <label className="cl" htmlFor="name">First Name:</label>
      <input className="if" type="text" id="firstname" name="firstname" value={formData.firstname} onChange={handleChange}/>

      <label className="cl" htmlFor="name">Last Name:</label>
      <input className="if" type="text" id="lastname" name="lastname" value={formData.lastname} onChange={handleChange}/>

      <label className="cl" htmlFor="email">Email:</label>
      <input className="if" type="email" id="email" name="email" value={formData.email} onChange={handleChange}/>

      <label className="cl" htmlFor="message">Message:</label>
      <textarea id="message" name="message" value={formData.message} onChange={handleChange}/>

      <button className='fb' type="submit"  
      >Submit</button>
      <button className='fb' type="reset" onClick={handleReset}
      >Reset</button>
    </form>

    </div>
  );
}

else {

  return (
    <h1>Thank you for your submission</h1>

  );

}

};
export default Contact;
