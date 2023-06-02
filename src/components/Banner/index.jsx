import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './banner.scss'

function Banner({image, text, description}) {
   //  emplacement courant : useLocation (react-router-dom)
  const location = useLocation();
  // gestion de l'état du lien actif
  const [activeLink, setActiveLink] = useState('');
  /* qd la page change, useEffect est exécuté et met à jour l'état du lien actif 
  (La dépendance [location] spécifie que le useEffect doit être déclenché chaque fois que la valeur de location change)*/ 
  useEffect(() => { setActiveLink(location.pathname); }, [location]);
  return (
	  <div className={`banner ${activeLink === '/' ? 'homeBanner' : ''} ${activeLink === '/about' ? 'aboutBanner' : ''}`}>
      <img src={image} alt={description} />
      <h2 className="bannerTitle">{text}</h2>
    </div>   
  )
}

export default Banner

