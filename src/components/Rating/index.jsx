import './rating.scss'
import GreyStar from '../../assets/GreyStar.png'
import RedStar from '../../assets/RedStar.png'

function Rating({selHousing}) {
  return (
	  <div className="ratingDiv"> 
      {[...Array(5)].map((_, index) => (
        <img
          key={index}
          src={index < selHousing.rating ? RedStar : GreyStar}
          alt="notation avec étoiles"
          width="25" 
          height="25" 
        />
      ))}
    </div>   
  )
}

export default Rating