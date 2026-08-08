
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '@/context/AuthProvider';
import { Lock, User } from 'lucide-react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = (e) => {
    e.preventDefault();

    // Simple validation (you'd replace this with actual backend authentication)
    const users = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
    const foundUser = users.find(
      user => user.username === username && user.password === password
    );

    if (foundUser) {
      login({
        name: foundUser.name,
        username: foundUser.username,
        age: foundUser.age || 10,
        level: 'Junior Explorer',
        points: 1250,
        badges: 7
      });
      navigate('/home');
    } else {
      setError('Invalid username or password');
    }
  };



  // const handleLogin = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const response = await fetch('http://localhost:5000/login', {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify({ username, password }),
  //     });

  //     const data = await response.json();

  //     if (response.ok) {
  //       login({
  //         name: data.user.name,
  //         username: data.user.username,
  //         age: data.user.age,
  //         level: 'Junior Explorer', // Add custom data as needed
  //         points: 1250, // Add custom data as needed
  //         badges: 7,    // Add custom data as needed
  //       });
  //       navigate('/home');
  //     } else {
  //       setError(data.message);
  //     }
  //   } catch (err) {
  //     setError('Failed to connect to the server.');
  //   }
  // };


  return (
    <div className="min-h-screen w-screen bg-[url('./assets/Login.jpg')] bg-no-repeat bg-cover flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-whit/70 backdrop-blur-md rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center mb-6 text-darkg">Login</h2>

        {error && (
          <div className="bg-re/10 border border-re text-re px-4 py-3 rounded-3xl relative mb-4">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label htmlFor="username" className="block mb-2 text-darkg">
              Username
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-darkg" />
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-darkg/30 focus:outline-none focus:ring-2 focus:ring-gree"
                placeholder="Enter your username"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="block mb-2 text-darkg">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-darkg" />
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-darkg/30 focus:outline-none focus:ring-2 focus:ring-gree"
                placeholder="Enter your password"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-gree/50 text-white py-2 rounded-lg hover:bg-gree transition duration-300"
          >
            Login
          </button>
        </form>

        <div className="text-center mt-4">
          <p className="text-darkg">
            Don't have an account? {' '}
            <Link to="/register" className="text-gree px-2 hover:underline">
              Register here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
