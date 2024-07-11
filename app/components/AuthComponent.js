"use client"
import { useState } from 'react';
import { useRouter } from "next/navigation";

const AuthComponent = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email,setEmail]= useState("");
  const [password,setPassword]= useState('');
  const [error,setError]= useState('');

  const router = useRouter();


  const handleSubmit = async (e)=>{
    e.preventDefault();

    if (!email || !password) {
      setError("All fields are necessary.");
      return;
    }
    try {

      const resUserExists = await fetch("api/userExists", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const { user } = await resUserExists.json();

      if (user) {
        setError("User already exists.");
        return;
      }

      const res = await fetch("api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (res.ok) {
        const form = e.target;
        form.reset();
      } else {
        console.log("User registration failed.");
      }
    } catch (error) {
      console.log("Error during registration: ", error);
    }
  };



  return (
    <div className="flex justify-center items-center h-screen ">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <div className="flex justify-between mb-4 text-black">
          <button
            className={`px-4 py-2 ${isLogin ? 'text-blue-600 border-b-2 border-blue-600' : ''}`}
            onClick={() => setIsLogin(true)}
          >
            Sign In
          </button>
          <button
            className={`px-4 py-2 ${!isLogin ? 'text-blue-600 border-b-2 border-blue-600' : ''}`}
            onClick={() => setIsLogin(false)}
          >
            SignUp
          </button>
        </div>
        {isLogin ? (
          <div>
            <h2 className="text-xs font-light mb-4 text-[#8a8a8a]">SIGN IN, WE ARE WAITING FOR YOU</h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  className="w-full px-3 py-2 border rounded-lg text-black"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Password</label>
                <input
                  type="password"
                  className="w-full px-3 py-2 border rounded-lg text-black"
                  placeholder="Enter your password"
                />
              </div>
              <div className="mb-4"> 
               
              </div>
              <button className="w-full bg-blue-600 text-white py-2 rounded-lg">Log In</button>
              { error &&(
              <div className='bg-[#be3232] p-2 text-[0.9rem] my-2 rounded-md w-fit'>
              {error}
              </div>
               )}
             
            </form>
            <p className="text-blue-600 mt-4 text-center cursor-pointer">Forgot your password?</p>
          </div>
        ) : (
          <div>
            <h2 className="text-xs font-light mb-4 text-[#8a8a8a]">Register</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700">Email</label>
                <input
                  onChange={(e) => setEmail(e.target.value)} 
                  type="text"
                  className="w-full px-3 py-2 border rounded-lg text-black"
                  placeholder="Enter your email"
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-700">Password</label>
                <input
                 onChange={(e) => setPassword(e.target.value)} 
                  type="password"
                  className="w-full px-3 py-2 border rounded-lg text-black"
                  placeholder="Enter your password"
                />
              </div>
              <button className="w-full bg-blue-600 text-white py-2 rounded-lg">Register</button>
              { error &&(
              <div className='bg-[#be3232] p-2 text-[0.9rem] my-2 rounded-md w-fit'>
              {error}
              </div>
               )}
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthComponent;
