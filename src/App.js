import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import Search from './Component/Search/Search';
import LeaderBoard from './Component/LeaderBoard/LeaderBoard';
import CompanyList from './Component/CompanyList/CompanyList';
import { useEffect, useState } from 'react';
import UserProfile from './Component/UserProfile/UserProfile';
import Footer from './Component/Footer/Footer';
import CardProduct from './Component/CardProduct/CardProduct';
import LogIn from './Component/LogIn/LogIn';
import Register from './Component/Register/Register';
import RequireAuth from './Component/RequireAuth/RequireAuth';
import ForgetPass from './Component/Forgate-password/ForgetPass';

function App() {
  return (
    <div className="App">
      <Header></Header>
     <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/search' element={<Search></Search>}></Route>
        <Route path='/leader-board' element={<LeaderBoard></LeaderBoard>}></Route>
        <Route path='/company-list' element={<CompanyList></CompanyList>}></Route>
        <Route path='/user-profile' element={<UserProfile></UserProfile>}></Route>
        <Route path='/log-in' element={<LogIn></LogIn>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/forget-pass' element={<ForgetPass></ForgetPass>}></Route>
     </Routes>
     <Footer></Footer>
    </div>
  );
}

export default App;
