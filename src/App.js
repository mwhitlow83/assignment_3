import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useNavigate,
    Outlet,
} from "react-router-dom";
import  Appw from './wildcard/Appw'


const Home = () => {
   
    return (
      <section>
      <Appw />
      </section>
    );
};

const Contact = () => {

  return(
  <div>
    <p>Content must be contained in a div to work for some reasone</p>
    
  </div>)
};

function App() {
    return (
        <Router>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>                    
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>

            <Routes>
                <Route path="/" element={<Home />} />              
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
    );
}

export default App;