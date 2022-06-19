import './App.sass';
import {Routes, Route, Navigate} from 'react-router-dom'
import useAuth from './components/hooks/useAuth';

import Header from './components/UI/Header';
import Footer from './components/UI/Footer';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import MyProfile from './pages/MyProfile';
import PlacePage from './pages/PlacePage';

function App() {
  const [state] = useAuth();

  return(
    <div className='app-wrapper'>
      <Header/>
        <Routes>
          <Route exact path='/' element={<Home/>}/>

          <Route path='/login' 
            element={state.user.data != null ? <Navigate to={'/me'}/> : <Login/>}
          />

          <Route path='/register' 
            element={state.user.data != null ? <Navigate to={'/me'}/> : <Register/>}
          />

          <Route path='/me' 
            element={state.user.data != null ? <MyProfile/> : <Navigate to={'/login'}/>}
          />

          <Route path='/place/:id/' 
            element={state.user.data != null ? <PlacePage/> : <Navigate to={'/'}/>}
          />
        </Routes>
      <Footer/>
    </div>
  )
}

export default App;