import {BrowserRouter, HashRouter, Routes, Route } from 'react-router-dom';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import MainPage from './components/pages/MainPage/MainPage'
import ProductPage from './components/pages/ProductPage/ProductPage'

import './styles/main.css'

function App() {

  return (
    <HashRouter>
      <header className="header">
        <div className='container'>
          <Header />
        </div>
      </header>
      <main className='main'>
        <div className='container'>
          <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/product' element={<ProductPage />} />
          </Routes>
        </div>
      </main>
      <footer className='footer'>
        <div className='container'>
          <Footer />
        </div>
      </footer>
    </ HashRouter>
  )
}

export default App;