import Lottie from "lottie-react";
import { useContext, useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
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

const SignIn = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const [loginError, setLoginError] = useState("");
  const { createUser, updateUserProfile, googleSignIn } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  //google signup
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
        reset();
        navigate(from, { replace: true });
        Swal.fire(
          "Logged In!",
          "You logged in successfully with Google!",
          "success"
        );
      });
    });
  };

  const onSubmit = (data) => {
    createUser(data.email, data.password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        updateUserProfile(data.name, data.photoURL).then(() => {
          const userInfo = {
            name: loggedUser?.displayName,
            email: loggedUser?.email,
            photoURL: loggedUser?.photoURL,
            role: "user",
            status: "varified",
          };

          console.log(userInfo);

          axiosPublic.post("/users", userInfo).then((res) => {
            console.log(res.data);
            reset();
            Swal.fire({
              title: "Good job!",
              text: "User created successfully",
              icon: "success",
            });
            navigate("/");
          });
        });
      })
      .catch((error) => {
        console.error(error);
        setLoginError(error.message);
      });
  };

  console.log(watch("example"));

  const captchaRef = useRef(null);
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

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
        <h1
          className="pt-16 mb-10 text-3xl md:text-5xl font-display 
        text-center text-teal-600"
        >
          Sign Up
        </h1>

        <div className="">
          <div className="flex flex-col-reverse lg:flex-row-reverse pb-6">
            <div className="flex-1 items-center lg:mt-36 xl:mt-0 justify-center  px-4 md:px-12">
              <Lottie animationData={login} loop={true} />;
            </div>

            <div className="flex-1 justify-center px-4 md:px-12">
              <div className="  bg-teal-200 bg-opacity-60">
                <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                  {/* -------- name -------- */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Name</span>
                    </label>
                    <input
                      type="text"
                      {...register("name", { required: true })}
                      name="name"
                      placeholder="Name"
                      className="input input-bordered"
                    />
                    {errors.name && (
                      <span className="text-red-600">Name is required</span>
                    )}
                  </div>

                  {/* -------- Photo URL -------- */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Photo</span>
                    </label>
                    <input
                      type="text"
                      {...register("url", { required: true })}
                      placeholder="Photo URL"
                      className="input input-bordered"
                    />
                    {errors.url && (
                      <span className="text-red-600">Photo is required</span>
                    )}
                  </div>

                  {/* -------- email -------- */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="email"
                      {...register("email", { required: true })}
                      placeholder="email"
                      className="input input-bordered"
                    />
                    {errors.email && (
                      <span className="text-red-600">Email is required</span>
                    )}
                  </div>

                  {/* -------- password -------- */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                    <input
                      type="password"
                      {...register("password", {
                        required: true,
                        minLength: 6,
                        // maxLength:20,
                        pattern:
                          /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/,
                      })}
                      placeholder="password"
                      className="input input-bordered"
                    />
                    {errors.password?.type === "required" && (
                      <p className="text-red-600">Password is required</p>
                    )}
                    {errors.password?.type === "minLength" && (
                      <p className="text-red-600">
                        Password must be 6 characters
                      </p>
                    )}
                    {/* {errors.password?.type ==='maxLength' && 
                <p className='text-red-600'>Password must be less than 20 characters</p>} */}
                    {errors.password?.type === "pattern" && (
                      <p className="text-red-600">
                        Password must have one upper case, one lower case one
                        special character, one number{" "}
                      </p>
                    )}
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
                    <button disabled={disabled} className="btn btn-primary">
                      Sign Up
                    </button>
                  </div>
                </form>

                <div className="text-center pb-2">
                  {loginError && (
                    <p className="text-base text-red-600 font-bold">
                      Already Used Email or Password{" "}
                    </p>
                  )}
                </div>

                <div className="flex pb-4 justify-center">
                  <button
                    onClick={handleGooglelogIn}
                    className="btn btn-ghost font-bold "
                  >
                    <img
                      className="h-8"
                      src="https://i.ibb.co/tJMpW3j/icons8-google-48.png"
                      alt=""
                    />
                    Google Sign Up
                  </button>
                </div>

                <p className="text-center pb-6">
                  Already have an account?
                  <Link to="/login" className="font-bold">
                    {" "}
                    Login{" "}
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

export default SignIn;
