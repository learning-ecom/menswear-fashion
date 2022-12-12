import React from "react";
import "./signup.screen.scss";
import Assets from "../../imports/assets.imports";

const SignUpScreen = () => {
  return (
    <div className="signup_container">
      <div className="signup_form">
        <h2>Register</h2>
        <div className="facebook_btn">
          <div className="fb_logo">
            <img src={Assets.fbLogo} alt="facebook" />
          </div>
          <button>CONTINUE WITH FACEBOOK</button>
        </div>
        <div className="google_btn">
          <div className="google_logo">
            <img src={Assets.GoogleLogo} alt="Google" />
          </div>
          <button>CONTINUE WITH GOOGLE</button>
        </div>
        <div className="or">OR</div>
        <form typeof="submit">
          <label>Name</label>
          <input type="text" name="" id="" placeholder="Name" />
          <label>LastName</label>
          <input type="text" name="" id="" placeholder="Lastname" />
          <label>Email</label>
          <input type="email" name="" id="" placeholder="Email" />
          <label>Password</label>
          <input type="password" name="" id="" placeholder="Password" />
          <div className="term">
            <span>
              <input type="radio" name="" id="" />
            </span>
            <span>I have read and accpet to Our Term and Pricacy Policy </span>
          </div>
          <button className="signup_btn">CREATE AN ACCOUNT</button>
        </form>
      </div>
    </div>
  );
};

export default SignUpScreen;
