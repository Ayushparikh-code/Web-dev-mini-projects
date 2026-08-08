

import React from 'react';
import './App.css';
import { 
  BrowserRouter as Router, 
  Route, 
  Routes, 
  Navigate 
} from 'react-router-dom';

// Import components
import Home from './Components/Home';
import Games from './Components/Games';
import Learn from './Components/Learn';
import Progress from './Components/Progress';
import Account from './Components/Account';
import Quizes from './Components/Quizes';
import AlphabetQuiz from './Quizes/AlphabetQuiz';
import NumberQuiz from './Quizes/NumberQuiz';
import MCQQuiz from './Quizes/MCQQuiz';
import NumberMatchingGame from './Games/NumberMatchingGame';
import BalloonPop from './Games/BalloonPop';

// Import authentication related components
import { AuthProvider, useAuth } from './context/AuthProvider';
import Welcome from './Pages/Welcome';
import Login from './Pages/Login';
import Register from './Pages/Register';

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  
  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }
  
  return children;
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className='flex w-screen bg-pin'>
          <Routes>
            {/* Welcome/Landing Page */}
            <Route path="/" element={<Welcome  />} />
            
            {/* Authentication Routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            
            {/* Protected Routes */}
            <Route 
              path="/home" 
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/progress" 
              element={
                <ProtectedRoute>
                  <Progress />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/learn" 
              element={
                <ProtectedRoute>
                  <Learn />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/games" 
              element={
                <ProtectedRoute>
                  <Games />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/quizes" 
              element={
                <ProtectedRoute>
                  <Quizes />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/account" 
              element={
                <ProtectedRoute>
                  <Account />
                </ProtectedRoute>
              } 
            />

            {/* Quiz Routes */}
            <Route 
              path="/quiz/1" 
              element={
                <ProtectedRoute>
                  <AlphabetQuiz />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/quiz/2" 
              element={
                <ProtectedRoute>
                  <NumberQuiz/>
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/quiz/3" 
              element={
                <ProtectedRoute>
                  <MCQQuiz />
                </ProtectedRoute>
              } 
            />

            {/* Game Routes */}
            <Route 
              path="/games/1" 
              element={
                <ProtectedRoute>
                  <NumberMatchingGame />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/games/2" 
              element={
                <ProtectedRoute>
                  <BalloonPop />
                </ProtectedRoute>
              } 
            />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;