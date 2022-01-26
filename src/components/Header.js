import React from 'react';
import Text from "react-typed";

const Header = () => {
  return (
     <div className="header-wrapper">
        <div className='main-info'>
          <h1>Who I Am</h1>
          <Text
            className="typed-text"
            strings={["Allen Cheslik", "Developer", "Passionate", "Excellence", "Professional"]}
            typeSpeed={40}
            backSpeed={60}
            loop
          />
          <a href='#' className='btn-main-offer'>Collaborate</a>
        </div>
    </div>
  )
};

export default Header;
