import { useContext, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';
import locationLogo from '../../assets/logoclima.png';
import './Navigation.css';


const Navigation = () => {
    const { currentUser, setCurrentUser } = useContext(UserContext);

    useEffect(() => {
        const userStored = localStorage.getItem('currentUser')
        //console.log({userStored})
        if (userStored) {
            setCurrentUser(JSON.parse(userStored))
        }
    }, [])

    const handleSignOut = () => {
        setCurrentUser(null);
    };

  return (
    <>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <img src={locationLogo} alt='Logo' className='logo' />
        </Link>
        <div className='nav-links-container'>
            {currentUser ? (
                <Link className='nav-link' to='location/create'>
                    Nueva Localidad
                </Link>
            ) : (
                <span className='nav-link'>Nueva Localidad</span>
            )}

            {currentUser ? (
                <span className='nav-link sign-out' onClick={handleSignOut}>
                    Cerrar Sesion
                </span>
            ) : (
                <Link className='nav-link sign-in' to='/login'>
                    Iniciar Sesion
                </Link>
            )}
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
