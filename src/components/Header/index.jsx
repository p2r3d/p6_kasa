import './header.css'
import Nav from '../Nav'
import Banner from '../Banner'

function Header({logo, logoDescription, bannerImg, bannerText, bannerDescription}) {
  //console.log('logo',logo)
    console.log('header',logoDescription)

  return (
	  <div className='header'>
      <Nav logo={logo} logoDescription={logoDescription}/>
      <Banner image={bannerImg} text={bannerText} description={bannerDescription}/>
    </div>   
  )
}

export default Header