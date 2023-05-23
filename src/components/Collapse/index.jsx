import { useState } from 'react'
import './collapse.scss'


function Collapse({AboutItemIndex, aboutItemTitle,aboutItemText,arrowD, arrowU}) {

  const [isOpen, setIsOpen] = useState(false)
  return isOpen ? (
  <div>
    <ul className='divContainer'>       
      <li className='itemContainer' key={AboutItemIndex}>
        <div className='openedCollapse'>
          <p className='itemTitle'>{aboutItemTitle}</p>
          <button className='arrow' onClick={() => setIsOpen(false)}><img className="" src={arrowU} alt="" /></button>
        </div>
        <p className='itemText'>{aboutItemText}</p>
      </li>
    </ul>
  </div>
  ) : (
  <div className='divContainer'>
    <div className='closedCollapse'>
      <p className='itemTitle'>{aboutItemTitle}</p>
      <button className='arrow' onClick={() => setIsOpen(true)}><img className="" src={arrowD} alt="" /></button>
    </div>
  </div>
 ) 
}

export default Collapse