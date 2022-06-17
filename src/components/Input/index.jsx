import React from "react";
import s from  './style.module.sass'

export const Input = React.forwardRef(({error, inputname, label,  type ='text', ...rest}, ref) => {
  return (
    <div className={s.myInput}>
      <label htmlFor={inputname}>{label}</label>
      <input id={inputname} type={type} ref={ref} {...rest} />
      {error && (<span>{error}</span>)}
    </div>
  )
})