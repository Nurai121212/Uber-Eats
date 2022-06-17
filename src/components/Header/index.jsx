import logo from '../../assets/logo.jpg';
import s from './style.module.sass';
import { NavLink } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { useEffect, useState, useCallback } from 'react';
import axios from 'axios';

export default function Header(){
  const [cookies] = useCookies(['my_token']);
  const [user, setUser] = useState(null);

  const loadData = useCallback(async() => {
    if(cookies.my_token){
      const res = await axios.get('http://localhost:1717/me', {
        headers: {
          "X-Auth": cookies.my_token
        }
      });
      setUser(res.data);
    }
  }, [cookies]);
  
  useEffect(() => {
    loadData()
  }, [loadData]);

  return(
    <header className={s.header}>
      <div className={s.headerContainer}>
        <NavLink to={'/'} className={s.headerLogo}>
          <img src={logo} alt="header logo" />
        </NavLink>
        <div className={s.headerRight}>
          {user !== null ? (
            <NavLink 
              to={'/me'} 
              className={({ isActive }) => (isActive ? (s.activeLink) : (s.headerLink))}>
                {user.username}
            </NavLink>
          ) : (
            <>
              <NavLink 
                to={'/login'} 
                className={({ isActive }) => (isActive ? (s.activeLink) : (s.headerLink))}>
                  Log In
              </NavLink>
              <NavLink 
                to={'/register'} 
                className={({ isActive }) => (isActive ? (s.activeLink) : (s.headerLink))}>
                  Register
              </NavLink>
            </>
          )}
        </div>
      </div>
    </header>
  )
}