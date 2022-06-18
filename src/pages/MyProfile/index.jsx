import { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom';
import useAuth from "../../components/hooks/useAuth";

export default function MyProfile(){
  const [state] = useAuth();
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if(state.user.data !== null) {
      setUser(state.user.data)
    }

  }, [state]);

  return(
    <>
      {
        user !== null ? (
          <div>
            <div>
              <h1>Username: {user.username}</h1>
              <h2>First Name: {user.firstName}</h2>
              <h3>Age: {user.age}</h3>
            </div>
            <div>
              <button onClick={() => navigate('/')}>Home</button>
            </div>
          </div>
        ) : (
          <div>Error</div>
        )
      }
    </>
  )
}