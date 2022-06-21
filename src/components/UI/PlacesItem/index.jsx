import { useNavigate } from 'react-router-dom'
import s from './style.module.sass'

export default function PlacesItem({item}){
  const navigate = useNavigate();

  const hadleClick = (id, item) =>{
    navigate('/place/' + id, {state: item})
  };
  
  return(
    <div className={s.place} 
      onClick={() => hadleClick(item.id, item)}
    >
      <div className={s.placeTop}>
        <h1>{item.name}</h1>
        <h2>{item.cuisine}</h2>
        <h3>Click for more</h3>
      </div>
      <div className={s.placeBottom}>
        <img src={item.img} alt="place preview" />
      </div>
    </div>
  )
}