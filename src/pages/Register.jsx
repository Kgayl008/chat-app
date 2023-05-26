import React from "react";
import { Link } from "react-router-dom";


function Register() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">
            Join the Chat Community and Connect with Friends Worldwide!
          </h1>
          <p className="py-6">
            Sign up now to become part of our vibrant chat community, where you
            can connect with friends, family, and loved ones from around the
            world. Experience the power of seamless communication and stay
            connected like never before.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <h1 className="text-center text-4xl font-bold">Register</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="Email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="Password"
                className="input input-bordered"
              />
              <label className="label"></label>
            </div>
            <input
              type="file"
              className="file-input file-input-bordered file-input-primary w-full max-w-xs"
            />
            <div className="form-control mt-6">
              <button className="btn btn-primary">SIGN UP</button>
            </div>
            <p className="text-center">Already have an account? 
            <Link to="/login" className="font-bold"> Login</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
