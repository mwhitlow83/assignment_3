import react, { useState } from "react";
import './WordCard.css';

export default function WordCard({front, deleteWord}){
    const [isFront, setFront] = useState(true);
    
    const cardContent = front;
    
    const [
        selectedValue,
        setSelectedValue,
    ] = useState("Radio");

    const handleRadioChange = (
        value
    ) => {
        setSelectedValue(value);
    };


    const handleflip = () => {
    setFront(!isFront);
    };
    
    const handleDelete = (e) => {
      //  e.preventdefault();
        e.stopPropagation();
        deleteWord(front);
    }

    return (
        <div className="word-card" >
          <input className="radio" type="radio" 
              // Value={radio}
                //checked={true} 
              //  onChange={} 
          /> 
           <span className="delete-card" onClick={handleDelete}>X</span>
            {cardContent}
        </div>
    )
    }
