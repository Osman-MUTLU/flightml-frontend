import './styles/App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import backgroundImage from './assets/bg-image.png';
import Layout from './utils/Layout';

function App() {
  return (
    <div className="App"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        width: '100vw',
        display: 'flex',
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />

              <Route path="*" element={<h1>404 Not Found</h1>} />
          </Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
