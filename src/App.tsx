import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import MainPage from './MainPage';
import OrderPage from './OrderPage';
import Profile from './Profile';
import People from './TravelHistory';
import TravelHistory from './People';
import SelectedOrder from './SelectedOrder';
import { useEffect, useState } from 'react';
import { getUser } from './API';

function App() {
  const [user, setUser] = useState(false);
  useEffect(() => {
    const fetchApi = async () => {
      await fetch("http://127.0.0.1:8000/csrf/", {
        credentials: "include",
      });
      const result = await getUser();
    console.error(result)
    }

    fetchApi()
  }, []);

  return (<>
    <BrowserRouter>
      <Routes>
        <Route Component={MainPage} path='/' />
        <Route Component={OrderPage} path='/orders' />
        <Route Component={Profile} path='/profile' />
        <Route Component={TravelHistory} path='/my-travels' />
        <Route Component={People} path='/people' />
        <Route Component={SelectedOrder} path='/order/:id' />
      </Routes>
    </BrowserRouter>
  </>);
}

export default App
