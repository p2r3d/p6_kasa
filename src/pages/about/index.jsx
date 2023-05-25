import Header from '../../components/Header'
import Collapse from '../../components/Collapse'
import Footer from '../../components/Footer'
import datas from '../../datas/config';
import  './about.scss';


function About() {
  const fontSize = '24px';
  return (
    <div className='aboutDiv'>
      <Header        
        logo={datas.logoKasa} 
        logoDescription={datas.logoDescription}
        bannerImg={datas.aboutBannerImg} 
        bannerText={datas.aboutBannerText} 
        bannerDescription={datas.aboutBannerDescription}
      />
      <div className='collapsesDiv'>
        {datas.aboutDatas.map((item, index) => (
          <Collapse
            key={index}
            itemTitle={item.aboutItemTitle}
            itemText={item.aboutItemText}
            fontSize={fontSize}
          />
      ))}
      </div>
      <Footer 
        logo={datas.logoFooterKasa} 
        logoDescription={datas.logoDescription}
        text={datas.footerText}
      />
    </div>
  )
}

export default About
