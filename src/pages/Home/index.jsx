import Header from '../../components/Header'
import Gallery from '../../components/Gallery'
import Footer from '../../components/Footer'

import datas from '../../datas/config';

function Home() {
  return (
    <div>
      <Header 
        logo={datas.logoKasa} 
        logoDescription={datas.logoDescription}
        bannerImg={datas.homeBannerImg} 
        bannerText={datas.homeBannerText} 
        bannerDescription={datas.homeBannerDescription}
      />
      <Gallery />
      <Footer 
        logo={datas.logoFooterKasa} 
        logoDescription={datas.logoDescription}
        text={datas.footerText}
      />
    </div>
  );
}

export default Home;
