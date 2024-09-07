import logo from '../../assets/images/logo.png';
import {Link} from 'react-router-dom';

function Header() {
  return (
    <header>
      <section className="header-container">
        <div className="navbar">
          <Link to="/"><img src={logo} alt="Logo de Kasa" className="logo"/></Link>
          <nav>
            <ul>
            <li><Link to="/">Accueil</Link></li> 
            <li><Link to="/about">A Propos</Link></li> 
            </ul>
          </nav>
        </div>
      </section>
    </header>
  );
}
export default Header;