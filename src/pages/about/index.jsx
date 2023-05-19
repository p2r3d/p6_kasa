import Header from '../../components/Header'
import datas from '../../datas/config';

function About() {

  return (
     <div>
      <Header bannerImg={datas.aboutBannerImg} bannerText={datas.aboutBannerText} bannerDescription={datas.aboutBannerDescription}/>
    </div>
  )
}

export default About;
