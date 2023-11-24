import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { LoadCanvasTemplate, loadCaptchaEnginge, validateCaptcha } from 'react-simple-captcha';

const SignIn = () => {
    const captchaRef = useRef(null)
    const [disabled, setDisabled] = useState(true);

    useEffect(() =>{
        loadCaptchaEnginge(6); 
    }, [])



    const handleSignIn = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);
        // signIn(email, password)
        //    .then(result => {
        //     const user = result.user;
        //     console.log(user);
        //    })
    }

    const handleValidateRecapcha = () => {
        const user_captcha_value = captchaRef.current.value;
        if(validateCaptcha(user_captcha_value)){
           setDisabled(false)
        }else{
           setDisabled(true)
        }
     }
 

    return (
        <div>
        <div className="flex">
          <div className="flex-1"> <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit minima repellendus commodi saepe laudantium, quos sed nihil nam debitis ipsum alias neque excepturi exercitationem adipisci voluptates vero corrupti ipsam, sint consectetur nostrum sunt ea? Temporibus omnis in labore quos repellat quasi commodi at, odit provident enim neque doloribus, iste ipsum maiores! Quasi sit expedita vel inventore ullam deserunt, saepe culpa ad suscipit nemo quibusdam maxime ipsa sunt tempora, possimus omnis necessitatibus ducimus nostrum at nulla mollitia, amet numquam vero hic! Quis mollitia accusantium voluptate, fugiat, illo ad iste beatae praesentium doloremque nobis suscipit vitae natus a amet voluptas, ducimus at!</h1></div>
          <div className="flex-1">
            <form className="card-body" onSubmit={handleSignIn} >
                {/* -------- name -------- */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text" name="name"
                  placeholder="Name"
                  className="input input-bordered"
                  required
                />
              </div>

              {/* -------- email -------- */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email" name="email"
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
                  type="password"  name="password"
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
                  type="text" ref={captchaRef}  name="captcha"
                  placeholder="Type the text above"
                  className="input input-bordered"
                  required
                />
                <button  onClick={handleValidateRecapcha}
                   className='btn btn-xs btn-outline mt-2'>
                   Validate
                </button>
              </div>
  
              <div className="form-control mt-6">
              <button disabled={disabled}
                className="btn btn-primary">Login</button>
              </div>
            </form>

            <p>
              Already have an account? 
              <Link to="/login"
              className='font-bold'> Login </Link> 
            </p>
          </div>
        </div>
      </div>
    );
};

export default SignIn;