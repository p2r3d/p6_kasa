// fichier de configuration

// import d'images, ne fonctionne pas directement dans l'objet datas ...
import logo from '../assets/logo.png';
import homeBannerImg from '../assets/homeBanner.webp';
import aboutBannerImg from '../assets/aboutBanner.webp';
import logoFooter from '../assets/logoFooter.png';


const datas = {
  //logo
  logoKasa : logo,
  logoDescription : "logo de Kasa",
  
  //footer
  logoFooterKasa : logoFooter,
  footerText : "©2020 Kasa. All rights reserved",
 
  // page d'accueil
  homeBannerText : "Chez vous, partout et ailleurs",
  homeBannerDescription : "falaises abruptes plongeant dans l'océan",
  homeBannerImg : homeBannerImg,
  
  // page à propos 
  aboutBannerText : "",
  aboutBannerDescription : "Forêt de sapins ouvrant sur une magnifique vallée au pied de montagnes enneigées",
  aboutBannerImg : aboutBannerImg,

  // page not found
  notFoundCode : "404",
  notFoundText : "Oups ! La page que vous demandez n'existe pas.",
  backHomeLink : "Retour vers la page d'accueil"
};

export default datas;
