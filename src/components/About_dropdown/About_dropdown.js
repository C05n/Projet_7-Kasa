import React, { useState } from 'react';
import dropdownArrow from '../../assets/images/ArrowTop.svg';

function AboutDropdown({title, text}) {

   const [isOpen, setIsOpen] = useState(false);

   const toggleDropdown = () => {
     setIsOpen(!isOpen);
   };

   return (
      <section>
         <div className='dropdown'>
            <h3>
               {title}
               <img src={dropdownArrow} alt='flèche' className={`dropdown-arrow ${isOpen ? 'open' : ''}`}
            onClick={toggleDropdown}></img>
            </h3>
            <p className={`dropdown-text ${isOpen ? 'open' : ''}`}>{text}</p>
         </div>
      </section>
   )
}
export default AboutDropdown;