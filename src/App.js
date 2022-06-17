import './App.sass';
import {Routes, Route, Navigate} from 'react-router-dom'
import { useCookies } from 'react-cookie';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import MyProfile from './pages/MyProfile';

function App() {
  const [cookies] = useCookies(['my_token'])

  return(
    <div className='app-wrapper'>
      <Header/>
        <main className='app-container'>
          <Routes>
            <Route exact path='/' element={<Home/>}/>

            <Route path='/login' 
              element={
              cookies.my_token ? 
              <Navigate to={'/me'}/> : <Login/>
              }
            />

            <Route path='/register' 
              element={
              cookies.my_token ? 
              <Navigate to={'/me'}/> : <Register/>
              }
            />

            <Route path='/me' 
              element={
              cookies.my_token ? 
              <MyProfile/> : <Navigate to={'/login'}/>
              }
            />
          </Routes>
        </main>
      <Footer/>
    </div>
  )
}

export default App;
