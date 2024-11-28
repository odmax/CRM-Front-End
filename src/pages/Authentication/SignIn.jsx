import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import mainLogo from '../../images/logo/HsiehAI.png';
import googleIcon from '../../images/logo/google.png';
const SignIn = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.password) newErrors.password = 'Password is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      console.log('Form data:', formData);
      navigate('/dashboard');
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="min-h-screen relative w-full flex items-center justify-center bg-[#222225]">
      <div
        className="absolute top-4 right-4 xl:top-[30%] xl:right-[15%] w-96 rounded-full h-96 opacity-10 blur-2xl"
        style={{
          background: 'radial-gradient(circle, #f45959 0%, #222225 100%)',
        }}
      ></div>
      <div
        className="absolute bottom-2 left-10 xl:bottom-[15%] xl:left-[15%] w-96 rounded-full h-96 opacity-10 blur-2xl"
        style={{
          background: 'radial-gradient(circle, #f45959 0%, #222225 100%)',
        }}
      ></div>

      <div
        className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg my-10 mx-4 md:mx-auto rounded-2xl border-2 border-[#74696d] p-8 w-full max-w-md"
        style={{
          background: 'rgba(255, 255, 255, 0.01)',
          backdropFilter: 'blur(9px)',
          WebkitBackdropFilter: 'blur(9px)',
        }}
      >
        <div className="text-center mb-6">
          <img src={mainLogo} alt="Hsieh AI" className="mx-auto h-24 w-auto" />
          <h1 className="text-3xl font-semibold text-white">Hsieh AI</h1>
        </div>
        <button className="flex items-center w-full bg-transparent border border-[#74696d] gap-2 md:gap-4 text-white mb-4 rounded-2xl py-4 px-4">
          <img src={googleIcon} alt="Google" className="h-6 w-6" />
          Continue with Google
        </button>
        <div className="text-center text-white  flex justify-center items-center gap-4 mb-4">
          <div className=" bg-[#5c5859] h-[0.5px] flex-1"></div>
          <span>OR</span>
          <div className=" bg-[#5c5859] h-[0.5px] flex-1"></div>
        </div>
        <form className="space-y-4">
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 rounded-2xl py-4 px-6 bg-transparent border border-[#74696d] text-white placeholder-gray-400 focus:outline-none  outline-none"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>
          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-2 rounded-2xl py-4 px-6 bg-transparent border border-[#74696d] text-white placeholder-gray-400 focus:outline-none  outline-none"
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password}</p>
            )}
          </div>
          <div className="text-left text-red-500 mt-4">Forget Password?</div>
          <button
            type="submit"
            onClick={handleSubmit}
            className="w-full rounded-2xl py-4 px-4 bg-red-500 text-white hover:bg-red-600 transition"
            style={{ backgroundColor: '#f45959' }}
          >
            Login
          </button>
        </form>
        <div className="text-left text-white mt-4">
          Did not have an account?{' '}
          <Link to="/SignUp" className="text-red-500">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
