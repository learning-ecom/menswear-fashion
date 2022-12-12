import React from "react";
import Assets from "../../imports/assets.imports";
import "./login.screen.scss";

const loginScreen = () => {
  return (
    <div className="login_container">
      <div className="login_form">
        <h2>Login</h2>
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
          <label>Email</label>
          <input type="email" name="" id="" placeholder="Email" />
          <label>Password</label>
          <input type="password" name="" id="" placeholder="Password" />
          <div className="form_footer">
            <div className="remember">
              <input type="radio" name="" id="" />
              Remember me
            </div>
            <div className="forgetpwd">Forget Password</div>
          </div>
          <button className="login_btn">LOGIN</button>
        </form>
      </div>
    </div>
  );
};

export default loginScreen;
