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
  aboutDatas : [
    {
      aboutItemTitle : "Fiabilité",
      aboutItemText : "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.",
    },
    {
      aboutItemTitle : "Respect",
      aboutItemText : "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
    },
    {
      aboutItemTitle : "Service",
      aboutItemText : "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
      },
    {
      aboutItemTitle : "Sécurité",
      aboutItemText : "La sécurité est la priorité de Kasa. Aussi bien que pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards seront bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
    }
  ]  ,

  // page not found
  notFoundCode : "404",
  notFoundText : "Oups ! La page que vous demandez n'existe pas.",
  backHomeLink : "Retour vers la page d'accueil"
};

export default datas;
