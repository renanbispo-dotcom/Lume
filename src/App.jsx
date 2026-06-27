import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Cardapio from './pages/cardapio/Cardapio';
import Cadastro from './pages/cadastro/Cadastro';
import Contato from './pages/contato/Contato';
import Login from './pages/login/Login';
import Reserva from './pages/reserva/Reserva';
import NossaHistoria from './pages/nossa-historia/NossaHistoria';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cardapio" element={<Cardapio />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/contato" element={<Contato />} />
      <Route path="/login" element={<Login />} />
      <Route path="/reserva" element={<Reserva />} />
      <Route path="/nossa-historia" element={<NossaHistoria />} />
    </Routes>
  );
}
