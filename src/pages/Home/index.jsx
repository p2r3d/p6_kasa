import Header from '../../components/Header'
import Gallery from '../../components/Gallery'
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
    </div>
   
  );
}

export default Home;
