import React, { useCallback, useEffect, useMemo, useReducer } from "react";
import usersApi from "../apiRequest";
import Cookies from "js-cookie";

const initState = {
  user:{
    token: null,
    data: null
  }
};

const reducer = (state, action) => {
  switch(action.type){
    case 'SET_USER':
      const token = action.payload.token || null
      const user = action.payload.data || null

      Cookies.set('my_token', token);

      return{
        ...state,
        user: {
          ...state.user,
          token: token,
          data: user
        }
      }
    case 'LOGOUT': 
      Cookies.remove('my_token');

      return{
        ...state,
        user: {
          ...state.user,
          token: null,
          data: null
        }
      }
    default:
      throw new Error();
  }
};

export const StoreContext = React.createContext();

export default function Store({children}){
  const [state, dispatch] = useReducer(reducer, initState);

  const setUser = useCallback((token, data)=>{
    dispatch({type: 'SET_USER', payload: {token: token, data: data}})
  }, []);

  const logOut = useCallback(()=> {
    dispatch({type: 'LOGOUT'})
  }, []);

  const loadData = useCallback(async()=> {
    const tokenData = Cookies.get('my_token');

    try{
      if(tokenData){
        const res = await usersApi.getProfile(tokenData);
        setUser(tokenData, res);
      }
    }catch(e){
      setUser();
    }
  }, [setUser])

  const handleDispatch = useMemo(() => (
    {
      setUser,
      logOut,
    }
  ), [setUser, logOut]);

  useEffect(() => {
    loadData()
  }, [loadData])

  return(
    <StoreContext.Provider value={[state, handleDispatch]}>
      {children}
    </StoreContext.Provider>
  )
}