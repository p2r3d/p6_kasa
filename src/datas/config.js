// fichier de configuration

// import d'images, ne fonctionne pas directement dans l'objet datas ...
import logo from '../assets/logo.png';
import homeBannerImg from '../assets/homeBanner.webp';
import aboutBannerImg from '../assets/aboutBanner.webp';

const datas = {
  //logo
  logoKasa : logo,
  logoDescription : "logo de Kasa",
  // page d'accueil
  homeBannerText : "Chez vous, partout et ailleurs",
  homeBannerDescription : "falaises abruptes plongeant dans l'océan",
  homeBannerImg : homeBannerImg,
  
  // page à propos 
  aboutBannerText : "",
  aboutBannerDescription : "Forêt de sapins ouvrant sur une magnifique vallée au pied de montagnes enneigées",
  aboutBannerImg : aboutBannerImg
};

export default datas;
