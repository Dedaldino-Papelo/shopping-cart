import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './Pages/Home/Home';
import Menu from './Components/Menu/Menu';
import CheckoutPage from './Pages/checkout-page/CheckoutPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/checkout' element={<CheckoutPage />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
