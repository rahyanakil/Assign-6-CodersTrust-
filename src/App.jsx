import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Bookmark from './pages/BookMark';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bookmark/:id" element={<Bookmark />} />
      </Routes>
    </Router>
  );
};

export default App;