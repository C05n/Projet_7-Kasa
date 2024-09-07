import React from 'react';
import { Link } from 'react-router-dom';
import logements from '../../assets/data/logements.json'; 

function Cards() {
  return (
    <section className='cards-container'>
      <div className="cards-div">
        {logements.map((logement) => (
          <Link to={`/logement/${logement.id}`} key={logement.id} className="card" id={logement.id}> 
            <img src={logement.cover} alt={logement.title} className="card-img" />
            <h2 className="card-title">{logement.title}</h2>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Cards;