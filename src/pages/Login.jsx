import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Login = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/")
    } catch (err) {
      setErr(true);
    }
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <form className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100" onSubmit={handleSubmit}>
          <div className="card-body">
            <h1 className="text-center text-4xl font-bold">Login</h1>
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
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
              {err && <span>Something went wrong</span>}
            </div>
            <p className="text-center">Need an account? 
            <Link to="/" className="font-bold"> Sign Up</Link></p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login