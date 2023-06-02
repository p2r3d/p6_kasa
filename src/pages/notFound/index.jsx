import { Link } from 'react-router-dom';
import Footer from '../../components/Footer'
import Nav from '../../components/Nav'

import datas from '../../datas/config'
import './notFound.scss'

function NotFound() {
  return (
    <div>
      <Nav        
        logo={datas.logoKasa} 
        logoDescription={datas.logoDescription}
      />
      <div className='messagesDiv'>
        <h1 className='errorCode'>{datas.notFoundCode}</h1>
        <p className='errorText'>{datas.notFoundText}</p>
      </div>
      <Link className='backHomeDiv' to="/">{datas.backHomeLink}</Link>
      <Footer 
        logo={datas.logoFooterKasa} 
        logoDescription={datas.logoDescription}
        text={datas.footerText}
      />
   </div>
  );
} 
 
export default NotFound

 