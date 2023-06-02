import { useState } from 'react'
//import { useParams } from 'react-router-dom'
import './slider.scss';
import PArrow from "../../assets/PArrow.png";
import NArrow from "../../assets/NArrow.png";

const Slider = ({selHousing}) => {
const [index, setCurrentIndex] = useState(0);

const previousPicture = () => {
// vérif de la valeur de l'index de l'image courante
const isFirstSlide = index === 0;
const newIndex = isFirstSlide ? selHousing.pictures.length - 1 : index - 1;
// mise à jour de la valeur de l'index de l'image courante avec
setCurrentIndex(newIndex);
};
const nextPicture = () => {
const isLastSlide = index === selHousing.pictures.length - 1;
const newIndex = isLastSlide ? 0 : index + 1;
setCurrentIndex(newIndex);
};
return (
  <section className="carrouselSection">
    <div className="picturesDiv">
      <img
        className={selHousing.pictures.length === 1 ? "PArrowNone" : "PArrow"}
        onClick={previousPicture}
        src={PArrow}
        alt="Flêche précédente"
      />
      <img
        key={selHousing.id}
        className="carrouselImg"
        src={selHousing.pictures[index]}
        alt={selHousing.title}
      />
      <div className={selHousing.pictures.length === 1 ? "noSlider" :"slider"}>
        <span>
          {index + 1} / {selHousing.pictures.length}
        </span>
      </div>    
      <img
        className={selHousing.pictures.length === 1 ? "NArrowNone" : "NArrow"}
        onClick={nextPicture}
        src={NArrow}
        alt="Flêche suivante"
      />
    </div> 
  </section>
  )
};

export default Slider;
