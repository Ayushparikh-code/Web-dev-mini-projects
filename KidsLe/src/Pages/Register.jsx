


import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { User, Lock, Mail } from 'lucide-react';
import Regist from '@/assets/Regist.jpg'

const Register = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [age, setAge] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    // Validation
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    // Check if username already exists
    const users = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
    const userExists = users.some(user => user.username === username);

    if (userExists) {
      setError('Username already exists');
      return;
    }

    // Create new user
    const newUser = {
      name,
      username,
      email,
      password,
      age: parseInt(age)
    };

    // Store users in localStorage (in a real app, this would be a backend call)
    const updatedUsers = [...users, newUser];
    localStorage.setItem('registeredUsers', JSON.stringify(updatedUsers));

    // Redirect to login
    navigate('/login');
  };


  // const handleRegister = async (e) => {
  //   e.preventDefault();

  //   if (password !== confirmPassword) {
  //     setError('Passwords do not match');
  //     return;
  //   }

  //   try {
  //     const response = await fetch('http://localhost:5000/register', {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify({ name, username, email, password, age }),
  //     });

  //     const data = await response.json();

  //     if (response.ok) {
  //       navigate('/login');
  //     } else {
  //       setError(data.message);
  //     }
  //   } catch (err) {
  //     setError('Failed to connect to the server.');
  //   }
  // };
  

  return (
    <div className="min-h-screen w-screen bg-[url('./assets/Regist.jpg')] flex items-center justify-center p-6">
      <div className="w-full max-w-md backdrop-blur-md bg-whit/70 rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center mb-6 text-darkg">Register</h2>

        {error && (
          <div className=" border border-re px-4 py-3 rounded relative mb-4">
            {error}
          </div>
        )}

        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <label htmlFor="name" className="block mb-2 text-darkg">
              Full Name
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-darkg" />
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-darkg/30 focus:outline-none focus:ring-2 focus:ring-orang"
                placeholder="Enter your full name"
                required
              />
            </div>
          </div>

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
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-darkg/30 focus:outline-none focus:ring-2 focus:ring-orang"
                placeholder="Choose a username"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block mb-2 text-darkg">
              Email
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-darkg" />
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-darkg/30 focus:outline-none focus:ring-2 focus:ring-orang"
                placeholder="Enter your email"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="age" className="block mb-2 text-darkg">
              Age
            </label>
            <div className="relative">
              <input
                type="number"
                id="age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="w-full pl-5 pr-4 py-2 rounded-lg border border-darkg/30 focus:outline-none focus:ring-2 focus:ring-orang"
                placeholder="Enter your age"
                min="6"
                max="18"
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
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-darkg/30 focus:outline-none focus:ring-2 focus:ring-orang"
                placeholder="Create a password"
                minLength="6"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="confirm-password" className="block mb-2 text-darkg">
              Confirm Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-darkg" />
              <input
                type="password"
                id="confirm-password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-darkg/30 focus:outline-none focus:ring-2 focus:ring-orang"
                placeholder="Confirm your password"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-orang/60 text-white py-2 rounded-lg hover:bg-orang transition duration-300"
          >
            Register
          </button>
        </form>

        <div className="text-center mt-4">
          <p className="text-darkg ">
            Already have an account? {' '}
            <Link to="/login" className="text-orang hover:underline px-2">
              Login here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;