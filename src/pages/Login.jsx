import { useState } from "react";
import  api  from "../api";
// import {useNavigate} from 'react-router-dom';


function Login() {
  const [formData, setFormData] = useState({
      email: '',
      password: ''
  });

  // const history = useHistory();
  // const navigate = useNavigate();


  const handleSubmit = async (e) => {
      e.preventDefault();
      try {
          const response = await api.post('api/account/login/', formData);
          if (response.status === 200) {
            const data = response.data;
            console.log(data);
            // Extract access and refresh tokens from the response JSON
            const { access, refresh } = data;


            // Store tokens in localStorage or sessionStorage for future use
            localStorage.setItem('access_token', access);
            localStorage.setItem('refresh_token', refresh);

            // Redirect to /home page
            // history.push('/home')
            window.location.href = "/home";
            
     
          } else if (response.status === 400) {
            const data = await response.data;
            console.log(data);
              // Handle invalid credentials or other login errors
          }
      } catch (error) {
        const data = error.response.data;
        console.log(data);
          // Handle unexpected errors
      }
  }

  const handleChange = (e) => {
      setFormData({
          ...formData,
          [e.target.name]: e.target.value
      });
  }
    

    return (
        <>
      <div className='min-h-screen flex items-center justify-center'>
        <div className='flex rounded-2xl shadow-lg px-4 md:px-0 lg:w-8/12'>
          {/* right side */}
          <div className='flex-1 p-12'>
            <h2 className='text-2xl font-medium pb-1 mt-5'>Welcome</h2>
            <h2 className='text-3xl font-bold'>Sign in into your account</h2>
            
            {/* form */}
            <form className='space-y-4 md:space-y-6 mt-8' onSubmit={handleSubmit}>
              <div>
                <label className='block mb-2 text-sm font-medium leading-6 text-grey-900 text-left' htmlFor="Email">Your Email</label>
                <input className='bg-gray-50 border border-gray-300 text-gray-900 w-full p-2.5 rounded-lg focus:ring-2 focus:ring-purple-600'
                type="email"
                placeholder='someone@ashesi.edu.gh'
                name='email'
                value={formData.email}
                onChange={handleChange} />
              </div>
                <div className='flex items-center justify-between'>
                <label className='block mb-2 text-sm font-medium leading-6 text-gray-900 text-left'>Password</label>
                    <input className='bg-gray-50 border border-gray-300 text-gray-900 w-full p-2.5 rounded-lg focus:ring-2 focus:ring-purple-600'
                    type="password"
                    placeholder='Password'
                    name="password"
                    value={formData.password}
                    onChange={handleChange} />
              </div>
              <div>
                <button className='bg-purple-600 hover:bg-purple-800 text-white font-semibold text-center w-full p-2.5 rounded-lg focus:ring-2 focus-ring-600 ring-inset' type='submit'>Sign In</button>
              </div>
            </form>



          </div>
          {/* left side */}
          <div className='flex-1 bg-purple-600 rounded-r-lg p-1 hidden lg:block'>
            <p className='text-2xl text-white font-bold mt-10'>Don't have an account? <br /> Please Sign up!</p>
            <button className='bg-white text-purple-600 font-semibold text-center w-1/2 p-2.5 rounded-full focus:ring-2 focus-ring-600 ring-inset mt-5' type='button'>Sign Up</button>
          </div>
        </div>
      </div>
    </>
    );
}

export default Login;