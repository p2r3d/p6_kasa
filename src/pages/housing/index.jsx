import { useParams, Navigate } from 'react-router-dom'

import Slideshow from '../../components/Slideshow'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import HousingInfos from '../../components/HousingInfos'

import housings from '../../datas/logements.json';
import datas from '../../datas/config'



function Housing() {

  // récup de l'id passé en paramètre dans l'url
  const {id}=useParams();
   // récup du logement associé cet id
  const selectedHousing = housings.find((housing) => housing.id === id);

  if (selectedHousing) {
    return (
      <div>
        <Nav        
          logo={datas.logoKasa} 
          logoDescription={datas.logoDescription}
        />      
        <Slideshow selHousing={selectedHousing}/>
        <HousingInfos selHousing={selectedHousing}/>
        <Footer 
          logo={datas.logoFooterKasa} 
          logoDescription={datas.logoDescription}
          text={datas.footerText}
        />
      </div>
    );
  }
  return <Navigate to="/notFound" />;
}

export default Housing