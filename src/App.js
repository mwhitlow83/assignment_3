import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
    
} from "react-router-dom";
import  Appw from './todoApp/Appw.js';
import './App.css'

const Home = () => {
   
    return (   
      <section className="appbody">    
    <Appw />
      </section>  
       
    ); 
};

const Contact = () => {

  return(
  <div>
    <p>Content must be contained in a div to work for some reason</p>
    
  </div>)
};

function App() {

    return (
        <Router>
            <nav className="navi">
                <ul className="uln">
                    <li>
                        <Link to="/">Home</Link>
                    </li>                    
                    <li>
                        <Link to="/contact"  >Contact</Link>
                    </li>
                </ul>
            </nav>

            <Routes>
                <Route path="/" element={<Home />}  />              
                <Route path="/contact" element={<Contact/>} />
            </Routes>
        </Router>
    );
}

export default App;