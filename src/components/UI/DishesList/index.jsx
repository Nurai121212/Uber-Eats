import s from './style.module.sass';
import DishesItem from "../DishItem";

export default function DishesList({list, current}){
  return(
    <div className={s.dishList}>
      <h1>{current}</h1>
      <ul className={s.list}>
        {list.map((item) => {
          return(
            <li key={item.id}>
              <DishesItem item={item}/>
            </li>
          )})}
      </ul>
    </div>
  )
}