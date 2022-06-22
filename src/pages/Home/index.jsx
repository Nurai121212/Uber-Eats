import s from './style.module.sass'
import { useState, useEffect, useCallback } from "react";
import usersApi from "../../components/apiRequest";
import useAuth from "../../components/hooks/useAuth";
import PlacesList from '../../components/UI/PlacesList';

export default function Home(){  
  const [state] = useAuth();
  const [loading, setLoading] = useState(true);
  const [places, setPlaces] = useState([]);

  const loadPlaces = useCallback(async() => {
    try{
      if(state.user.data !== null){
        const res = await usersApi.getPlaces();
        setPlaces(res)
      }else{
        setPlaces([])
      }
    }catch(e){
      console.log(e);
    }finally{
      setLoading(false)
    }

  }, [state]);

  useEffect(() => {
    loadPlaces()
  }, [loadPlaces]);

  return(
    <div className={s.container}>
      {loading ? (<span>Loading...</span>) : 
        places.length ? (
          <>
            <span>Welcome User!</span>
            <PlacesList list={places}/>
          </>
        ) : (
          <span>You are not logged in.</span>
        )}
    </div>
  )
}