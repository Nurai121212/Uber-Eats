import s from './style.module.sass';

export default function DishesItem({item}){
  return(
    <div className={s.dishItem}>
      <div className={s.itemLeft}>
        <div>
          <h2>{item.name}</h2>
          <h3>{item.desc}</h3>
        </div>
        <div>
          <span>{item.price} ₽</span>
        </div>
      </div>
      <div className={s.itemRight}>
        <img src={item.img} alt="dish" />
      </div>
    </div>
  )
}