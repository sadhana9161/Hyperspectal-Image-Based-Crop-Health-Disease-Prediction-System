import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <>
     <div className="row">
      <div className="col-sm-3"></div>
      <div className="col-sm-6 mt-5">
        <div className="row">
          <div className="col-12 mt-5">
           <div className="min-h-screen flex items-center justify-center bg-slate-100">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
               <div className="text-center mb-8">
                <div className="text-4xl mb-2 pt-3 fs-2">🌱</div>
                <h1 className="text-2xl font-bold text-slate-800">Crop<b style={{color:'red'}}>Prediction</b></h1>
                 <p className="text-slate-500 mb-4">Hyperspectral Crop Health Prediction</p>
               </div>
               <form className='px-4 pb-3'>
                <input type="email" placeholder=' Emter email' className='form-control mb-3 '/>
                <input type="password" placeholder='Enter password' className='form-control mb-3' />
                <Link to='/forgot-password' className="text-sm text-green-600 ">
                Forgot Password
                </Link> <br />
                <button type='submit' className='btn btn-success mt-3 text-light w-100'>Login</button>
               </form>
               <p className="text-center mt-6 text-sm text-slate-500 py-3">
                Don't have an account?{" "}
                <Link to="/register" className="text-green-600 font-semibold">
                Register
                </Link>
               </p>
            </div>
           </div>
          </div>
        </div>
      </div>
      <div className="col-sm-3"></div>
     </div>
    </>
  )
}

export default Login
