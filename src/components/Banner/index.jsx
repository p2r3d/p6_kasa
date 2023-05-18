import homeBanner from '../../assets/homeBanner.png'
import './banner.css'

function Banner() {
  return (
	  <div className='banner'>
      <img className="bannerImg" src={homeBanner} alt="Chez vous, partout et ailleurs" />
      <h2 className="bannerTitle">Chez vous, partout et ailleurs</h2>
    </div>   
  )
}

export default Banner