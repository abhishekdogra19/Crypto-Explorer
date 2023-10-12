import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout';
import Home from './pages/Home';
import CoinPage from './pages/CoinPage';
import Box from '@mui/material/Box';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path='coins/:id' element={<CoinPage/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default function StyledApp() {
  return (
    <Box
      sx={{
        backgroundColor: "#14161a",
        color: "white",
        minHeight: "100vh",
      }}
    >
      <App />
    </Box>
  );
}
