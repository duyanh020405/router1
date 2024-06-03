import React from 'react';
import { Route, Routes, Link, NavLink } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import Login from './components/Login';
import Register from './components/Register';
import NotFound from './components/NotFound';
import Product from './components/Product';
import Detail from './components/Detail'; // Assuming this is a dynamic detail component
import Hp from './components/Hp';
import './App.css';

export default function App() {
  const users = [
    { id: 1, name: 'Duy Anh', username: 'Ank', email: '1@gmail.com', address: 'HN' },
    { id: 2, name: 'Duy Anh 2', username: 'Ank', email: '1@gmail.com', address: 'HN' },
    { id: 3, name: 'Duy Anh 3', username: 'Ank', email: '1@gmail.com', address: 'HN' }
  ];

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/product' element={<Product />} />
        <Route path='/detail' element={<Detail />} />
        <Route path='/home-page' element={<Hp />} />
        <Route path='*' element={<NotFound />} />
        <Route path='/id1' element={<Detail/>} />
        <Route path='/id2' element={<Detail />} />
        <Route path='/id3' element={<Detail/>} />
      </Routes>

      <h4>Bai 6</h4>
      <Link to="/contact">Contact</Link>
      <Link to="/">Home</Link>

      <h4>Bai 7</h4>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/detail">Detail</NavLink>
      <NavLink to="/product">Product</NavLink>

      <h4>Bai 8</h4>
      <nav className='nav'>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/detail">Detail</NavLink>
        <NavLink to="/product">Product</NavLink>
      </nav>

      <h4>Bai 10</h4>
      <div style={{ display: "flex", flexDirection: "row", gap: 30, border: "1px solid black" }}>
        {users.map(user => (
          <div key={user.id}>
            id: {user.name} <br />
            UserName: {user.username} <br />
            Email: {user.email} <br />
            Adress: {user.address} <br />
            <button><Link to={`/id${user.id}`}>Xem chi tiet</Link></button>
          </div>
        ))}
      </div>
    </div>
  );
}
