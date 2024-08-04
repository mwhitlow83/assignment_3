import react, { useState } from "react";
import './WordCard.css';

export default function WordCard({front, back, deleteWord}){
    const [isFront, setFront] = useState(true);
    
    const cardContent = isFront ?  <p className="card-front">Question:{front}</p> : 
    <p className="card-back">Answer:{back}</p>;
    
    const handleflip = () => {
    setFront(!isFront);
    };
    
    const handleDelete = (e) => {
      //  e.preventdefault();
        e.stopPropagation();
        deleteWord(front);
    }

    return (
        <div className="word-card" onClick={handleflip}>
           <span className="delete-card" onClick={handleDelete}>X</span>
            {cardContent}
        </div>
    )
    }
