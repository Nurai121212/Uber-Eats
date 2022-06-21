import {useLocation} from 'react-router-dom';
import s from './style.module.sass';

export default function Hero(){
  const location = useLocation();

  return(
    <div className={s.hero}>
        <img src={location.state.img} alt="hero section" />
        <div>
          <h1>{location.state.name}</h1>
          <h2>{location.state.cuisine} <span>40 - 50 Min</span></h2>
        </div>
    </div>
  )
}