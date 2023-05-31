import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './nav.scss'

function Nav({logo, logoDescription}) {
  //  emplacement courant : useLocation (react-router-dom)
  const location = useLocation();

  // gestion de l'état du lien actif
  const [activeLink, setActiveLink] = useState('');

/* qd la page change, useEffect est exécuté et met à jour l'état du lien actif 
    (La dépendance [location] spécifie que le useEffect doit être déclenché chaque fois que la valeur de location change)*/ 
 
  useEffect(() => { setActiveLink(location.pathname); }, [location]);

  return (
    <div className={`nav ${activeLink === '/' && 'navHome'} ${activeLink === '/about' && 'navAbout'} ${activeLink.startsWith('/logement/') && 'navHousing'}`}>
      <div className='logoDiv'>
        <img className='logo' src={logo} alt={logoDescription}/>
      </div>
      <nav className='navbar'>
        {/* le lien actif est souligné */} 
        <Link className={`navLi ${activeLink === '/' && 'underlinedLink'}`} to="/">Accueil</Link>
        <Link className={`navLi ${activeLink === '/about' && 'underlinedLink'}`} to="/about">À propos</Link>
      </nav>
    </div>
  )
}

export default Nav