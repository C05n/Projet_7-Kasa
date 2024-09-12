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
            <h3 onClick={() => setShowDescription(!showDescription)}>
               Description
               <img src={dropdownArrow} alt="flèche" className={`dropdown-arrow ${showDescription ? 'rotate' : ''}`} />
            </h3>
            {showDescription && <p>{logement.description}</p>}
         </div>

         <div className="logement-dropdown">
            <h3 onClick={() => setShowEquipments(!showEquipments)}>
               Équipements
               <img src={dropdownArrow} alt="flèche" className={`dropdown-arrow ${showEquipments ? 'rotate' : ''}`} />
            </h3>
            {showEquipments && (
               <ul>
                  {logement.equipments.map((equipment, index) => (
                     <li key={index}>{equipment}</li>
                  ))}
               </ul>
            )}
         </div>
      </div>
   )
}
export default LogementDropdown;