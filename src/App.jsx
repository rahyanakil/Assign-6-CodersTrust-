import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Bookmark from './pages/BookMark';

const App = () => {
  return (
    <Router>
      {/* Responsive Container */}
      <div className="min-h-screen bg-gray-100">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bookmark/:id" element={<Bookmark />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;