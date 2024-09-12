import LogementCarousel from '../../components/Logement_carousel/Logement_carousel';
import LogementInfo from '../../components/Logement_info/Logement_info';
import LogementDropdown from '../../components/Logement_dropdown/Logement_dropdown';

function Logement() {
  return (
    <section className="fiche-logement">
       <LogementCarousel />
       <LogementInfo />
       <LogementDropdown />
    </section>
 );
}
export default Logement;