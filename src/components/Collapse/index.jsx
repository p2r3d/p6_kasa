import { useState } from 'react'
import './collapse.scss'
import UArrow from '../../assets/UArrow.png';

function Collapse({itemTitle,itemText, fontSize}) {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen)
  return isOpen ? (
  <section className='collapseSection '>
    <ul>       
      <li style={{ fontSize: (parseInt(fontSize)) }}>
        <div className='openedCollapse '  onClick={() => setIsOpen(false)}>
          <div className='itemTitle ' >
            <p className=''>{itemTitle}</p>
            <button className='arrowBtn arrowRotationDown'>
              <img className='arrowImg ' src={UArrow} alt="flêche de la collapse fermée" />
            </button>
          </div>
          {/* si le texte est un tableau alors affichage de la liste */}
          {Array.isArray(itemText)  ? (
            <ul className='itemText'>
              {itemText.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          ) : ( <p className='itemText'>{itemText}</p>)}
        </div>
      </li>
    </ul>
  </section>
  ) : (
  <section className='collapseSection '>
    <ul>       
      <li  style={{ fontSize: (parseInt(fontSize)) }}>
        <div className='closedCollapse '  onClick={() => setIsOpen(true)}>
          <div className='itemTitle'>
            <p> {itemTitle}</p>
            <button className='arrowBtn arrowRotationUp'>
              <img className='arrowImg ' src={UArrow} alt="flêche de la collapse ouverte" />
            </button>
            </div>
        </div>      
      </li>
    </ul>
  </section>
 ) 
}
export default Collapse

