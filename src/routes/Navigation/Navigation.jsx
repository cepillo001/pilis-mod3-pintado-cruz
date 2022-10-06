import { useContext, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';

import './Navigation.css';

const Navigation = () => {

  return (
    <>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <img src="" alt='Logo' className='logo' />
        </Link>
        
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
