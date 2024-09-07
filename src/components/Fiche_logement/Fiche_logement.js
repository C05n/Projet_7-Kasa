import { useParams } from 'react-router-dom';
import logements from '../../assets/data/logements.json';
import { useState } from 'react';

function Fiche_Logement() {
  const params = useParams();
  const logementId = params.id;
  const logement = logements.find(logement => logement.id === logementId);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!logement) {
    return <div>Logement not found!</div>;
  }

   const handlePrevImage = () => {
      setCurrentImageIndex((prevIndex) => {
         if (prevIndex > 0) {
            return prevIndex - 1;
         } else {
            return logement.pictures.length - 1;
         }
      });
   };

   const handleNextImage = () => {
      setCurrentImageIndex((prevIndex) => {
         if (prevIndex < logement.pictures.length - 1) {
            return prevIndex + 1;
         } else {
            return 0;
         }
      });
   };

   return (
      <section className="fiche-logement-container">
        <div className="fiche-logement">
          <div className="carousel">
            <button className="carousel-button left" onClick={handlePrevImage}>
               &lsaquo;
            </button>
  
            <img src={logement.pictures[currentImageIndex]} alt={logement.title} className="fiche-logement-img" />
  
            <button className="carousel-button right" onClick={handleNextImage}>
               &rsaquo;
            </button>
         </div>
         <div className="fiche-logement-info">
            <div className='fiche-logement-info-title'>
               <h1>{logement.title}</h1>
               <p>{logement.location}</p>
            </div>

            <div className='fiche-logement-info-host'>
               <p>{logement.host.name}</p>
               <img src={logement.host.picture} alt={logement.host.name} className="fiche-logement-host-img"/>
            </div>
         </div>
      </div>
   </section>
  );
}

export default Fiche_Logement;
