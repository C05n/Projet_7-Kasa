import {Link} from 'react-router-dom';

function Not_Found() {
  return (
    <section className="not-found">
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/"><p className='not-found-link'>Retourner sur la page d'accueil</p></Link>
    </section>
  );
}

export default Not_Found;