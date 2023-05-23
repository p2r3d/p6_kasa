import { useState } from 'react'
import { useParams } from 'react-router-dom'
import './slider.scss';

const Slider = ({slides, PArrow, NArrow }) => {
  const {id}=useParams();
  const selectedHousing = slides.find((housing) => housing.id === id);

  const [index, setCurrentIndex] = useState(0);

  const previousPicture = () => {
    // vérif de la valeur de l'index de l'image courante
    const isFirstSlide = index === 0;
    const newIndex = isFirstSlide ? selectedHousing.pictures.length - 1 : index - 1;
    // mise à jour de la valeur de l'index de l'image courante avec
    setCurrentIndex(newIndex);
  };

  const nextPicture = () => {
    const isLastSlide = index === selectedHousing.pictures.length - 1;
    const newIndex = isLastSlide ? 0 : index + 1;
    setCurrentIndex(newIndex);
  };
console.log("selectedHousing.pictures.length",selectedHousing.pictures.length)
  return (
    <section className="carrouselSection">
      <div className="picturesDiv">
        <img
          className={selectedHousing.pictures.length === 1 ? "PArrowNone" : "PArrow"}
          onClick={previousPicture}
          src={PArrow}
          alt="Flêche précédente"
        />
        <img
            key={selectedHousing.id}
            className="carrouselImg"
            src={selectedHousing.pictures[index]}
            alt={selectedHousing.title}
        />
        <div className={selectedHousing.pictures.length === 1 ? "noSlider" :"slider"}>
          <span>
            {index + 1} / {selectedHousing.pictures.length}
          </span>
        </div>    
        <img
          className={selectedHousing.pictures.length === 1 ? "NArrowNone" : "NArrow"}
          onClick={nextPicture}
          src={NArrow}
          alt="Flêche suivante"
        />
      </div>
      
    </section>
  );
};

export default Slider;
