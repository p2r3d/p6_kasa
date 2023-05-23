import Slider from '../../components/Slider'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import Collapse from '../../components/Collapse'


import housings from '../../datas/logements.json';
import datas from '../../datas/config'

import PArrow from "../../assets/PArrow.png";
import NArrow from "../../assets/NArrow.png";

function Housing(props) {
  return (
    <div>
      <Nav        
        logo={datas.logoKasa} 
        logoDescription={datas.logoDescription}
      />      
      <Slider slides={housings} PArrow={PArrow}  NArrow={NArrow}/>
      <Collapse
        arrowD={datas.arrowD}
        arrowU={datas.arrowU}
      />
      <Footer 
        logo={datas.logoFooterKasa} 
        logoDescription={datas.logoDescription}
        text={datas.footerText}
      />
    </div>
  );
}

export default Housing;
