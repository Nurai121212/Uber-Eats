import { Navigate } from "react-router-dom";

export default function PrivateRoute({
  user,
  redirectPath = '/',
  children
}){
  if(user === null){
    return <Navigate to={redirectPath} replace/>
  }

  return children;
}