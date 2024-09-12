import { useState } from 'react';
import { useParams } from 'react-router-dom';
import logements from '../../assets/data/logements.json';
import arrowLeft from '../../assets/images/arrowLeft.svg';
import arrowRight from '../../assets/images/arrowRight.svg';

function LogementCarousel() {
   const params = useParams();
   const logementId = params.id;
   const logement = logements.find(logement => logement.id === logementId);
   const [currentImageIndex, setCurrentImageIndex] = useState(0);

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
      <div className="carousel">
         {logement.pictures.length > 1 && (
            <button className="carousel-button left" onClick={handlePrevImage}>
               <img src={arrowLeft} alt="Previous" />
            </button>
         )}
         <img src={logement.pictures[currentImageIndex]} alt={logement.title} className="fiche-logement-img" />
         {logement.pictures.length > 1 && (
            <button className="carousel-button right" onClick={handleNextImage}>
               <img src={arrowRight} alt="Next" />
            </button>
         )}
         {logement.pictures.length > 1 && (
            <p className="carousel-counter">{currentImageIndex + 1}/{logement.pictures.length}</p>
         )}
      </div>
   )
}
export default LogementCarousel;