import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Competicoes from './pages/Competicoes/';
import './reset.css';
import './styles.css';
import Header from './components/Header';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/competicoes' element={<Competicoes />}></Route>
      </Routes> 
    </BrowserRouter>
  )
}