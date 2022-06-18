import s from './style.module.sass';
import PlacesItem from "../PlacesItem";

export default function PlacesList({list}){
  return(
    <ul className={s.list}>
      {list.map(elem => {
        return(
          <li key={elem.id}>
            <PlacesItem item={elem}/>
          </li>)
      })}
    </ul>
  )
}