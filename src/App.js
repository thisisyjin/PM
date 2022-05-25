import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Pm from './pages/Pm';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pm/:city" element={<Pm />} />
      </Routes>
    </>
  );
};

export default App;
