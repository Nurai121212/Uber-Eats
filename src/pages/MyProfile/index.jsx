import s from './style.module.sass';
import Button from '../../components/UI/Button';
import { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom';
import useAuth from "../../components/hooks/useAuth";

export default function MyProfile(){
  const [state] = useAuth();
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    if(state.user.data === null) {setUser(null)};
    
    setUser(state.user.data);
  }, [state]);

  return(
    <>
      {user !== null && (
        <div className={s.profile}>
          <div>
            <h1>Username: {user.username}</h1>
            <h2>First Name: {user.firstName}</h2>
            <h3>Age: {user.age}</h3>
          </div>
          <div>
            <Button onClick={() => navigate('/')}>Home</Button>
          </div>
        </div>
      )}
    </>
  )
}