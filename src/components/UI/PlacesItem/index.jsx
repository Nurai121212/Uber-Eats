import { useNavigate } from 'react-router-dom'
import s from './style.module.sass'

export default function PlacesItem({item}){
  const navigate = useNavigate();

  const hadleClick = (id, item) =>{
    navigate('/place/' + id, {state: item})
  };
  
  return(
    <div 
      className={s.place} 
      onClick={() => hadleClick(item.id, item)}
    >
      <div>
        <h1>{item.name}</h1>
        <h2>{item.cuisine}</h2>
      </div>
    </div>
  )
}