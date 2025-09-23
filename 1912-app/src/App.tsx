import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import OurPeople from './pages/OurPeople';
import OurVision from './pages/OurVision';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/our-people" element={<OurPeople />} />
            <Route path="/our-vision" element={<OurVision />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;