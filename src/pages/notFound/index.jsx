import { Link } from 'react-router-dom';
import Footer from '../../components/Footer'
import Nav from '../../components/Nav'
import datas from '../../datas/config'
import './notFound.css'

function NotFound() {
  return (
    <div>
      <Nav        
        logo={datas.logoKasa} 
        logoDescription={datas.logoDescription}
      />
      <div className='messages'>
        <h1 className='errorCode'>{datas.notFoundCode}</h1>
        <p className='errorText'>{datas.notFoundText}</p>
      </div>
      <Link className='backHome' to="/">{datas.backHomeLink}</Link>
      <Footer 
        logo={datas.logoFooterKasa} 
        logoDescription={datas.logoDescription}
        text={datas.footerText}
      />
   </div>
  );
}
 
export default NotFound

