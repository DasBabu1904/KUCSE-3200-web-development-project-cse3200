import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import Search from './Component/Search/Search';
import LeaderBoard from './Component/LeaderBoard/LeaderBoard';
import CompanyList from './Component/CompanyList/CompanyList';
import { useEffect, useState } from 'react';
import Footer from './Component/Footer/Footer';
import LogIn from './Component/LogIn/LogIn';
import Register from './Component/Register/Register';
import ForgetPass from './Component/Forgate-password/ForgetPass';
import AddCompany from './Component/Admin/AddCompany/AddCompany';
import UpdateCompany from './Component/Admin/UpdateCompany/UpdateCompany';
import DeleteCompany from './Component/Admin/DeleteCompany/DeleteCompany';
import Breadcrumbs from './Component/BreadCums/Breadcrumbs';
import Profile from './Component/Profile/Profile';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import BookProduct from './Component/BookProduct/BookProduct';
import ProcedPayment from './Component/ProcedPayment/ProcedPayment';
import PaymentSuccess from './Component/ProcedPayment/PaymentSuccess/PaymentSuccess';
import EditUserProfile from './Component/User/EditUserProfile/EditUserProfile';
import Revirew from './Component/Revirew/Revirew';

const auth = getAuth();

function App() {

  const [user, setUser] = useState(null);
  useEffect(() => {

    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
       
      } else {

      }
    });

  }, [auth])

  
  return (
    <div className="App">
      <Header></Header>
      <Breadcrumbs></Breadcrumbs>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/search' element={<Search></Search>}></Route>
        <Route path='/leader-board' element={<LeaderBoard></LeaderBoard>}></Route>
        <Route path='/company-list' element={<CompanyList></CompanyList>}></Route>
        <Route path='/book-product' element={<BookProduct></BookProduct>}></Route>
        <Route path='/profile' element={<Profile user={user}></Profile>}>
          {/* <Route path='/profile/user-profile' element={<UserProfile></UserProfile>}></Route>
          <Route path='/profile/admin-profile' element={<AdminProfile></AdminProfile>}></Route> */}
        </Route>
        <Route path='/log-in' element={<LogIn></LogIn>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/forget-pass' element={<ForgetPass></ForgetPass>}></Route>
        <Route path='/add-company' element={<AddCompany></AddCompany>}></Route>
        <Route path='/update-company' element={<UpdateCompany></UpdateCompany>}></Route>
        <Route path='/delete-company' element={<DeleteCompany></DeleteCompany>}></Route>
        <Route path='/payment-proced' element={<ProcedPayment></ProcedPayment>}></Route>
        <Route path='/payment/success' element={<PaymentSuccess></PaymentSuccess>}></Route>
        <Route path='/edit-user-profile' element={<EditUserProfile customer={user}></EditUserProfile>}></Route>
        <Route path='/review-give'element={<Revirew></Revirew>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
