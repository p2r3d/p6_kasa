import "./housingInfos.scss";
import Rating from '../../components/Rating'
import Collapse from '../../components/Collapse'
import datas from '../../datas/configKasa.js'

function HousingInfos({selHousing}) {
const fontSize = "18px";
  return (
  <section className="housingSection">
    <div className="generalInfosDiv">
      <div className="locationDiv">
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
      <div className="hostRatingDiv">
        <div className="housingHostDiv">
          <p>{selHousing.host.name}</p>
          <img src={selHousing.host.picture}
            alt="propriétaire du logement"
          />
        </div>
        <div className="ratingDiv">
          <Rating 
          selHousing={selHousing} />
        </div>
      </div>     
    </div> 
    <div className="collapsesDiv">
      <div className="descriptionCollapseDiv">
        <Collapse
          key={selHousing.id}
          itemTitle={datas.housingDescriptionCollapseTitle}
          itemText={selHousing.description}
          fontSize={fontSize}
        />
      </div>
      <div className="equipCollapseDiv">
        <Collapse 
          key={selHousing.id}
          itemTitle={datas.housingEquipmentsCollapseTitle}
          itemText={selHousing.equipments}
          fontSize={fontSize}
        />
      </div>   
    </div>
  </section>
  )
}
export default HousingInfos;