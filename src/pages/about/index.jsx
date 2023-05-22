import Header from '../../components/Header'
import Collapse from '../../components/Collapse'
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
      {datas.aboutDatas.map((item, index) => (
        <Collapse
          key={index}
          aboutItemTitle={item.aboutItemTitle}
          aboutItemText={item.aboutItemText}
          arrowD={datas.arrowD}
          arrowU={datas.arrowU}
        />
      ))}
      <Footer 
        logo={datas.logoFooterKasa} 
        logoDescription={datas.logoDescription}
        text={datas.footerText}
      />
    </div>
  )
}

export default About;
