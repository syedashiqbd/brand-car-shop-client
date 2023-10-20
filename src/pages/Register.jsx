import Navbar from './Navbar';
import registerSVG from '../assets/register.svg';
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { authContext } from '../provider/AuthProvider';
import toast from 'react-hot-toast';
import { updateProfile } from 'firebase/auth';

const Register = () => {
  const { createUser } = useContext(authContext);
  const [registerError, setRegisterError] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photo, email, password);

    if (password.length < 6) {
      setRegisterError('Password should be at least 6 characters or longer');
      return;
    } else if (!/[A-Z]/.test(password)) {
      setRegisterError('You should at least 1 Uppercase');
      return;
    } else if (!/[!@#$%^&*()_+{}[\]:;<>,.?~\\-]/.test(password)) {
      setRegisterError('You should a special character');
      return;
    }

    createUser(name, photo, email, password)
      .then((result) => {
        console.log(result.user);
        setRegisterError('');
        toast.success('You have register successfully', {
          style: {
            background: '#FFB400',
            color: 'white',
          },
        });
        e.target.reset();
        updateProfile(result.user, {
          displayName: name,
          photoURL: photo,
        });
        window.location.reload();
      })
      .catch((err) =>
        toast.error(err.message, {
          style: {
            background: '#790e0e',
            color: 'white',
          },
        })
      );
  };
  return (
    <div>
      <Navbar></Navbar>
      <div className="lg:w-[1152px] w-[400px] mx-auto">
        <div className="lg:flex items-center justify-center mt-20 gap-10">
          <div className="text-center lg:text-left">
            <img className="w-[600px]" src={registerSVG} alt="" />
          </div>
          <div>
            <h1 className="text-5xl font-bold mb-8 text-center">
              Register Please!
            </h1>
            <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
              <form onSubmit={handleRegister} className="card-body ">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo</span>
                  </label>
                  <input
                    type="text"
                    name="photo"
                    placeholder="Enter photo URL"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
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
                    name="password"
                    placeholder="Enter your password"
                    className="input input-bordered"
                    required
                  />
                  {registerError && (
                    <p className="text-red-700 mt-4">{registerError}</p>
                  )}
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6 ">
                  <button className="btn bg-[#FFB400] text-white">
                    Register
                  </button>
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
    </div>
  );
};

export default Register;
