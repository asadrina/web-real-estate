import './App.css';
import Properties from './components/Properties';
import CartTable from './components/CartTable'
import { useState } from 'react';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import PropertyDetail from './components/PropertyDetail';
import Home from './components/Home';
import Users from './components/Users';

function App() {
  const [cart, setCart] = useState([]);
  return (
    <div className="App">
      <Header cart={cart}/>
      <Routes>
        <Route path="/" element={<Home/>}/> 
        <Route path="/users" element={<Users/>}/>
        <Route path="/properties" element={<Properties cart={cart} setCart={setCart}/>}/>
        <Route path="properties/:property_id" element={<PropertyDetail/>}/>
        <Route path="/cart" element={<CartTable cart={cart} setCart={setCart}/>}/>
      </Routes>
    </div>
  );
}

export default App;
