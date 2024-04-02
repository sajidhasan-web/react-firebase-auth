import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {

const {signInUser, signInByGoogle} = useContext(AuthContext)
const navigate = useNavigate()
    
    const handleLogin = e => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);



      signInUser(email, password)
      .then(result =>{
        console.log(result.user)
        e.target.reset()
        navigate('/')
      })
      .catch(error => console.error(error))

    }



   const handleGoogleLogin = () =>{
    signInByGoogle()
    .then(result => console.log(result.user))
    .catch(error => console.error(error))
     navigate('/')
   }


  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col ">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Login here!</h1>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="Login" />
            </div>
          </form>
          <p className="pl-4">New here? please<Link to={"/register"}><button className="btn btn-link">Register</button></Link></p>
         <div className="pb-5 flex justify-center">
            <button onClick={handleGoogleLogin} className="btn btn-ghost ">Google</button>
         </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
