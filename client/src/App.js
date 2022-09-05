import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './Pages/Home/Home';
import Menu from './Components/Menu/Menu';
import CheckoutPage from './Pages/checkout-page/CheckoutPage';
import Success from './Components/Success/Success'

function App() {
  return (
    <>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/checkout' element={<CheckoutPage />} />
          <Route path='/Success' element={<Success />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
