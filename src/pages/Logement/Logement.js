import { useParams, Navigate } from 'react-router-dom';
import dataLogement from '../../assets/data/logements.json';
import LogementCarousel from '../../components/Logement_carousel/Logement_carousel';
import LogementInfo from '../../components/Logement_info/Logement_info';
import LogementDropdown from '../../components/Logement_dropdown/Logement_dropdown';

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
         <LogementDropdown />
      </section>
   );
}
export default Logement;