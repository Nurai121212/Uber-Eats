import logo from '../../../assets/logo.png';
import s from './style.module.sass';

export default function Footer(){
  return(
    <footer className={s.footer}>
      <div className={s.footerContainer}>
        <div><img src={logo} alt="footer logo" /></div>
        <hr />
        <span>© {new Date().getFullYear()} All rights reserved</span>
      </div>
    </footer>
  )
}