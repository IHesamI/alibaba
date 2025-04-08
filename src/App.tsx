import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import MainPage from './MainPage';
import OrderPage from './OrderPage';
import Profile from './Profile';
import People from './TravelHistory';
import TravelHistory from './People';

function App() {

  return (<>
    <BrowserRouter>
      <Routes>
        <Route Component={MainPage} path='/' />
        <Route Component={OrderPage} path='/orders' />
        <Route Component={Profile} path='/profile' />
        <Route Component={TravelHistory} path='/my-travels' />
        <Route Component={People} path='/people' />
        
      </Routes>
    </BrowserRouter>
  </>);
}

export default App
