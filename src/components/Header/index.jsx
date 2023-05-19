import './header.css'
import Nav from '../Nav'
import Banner from '../Banner'

function Header({bannerImg, bannerText, bannerDescription}) {
  return (
	  <div className='header'>
      <Nav />
      <Banner image={bannerImg} text={bannerText} description={bannerDescription}/>
    </div>   
  )
}

export default Header