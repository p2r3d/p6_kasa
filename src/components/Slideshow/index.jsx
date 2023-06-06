import { useState } from 'react'
import './slideshow.scss';
import PArrow from "../../assets/PArrow.png";
import NArrow from "../../assets/NArrow.png";

const Slideshow = ({selHousing}) => {
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
    <section className="slideshowSection">
      <div className="picturesDiv">
        {/* affichage flêche précédente */}
        <img
          className={selHousing.pictures.length === 1 ? "PArrowNone" : "PArrow"}
          onClick={previousPicture}
          src={PArrow}
          alt="Flêche précédente"
        />
        {/* affichage photo */}
        <img
          key={selHousing.id}
          className="slideshowImg"
          src={selHousing.pictures[index]}
          alt={selHousing.title}
        />
        {/* affichage compteur */}
        <div className={selHousing.pictures.length === 1 ? "noSlideshowCounter" :"slideshowCounter"}>
          <span>{index + 1} / {selHousing.pictures.length}</span>
        </div>    
        {/* affichage flêche suivante */}
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
export default Slideshow;

