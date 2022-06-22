import './App.sass';

import Header from './components/UI/Header';
import Footer from './components/UI/Footer';
import AppRoutes from './routes/Routes';

function App() {
  return(
    <div className='app-wrapper'>
      <Header/>
        <AppRoutes/>
      <Footer/>
    </div>
  )
}

export default App;