import { useParams, Navigate } from 'react-router-dom';
import dataLogement from '../../assets/data/logements.json';
import LogementCarousel from '../../components/Logement_carousel/Logement_carousel';
import LogementInfo from '../../components/Logement_info/Logement_info';
import Dropdown from '../../components/Dropdown/Dropdown';

function Logement() {

   const { id } = useParams();
   const logement = dataLogement.find((logement) => logement.id === id);

   if (!logement) {
      return <Navigate to="/notfound" />;
   }

   return (
      <section className="fiche-logement">
         <LogementCarousel />
         <LogementInfo />

         <Dropdown className={'logement-dropdown description'} title={'Description'} text={logement.description} />
         <Dropdown className={'logement-dropdown'} title={'Équipements'} text={logement.equipments.map((equipment, index) => (
            <li key={index}>{equipment}</li>
         ))} />

      </section>
   );
}

export default Logement;