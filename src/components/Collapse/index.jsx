import { useState } from 'react'
import './collapse.scss'
import DArrow from '../../assets/DArrow.png';
import UArrow from '../../assets/UArrow.png';


function Collapse({AboutItemIndex, aboutItemTitle,aboutItemText,arrowD, arrowU}) {

  const [isOpen, setIsOpen] = useState(false)
  return isOpen ? (
  <div>
    <ul className='divContainer'>       
      <li className='itemContainer' key={AboutItemIndex}>
        <div className='openedCollapse'>
          <p className='itemTitle'>{aboutItemTitle}</p>
          <button className='arrow' onClick={() => setIsOpen(false)}><img className="" src={UArrow} alt="" /></button>
        </div>
        <p className='itemText'>{aboutItemText}</p>
      </li>
    </ul>
  </div>
  ) : (
  <div className='divContainer'>
    <div className='closedCollapse'>
      <p className='itemTitle'>{aboutItemTitle}</p>
      <button className='arrow' onClick={() => setIsOpen(true)}><img className="" src={DArrow} alt="" /></button>
    </div>
  </div>
 ) 
}

export default Collapse