import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const SignUp = () => {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/register', {email, password})
    .then (result => {console.log(result)
    navigate('/login')
    })
    .catch (error => console.log(error))
  }

  return (
    <div className="flex justify-center items-center h-screen ">
      <div className="bg-white p-6 rounded-md w-[500px]">
        <h2 className="text-xl font-bold mb-4">Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-1">Email</label>
            <input
              type="text"
              placeholder="Enter Email"
              autoComplete="off"
              name="email"
              className="w-full p-2 border border-gray-300 rounded"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block mb-1">Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              autoComplete="off"
              name="password"
              className="w-full p-2 border border-gray-300 rounded"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300">Register</button>
          <p className="mt-2 text-center">Already have an account?</p>
          <Link to="/login" className="block w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300 text-center text-sm font-semibold mt-2">
            Login Here
          </Link>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
