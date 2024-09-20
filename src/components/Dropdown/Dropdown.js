import React, { useState } from 'react';
import dropdownArrow from '../../assets/images/ArrowTop.svg';

function Dropdown({ title, text, className }) {

   const [isOpen, setIsOpen] = useState(false);

   const toggleDropdown = () => {
      setIsOpen(!isOpen);
   };

   return (
      <div className={`dropdown ${className}`}>
         <h3>
            {title}
            <img src={dropdownArrow} alt='flèche' className={`dropdown-arrow ${isOpen ? 'open' : ''}`}
               onClick={toggleDropdown}></img>
         </h3>
         <p className={`dropdown-text ${isOpen ? 'open' : ''}`}>{text}</p>
      </div>
   )
}
export default Dropdown;