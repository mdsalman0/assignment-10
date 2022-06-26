import { Routes,Route } from 'react-router-dom';
import './App.css';
import Checkout from './Pages/Home/Checkout/Checkout';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';
import Footer from './Pages/Sherad/Footer/Footer';
import Header from './Pages/Sherad/Header/Header';
import NotFound from './Pages/Sherad/NotFund/NotFound';
import SingUp from './Pages/SingUp/SingUp';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/'element={<Home></Home>}></Route>
        <Route path='/home'element={<Home></Home>}></Route>
        <Route path='/checkout'element={<Checkout></Checkout>}></Route>
        <Route path='/login'element={<Login></Login>}></Route>
        <Route path='/singUp'element={<SingUp></SingUp>}></Route>
        <Route path='*'element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
