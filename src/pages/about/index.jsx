import Header from '../../components/Header'
import Footer from '../../components/Footer'

import datas from '../../datas/config';

function About() {

  return (
    <div>
      <Header        
        logo={datas.logoKasa} 
        logoDescription={datas.logoDescription}
        bannerImg={datas.aboutBannerImg} 
        bannerText={datas.aboutBannerText} 
        bannerDescription={datas.aboutBannerDescription}
      />
      <Footer 
        logo={datas.logoFooterKasa} 
        logoDescription={datas.logoDescription}
        text={datas.footerText}
      />
    </div>
  )
}

export default About;
