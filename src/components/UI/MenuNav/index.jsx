import s from './style.module.sass';

export default function MenuNav({data, filterFunc, current}){
  const defaultCategorys = []
  
  data.forEach((item) => {
    let category = item.category;
    
    if(!defaultCategorys.includes(category)){
      defaultCategorys.push(category)
    }
  });

  return(
    <div className={s.menu}>
      <div>
        <ul>
          {defaultCategorys.map((item, i) => {
            return(
              <li key={i}>
                <button 
                  onClick={() => filterFunc(item)}
                  className={current === item ? s.activeBtn : s.menuBtn}
                >
                  {item}
                </button>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}