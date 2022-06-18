import logo from '../../../assets/logo.jpg';
import s from './style.module.sass';

import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

export default function Header(){
  const [state, dispatch] = useAuth();

  return(
    <header className={s.header}>
      <div className={s.headerContainer}>
        <NavLink 
          to={'/'} 
          className={s.headerLogo}
        >
          <img src={logo} alt="header logo"/>
        </NavLink>
        <div className={s.headerRight}>
          {state.user.data !== null ? (
            <>
              <NavLink 
                to={'/me'} 
                className={({ isActive }) => (isActive ? (s.activeLink) : (s.headerLink))}
              >
                {state.user.data.username}
              </NavLink>
              <button 
                className={s.headerLink} 
                onClick={() => dispatch.logOut()}
              >
                Log Out
              </button>
            </>
          ) : (
            <>
              <NavLink 
                to={'/login'} 
                className={({ isActive }) => (isActive ? (s.activeLink) : (s.headerLink))}
              >
                Log In
              </NavLink>
              <NavLink 
                to={'/register'} 
                className={({ isActive }) => (isActive ? (s.activeLink) : (s.headerLink))}
              >
                Register
              </NavLink>
            </>
          )}
        </div>
      </div>
    </header>
  )
}