import './banner.css'

function Banner({image, text, description}) {
  return (
	  <div className='banner'>
      <img className="bannerImg" src={image} alt={description} />
      <h2 className="bannerTitle">{text}</h2>
    </div>   
  )
}

export default Banner