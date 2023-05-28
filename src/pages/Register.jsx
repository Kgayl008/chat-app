import { useNavigate, Link } from "react-router-dom";
import React, { useState }from 'react';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";


function Register() {
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];
  
    try {
      // Create user
      const res = await createUserWithEmailAndPassword(auth, email, password);
  
      // Create a unique image name
      const date = new Date().getTime();
      const storageRef = ref(storage, `${displayName + date}`);
  
      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            // Update profile
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
  
            // Create user on Firestore
            // const userDocRef = doc(db, "users", res.user.uid);
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });
  
            // Create empty user chats on Firestore
            const userChatsDocRef = doc(db, "userChats", res.user.uid);
            await setDoc(userChatsDocRef, {});
  
            navigate("/");
          } catch (err) {
            console.log(err);
            setErr(true);
            setLoading(false);
          }
        });
      });
    } catch (err) {
      setErr(true);
      setLoading(false);
    }
  };  
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">
            <span className="text-secondary-focus">Join</span> the{" "}
            <span className="text-primary-focus">Chat</span> Community and{" "}
            <span className="text-primary-focus">Connect</span> with Friends{" "}
            <span className="text-secondary-focus">Worldwide!</span>
          </h1>
          <p className="py-6">
            Sign up now to become part of our vibrant chat community, where you
            can connect with friends, family, and loved ones from around the
            world. Experience the power of seamless communication and stay
            connected like never before.
          </p>
        </div>
        <form
          className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"
          onSubmit={handleSubmit}
        >
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
                type="password"
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
              <button className="btn btn-primary" type="submit">
                SIGN UP
              </button>
              {loading && "Uploading and compressing the image please wait..."}
          {err && <span>Something went wrong</span>}
            </div>
            <p className="text-center">
              Already have an account?
              <Link to="/login" className="font-bold">
                {" "}
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
