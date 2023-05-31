import './header.scss'
import Nav from '../Nav'
import Banner from '../Banner'

function Header({logo, logoDescription, bannerImg, bannerText, bannerDescription}) {
  return (
	  <div className='header'>
      <Nav logo={logo} logoDescription={logoDescription} 
     />
      <Banner image={bannerImg} text={bannerText} description={bannerDescription}/>
    </div>   
  )
}

export default Header
