import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import Search from './Component/Search/Search';
import LeaderBoard from './Component/LeaderBoard/LeaderBoard';
import CompanyList from './Component/CompanyList/CompanyList';

function App() {
  return (
    <div className="App">
      <Header></Header>
     <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/search' element={<Search></Search>}></Route>
        <Route path='/leader-board' element={<LeaderBoard></LeaderBoard>}></Route>
        <Route path='/company-list' element={<CompanyList></CompanyList>}></Route>
     </Routes>
    </div>
  );
}

export default App;
