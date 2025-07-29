import Card from './components/card/Card';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import MovieDetails from './pages/movieDetails/MovieDetails';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie" element={<MovieDetails />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App
