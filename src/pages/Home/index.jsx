import Header from '../../components/Header'
import Gallery from '../../components/Gallery'
import datas from '../../datas/config';
import homeBanner from '../../assets/homeBanner.webp'

function Home() {
  
  return (
    <div>
      <Header bannerImg={datas.homeBannerImg} bannerText={datas.homeBannerText} bannerDescription={datas.homeBannerDescription}/>
      <Gallery />
    </div>
  );
}

export default Home;
