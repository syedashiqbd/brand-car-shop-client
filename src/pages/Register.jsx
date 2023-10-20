import Navbar from './Navbar';
import loginSVG from '../assets/login.svg';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className="lg:w-[1152px] w-[400px] mx-auto">
      <Navbar></Navbar>

      <div className="lg:flex items-center justify-center mt-20 gap-10">
        <div className="text-center lg:text-left">
          <img className="w-[500px]" src={loginSVG} alt="" />
        </div>
        <div>
          <h1 className="text-5xl font-bold mb-8 text-center">
            Register Please!
          </h1>
          <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
            <form className="card-body ">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
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
                  placeholder="Enter your password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6 ">
                <button className="btn bg-[#FFB400] text-white">Login</button>
              </div>
              <p className=" label-text-alt text-center ">
                Already have account? Please{' '}
                <Link to="/login" className="link-hover font-semibold">
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
