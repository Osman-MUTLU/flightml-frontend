import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Index from './pages/Index';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/home" element={<Index />} />

          <Route path="*" element={<h1>404 Not Found</h1>} />
          

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
