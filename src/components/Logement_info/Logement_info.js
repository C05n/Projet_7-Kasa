import { useParams } from 'react-router-dom';
import logements from '../../assets/data/logements.json';
import starFull from '../../assets/images/starFull.svg';
import starEmpty from '../../assets/images/starEmpty.svg';

function LogementInfo() {
   const params = useParams();
   const logementId = params.id;
   const logement = logements.find(logement => logement.id === logementId);

   const range = [1, 2, 3, 4, 5];

   return (
      <div className="fiche-logement-info">
         <div className="fiche-logement-title-tags">
            <div className='fiche-logement-info-title'>
               <h1>{logement.title}</h1>
               <p>{logement.location}</p>
            </div>

            <div className="logement-tags">
               {logement.tags.map((tag, index) => (
                  <span key={index} className="logement-tag">{tag}</span>
               ))}
            </div>
         </div>
         <div className="fiche-logement-host-rating">
         <div className='fiche-logement-info-host'>
               <p>{logement.host.name}</p>
               <img src={logement.host.picture} alt={logement.host.name} className="fiche-logement-host-img" />
            </div>

            <div className='logement-rating'>
               {range.map((star) => (
                  logement.rating >= star ? (
                     <img key={star} src={starFull} alt='étoile pleine' className='logement-star' />
                  ) : (
                     <img key={star} src={starEmpty} alt='étoile vide' className='logement-star' />
                  )
               ))}
            </div>
         </div>
      </div>
   )
}

export default LogementInfo;