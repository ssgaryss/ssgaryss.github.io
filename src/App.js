import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

function HomePage() {
  return (
    <div className="page">
      <h1>👋 Hi, I'm Gary</h1>
      <p>Welcome to my personal website.</p>
      <Link to="/about" className="btn">About Me</Link>
    </div>
  );
}

function AboutPage() {
  return (
    <div className="page">
      <h1>About Me</h1>
      <p>I am an undergraduate and master's student from Sichuan University.</p>
      <Link to="/" className="btn">Back to Home</Link>
    </div>
  );
}

function App() {
  return (
    <Router basename="/">
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
