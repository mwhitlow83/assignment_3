import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
    
} from "react-router-dom";
import  Appw from './todoApp/Appw.js';

import Contact from './contact.js';

const Home = () => {
   
    return (   
      <section className="appbody">    
    <Appw />
      </section>  
       
    ); 
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