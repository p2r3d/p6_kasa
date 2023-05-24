import "./housingInfos.scss";
import GreyStar from '../../assets/GreyStar.png'
import RedStar from '../../assets/RedStar.png'


function HousingInfos({selHousing}) {

  return (
    <section className="housingSection">
    <div className="left">
      <div className="titlesDiv">
        <p className="title">{selHousing.title}</p>
        <p className="description">{selHousing.location}</p>
      </div>
      <div>
        <div className="tagsDiv">
          {selHousing.tags.map((tag,id) => (
          <button  key={`${tag}-${id}`}  className="tagBtn" >{tag}</button>
        ))}
        </div>     
      </div> 
    </div>
    <div className="right">
      <div className="housingHostDiv">
        <p>{selHousing.host.name}</p>
        <img src={selHousing.host.picture}
          alt="propriétaire du logement"
        />
      </div>
      <div className="ratingDiv"> 
        {[...Array(5)].map((_, index) => (
          <img
            key={index}
            src={index < selHousing.rating ? RedStar : GreyStar}
            alt=""
          />
        ))}
      </div>
    </div>     
    </section> 
  )
}
export default HousingInfos;