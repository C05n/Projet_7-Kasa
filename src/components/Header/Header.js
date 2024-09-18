import logo from '../../assets/images/logo.png';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header>
      <section className="header-container">
        <div className="navbar">
          <NavLink to="/"><img src={logo} alt="Logo de Kasa" className="logo" /></NavLink>
          <nav>
            <ul>
              <li><NavLink to="/" activeclassname="active" exact="true">Accueil</NavLink></li>
              <li><NavLink to="/about" activeclassname="active">A Propos</NavLink></li>
            </ul>
          </nav>
        </div>
      </section>
    </header>
  );
}
export default Header;