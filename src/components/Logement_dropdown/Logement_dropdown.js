import { useState } from 'react';
import { useParams } from 'react-router-dom';
import logements from '../../assets/data/logements.json';
import dropdownArrow from '../../assets/images/ArrowTop.svg';

function LogementDropdown() {
   const params = useParams();
   const logementId = params.id;
   const logement = logements.find(logement => logement.id === logementId);

   const [showDescription, setShowDescription] = useState(false);
   const [showEquipments, setShowEquipments] = useState(false);
   
   return (
      <div className='fiche-logement-Description-Equipments'>
         <div className="logement-dropdown descrition">
            <h3>
               Description
               <img src={dropdownArrow} alt="flèche" className={`dropdown-arrow ${showDescription ? 'open' : ''}`}onClick={() => setShowDescription(!showDescription)}/>
            </h3>
            <p className={`logement_dropdown-text ${showDescription ? 'open' : ''}`}>{logement.description}</p>
         </div>

         <div className="logement-dropdown">
            <h3>
               Équipements
               <img src={dropdownArrow} alt="flèche" className={`dropdown-arrow ${showEquipments ? 'open' : ''}`} onClick={() => setShowEquipments(!showEquipments)}/>
            </h3>
            <ul className={`logement_dropdown-text ${showEquipments ? 'open' : ''}`}>
                  {logement.equipments.map((equipment, index) => (
                     <li key={index}>{equipment}</li>
                  ))}
            </ul>
         </div>
      </div>
   )
}
export default LogementDropdown;