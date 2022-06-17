import { useEffect, useState } from "react"
import { useCookies } from "react-cookie";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function MyProfile(){
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState(null);
  const [cookies, ] = useCookies(['my_token']);
  const navigate = useNavigate();

  useEffect(() => {
    if(cookies.my_token){
      axios.get('http://localhost:1717/me', {
        headers:{
          'X-Auth': cookies.my_token
        }
      }).then((res) => {
        setUser(res.data)
      }).catch((err) => {
        console.error(err)
      }).finally(() => {
        setLoading(false)
      })
    };

  }, [cookies]);

  return(
  <>
    {loading ? (<div>Loading...</div>) : 
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