import s from './style.module.sass';

import { useEffect, useCallback } from 'react';
import {useParams, useLocation} from 'react-router-dom';
import usersApi from '../../components/apiRequest';

export default function PlacePage(){
  const param = useParams();
  const location = useLocation();

  const loadData = useCallback(async() => {
    try{
      const res = await usersApi.getDishes(param.id);
      console.log(res);
    }catch(e){
      console.log(e);
    }
  }, [param.id]);

  useEffect(() => {
    loadData()
  }, [loadData])
  
  return(
    <>
      <div className={s.hero}>
        <img src={location.state.img} alt="hero section" />
        <div>
          <h1>{location.state.name}</h1>
          <h2>{location.state.cuisine} <span>40 - 50 Min</span></h2>
        </div>
      </div>
    </>
  )
}