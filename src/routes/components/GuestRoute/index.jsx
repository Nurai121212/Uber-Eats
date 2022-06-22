import { Navigate } from "react-router-dom";

export default function GuestRoute({
  user, 
  redirectPath = '/me',
  children
}){
  if(user != null){
    return <Navigate to={redirectPath} replace/>
  }

  return children
}