import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png';
import './nav.css'

function Nav() {
  return (
		<div className='nav'>
      <div className='logoDiv'>
        <img className='logo' src={logo} alt="logo Kasa"/>
      </div>
      <nav className='navbar'>
        <Link className='navLi' to="/">Accueil</Link>
        <Link className='navLi' to="/about">À propos</Link>        
      </nav>
    </div>
  )
}

export default Nav