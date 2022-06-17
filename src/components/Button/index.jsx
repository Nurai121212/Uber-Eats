import s from './style.module.sass';

export default function Button({children, ...props}){
  return(
    <button {...props} className={s.button}>
      {children}
    </button>
  )
}