import { useEffect, useCallback, useState } from 'react';
import {useParams} from 'react-router-dom';
import usersApi from '../../components/apiRequest';

import Hero from '../../components/UI/Hero';
import MenuNav from '../../components/UI/MenuNav';
import DishesList from '../../components/UI/DishesList';

export default function PlacePage(){
  const param = useParams();

  const [data, setData] = useState([]);
  const [current, setCurrent] = useState('');
  const [category, setCategory] = useState([]);
  
  const filterCategory = (item) => {
    setCategory(data.filter(el => el.category === item))
    setCurrent(item)
  }

  const loadData = useCallback(async() => {
    try{
      const res = await usersApi.getDishes(param.id);
      setData(res);

      setCurrent(res[0].category);
      setCategory(res.filter((el) => el.category === res[0].category));
    }catch(e){
      console.log(e);
    }
  }, [param.id]);

  useEffect(() => {
    loadData()
  }, [loadData])
  
  return(
    <>
      <Hero/>
      <MenuNav data={data} filterFunc={filterCategory} current={current}/>
      <DishesList list={category} current={current}/>
    </>
  )
}