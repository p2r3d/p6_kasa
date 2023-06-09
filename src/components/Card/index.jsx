import "./card.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import PropTypes from "prop-types" //bibliothèque pour valider les types des props 
import Housings from "../../datas/logements.json";
function Card() {
  // le hook useState initialise la variable d'état nommée housingState 
  // avec la valeur de Housings provenant de logements.json
  const [ housingState ] = useState(Housings); 
  return (
    <div className='cardContainer'>
      {housingState.map((housing) => (
        <Link to={`/logement/${housing.id}` }
              key={housing.id} 
              className="cardLink">
          <div className="cardFigure">
            <img 
              className="cardImg" 
              src={housing.cover} 
              alt="Logement en images"
            />
            <div className="cardTitle">
              {housing.title}
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}
Card.propTypes = {
  title: PropTypes.string,
  cover: PropTypes.string,
}
Card.defaultProps = {
  title: '',
}
export default Card;


