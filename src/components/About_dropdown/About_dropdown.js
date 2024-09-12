import dropdownArrow from '../../assets/images/ArrowTop.svg';

function AboutDropdown() {
   return (
      <section>
         <div className='dropdown'>
            <h3>
               Fiabilité
               <img src={dropdownArrow} alt='arrow'></img>
            </h3>
            <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</p>
         </div>

         <div className='dropdown'>
            <h3>
               Respect
               <img src={dropdownArrow} alt='arrow'></img>
            </h3>
            <p>La bienveillance fait partie des valeurs fondatrices de Kasa. tout comportement discriminatoire ou des perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
         </div>

         <div className='dropdown'>
            <h3>
               Service
               <img src={dropdownArrow} alt='arrow'></img>
            </h3>
            <p>La qualité du service est au coeur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance</p>
         </div>

         <div className='dropdown'>
            <h3>
               Sécurité
               <img src={dropdownArrow} alt='arrow'></img>
            </h3>
            <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond au critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur le sécurité domestique pour nos hôtes</p>
         </div>
      </section>
   )
}
export default AboutDropdown;