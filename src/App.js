import { Routes,Route } from 'react-router-dom';
import './App.css';
import AboutMe from './Pages/AboutMe/AboutMe';
import Checkout from './Pages/Home/Checkout/Checkout';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';
import Footer from './Pages/Sherad/Footer/Footer';
import Header from './Pages/Sherad/Header/Header';
import NotFound from './Pages/Sherad/NotFund/NotFound';
import RequireAuth from './Pages/Sherad/RequireAuth/RequireAuth';
import SingUp from './Pages/SingUp/SingUp';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/'element={<Home></Home>}></Route>
        <Route path='/home'element={<Home></Home>}></Route>
        <Route path='/checkout'element={
          <RequireAuth>
            <Checkout></Checkout>
          </RequireAuth>
        }></Route>
        <Route path='/login'element={<Login></Login>}></Route>
        <Route path='/singUp'element={<SingUp></SingUp>}></Route>
        <Route path='/aboutMe'element={<AboutMe></AboutMe>}></Route>
        <Route path='*'element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
