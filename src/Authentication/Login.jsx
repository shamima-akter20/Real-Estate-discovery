import Lottie from "lottie-react";
import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  LoadCanvasTemplate,
  loadCaptchaEnginge,
  validateCaptcha,
} from "react-simple-captcha";
import Swal from "sweetalert2";
import axiosPublic from "../config/axios.config";
import { AuthContext } from "./AuthProvider";
import login from "./login.json";

const Login = () => {
 
  const [loginError, setLoginError] = useState('');
  const [disabled, setDisabled] = useState(true);
  const { signIn,googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  //google signin
  const handleGooglelogIn = () => {
    googleSignIn().then((result) => {
      const loggedUser = result.user;
      //nevigate after login
      const userInfo = {
        name: loggedUser?.displayName,
        email: loggedUser?.email,
        photoURL: loggedUser?.photoURL,
        role: "user",
        status: "varified",
      };

      axiosPublic.post("/users", userInfo).then((res) => {
        console.log(res.data);
       
        navigate(from, { replace: true });
        Swal.fire(
          "Logged In!",
          "You logged in successfully with Google!",
          "success"
        );
      });
    });
  };
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    //set login error
    setLoginError('');

    //login
    signIn(email, password)
    .then((result) => {
      const user = result.user;
      console.log(user);
      Swal.fire({
        title: "Login Successfully",
        showClass: {
          popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `
        },
        hideClass: {
          popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `
        }
      });
      navigate(from, { replace: true });
    }) .catch(error =>{
      console.error(error);
      setLoginError(error.message)
    })

  };

  const handleValidateRecapcha = (e) => {
    const user_captcha_value = e.target.value;
    if (validateCaptcha(user_captcha_value)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  return (
    <div
      className=" min-h-screen "
      style={{
        backgroundImage: "url(https://i.ibb.co/dgw6KBn/teal-log.jpg)",
      }}
    >
      <div className="hero-overlay bg-white bg-opacity-80  min-h-screen ">
        <h1 className="pt-16 mb-10 text-3xl md:text-5xl font-display 
        text-center text-teal-600">
          Login
        </h1>
      

      <div className="">
        <div className="flex flex-col-reverse lg:flex-row-reverse">

          <div className="flex-1 items-center lg:mt-36 xl:mt-0 justify-center  px-4 md:px-12">
            <Lottie animationData={login} loop={true} />;
          </div>

         <div className="flex-1 justify-center px-4 md:px-12">
         <div className="  bg-teal-200 bg-opacity-60">
            <form className="px-12 pt-10 pb-4" onSubmit={handleLogin}>
              {/* -------- email -------- */}
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
              {/* -------- password -------- */}
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
                {/* <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label> */}
              </div>
              {/* ----- recapcha ------ */}
              <div className="form-control">
                <label className="label">
                  <LoadCanvasTemplate />
                </label>
                <input  onBlur={handleValidateRecapcha}
                  type="text"
                 
                  name="captcha"
                  placeholder="Type the text above"
                  className="input input-bordered"
                  required
                />
               
              </div>

              <div className="form-control mt-6">
                <button disabled={disabled}
                  className="btn btn-accent"
                >
                  Login
                </button>
              </div>
            </form>
            <div className="text-center pb-2">
              {
                loginError && <p className="text-base text-red-600 font-bold">
                  Incorrect Email or Password </p>
              }
             </div>

            <div className="flex pb-6 justify-center">  
              <button 
              onClick={handleGooglelogIn}
               className="btn btn-ghost font-bold ">
              <img className="h-8" src="https://i.ibb.co/tJMpW3j/icons8-google-48.png" alt="" />
               Google Login 
             </button>
            </div> 

            <p className="text-center pb-6">
              New here? Create an
              <Link to="/signin" className="font-bold">
                {" "}
                account{" "}
              </Link>
            </p>

          </div>
         </div>
        </div>
      </div>
</div>

    </div>
  );
};

export default Login;
