import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import MainPage from './components/pages/MainPage/MainPage'
import ProductPage from './components/pages/ProductPage/ProductPage'

import './styles/main.css'

function App() {

  return (
    <div className="wrapper">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/product' element={<ProductPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App;