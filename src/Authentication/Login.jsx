import Lottie from "lottie-react";
import { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  LoadCanvasTemplate,
  loadCaptchaEnginge,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "./AuthProvider";
import login from "./login.json";

const Login = () => {
  const captchaRef = useRef(null);
  const [disabled, setDisabled] = useState(true);

  const { signIn } = useContext(AuthContext);

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password).then((result) => {
      const user = result.user;
      console.log(user);
    });
  };

  const handleValidateRecapcha = () => {
    const user_captcha_value = captchaRef.current.value;
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
            <form className="card-body" onSubmit={handleLogin}>
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
                <input
                  type="text"
                  ref={captchaRef}
                  name="captcha"
                  placeholder="Type the text above"
                  className="input input-bordered"
                  required
                />
                <button
                  onClick={handleValidateRecapcha}
                  className="btn btn-xs btn-outline mt-2"
                >
                  Validate
                </button>
              </div>

              <div className="form-control mt-6">
                <button disabled={disabled}
                  className="btn btn-accent"
                >
                  Login
                </button>
              </div>
            </form>

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
