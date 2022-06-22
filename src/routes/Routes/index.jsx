import { Route, Routes } from "react-router-dom";
import useAuth from "../../components/hooks/useAuth";

import Home from '../../pages/Home';
import Login from '../../pages/Login';
import Register from '../../pages/Register';
import MyProfile from '../../pages/MyProfile';
import PlacePage from '../../pages/PlacePage';
import GuestRoute from '../components/GuestRoute';
import PrivateRoute from '../components/PrivateRoute';

export default function AppRoutes(){
  const [state] = useAuth()

  return(
    <Routes>
      <Route exact path='/' element={<Home/>}/>

      <Route path='/login' 
        element={
        <GuestRoute user={state.user.data}>
          <Login/>
        </GuestRoute>}
      />

      <Route path='/register' 
        element={
        <GuestRoute user={state.user.data}>
          <Register/>
        </GuestRoute>}
      />

      <Route path='/me' 
        element={
        <PrivateRoute 
          user={state.user.data} 
          redirectPath={'/login'}
        >
          <MyProfile/>
        </PrivateRoute>}
      />

      <Route path='/place/:id/' 
        element={
        <PrivateRoute user={state.user.data}>
          <PlacePage/>
        </PrivateRoute>}
      />
    </Routes>
  )
}