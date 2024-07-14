// import './App.css';

// function App() {
//   return (
//     <div className="App">
     
//     </div>
//   );
// }

// export default App;



import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import GoogleLoginButton from './components/GoogleLoginButton';
import FeedbackForm from './pages/FeedbackForm';
import AggregatedFeedback from './pages/AggregatedFeedback';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <div>
        {!isAuthenticated ? (
          <GoogleLoginButton onLoginSuccess={() => setIsAuthenticated(true)} />
        ) : (
          <nav>
            <ul>
              <li>
                <Link to="/feedback">Submit Feedback</Link>
              </li>
              <li>
                <Link to="/aggregated-feedback">View Feedback</Link>
              </li>
            </ul>
          </nav>
        )}
        <Routes>
          <Route path="/feedback">
            <FeedbackForm />
          </Route>
          <Route path="/aggregated-feedback">
            <AggregatedFeedback />
          </Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
