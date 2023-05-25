import { useState } from 'react'
import './collapse.scss'
import DArrow from '../../assets/DArrow.png';
import UArrow from '../../assets/UArrow.png';


function Collapse({itemIndex, itemTitle,itemText, fontSize}) {

  const [isOpen, setIsOpen] = useState(false)
  return isOpen ? (
  <div>
    <ul className='divContainer'>       
      <li className='itemContainer'  style={{ fontSize: fontSize }}>
        <div className='openedCollapse' >
          <p className='itemTitle'>{itemTitle}</p>
          <button className='arrow' onClick={() => setIsOpen(false)}>
            <img className="" src={UArrow} alt="flêche vers le haut" />
          </button>
        </div>
        {/* si le texte est un tableau alors affichage de la liste */}
        {Array.isArray(itemText)  ? (
          <ul className="itemText">
            {itemText.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : ( <p className='itemText'>{itemText}</p>)}
        
      </li>
    </ul>
  </div>
  ) : (
  <div className='divContainer'  style={{ fontSize: fontSize }}>
    <div className='closedCollapse'>
      <p className='itemTitle'>{itemTitle}</p>
      <button className='arrow' onClick={() => setIsOpen(true)}>
        <img className="" src={DArrow} alt="flêche vers le bas" />
      </button>
    </div>
  </div>
 ) 
}

export default Collapse