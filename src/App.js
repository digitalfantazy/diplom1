import { HashRouter, Routes, Route } from 'react-router-dom';

import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage'
import Header from './components/header/Header';
import SingUpPage from './pages/SingUpPage';

function App() {
  return (
      <div className="App">
        <Header />
        <HashRouter>
          <Routes>
            <Route exact path="/" element={<MainPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/reg" element={<SingUpPage />} />
          </Routes>
        </HashRouter>
      </div>
  );
}

export default App;
