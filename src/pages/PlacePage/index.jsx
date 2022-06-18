import {useParams, useLocation} from 'react-router-dom';

export default function PlacePage(){
  const param = useParams();
  const location = useLocation();
  console.log(location);
  
  return(
    <h1>You are in place with id {param.id}</h1>
  )
}