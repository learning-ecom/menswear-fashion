import React from "react";
import { useSetState } from "../../utils/function.utils";
import Assets from "../../imports/assets.imports";
import Input from "../../common_components/ui/input_field/input_field.ui";
import PrimaryButton from "../../common_components/ui/button/primary_Button.ui";
import "./login.screen.scss";

const LoginScreen = () => {
  const [state, setState] = useSetState({
    email: "",
    password: "",
  });
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
          <Input
            onChange={(value: any) => setState({ email: value })}
            type={"email"}
            name={"email"}
            value={state.email}
            placeholder={"Email"}
            label={"Email"}
          />

          <Input
            onChange={(value: any) => setState({ password: value })}
            type={"password"}
            name={"password"}
            value={state.password}
            placeholder={"Password"}
            label={"Password"}
          />
          <div className="form_footer">
            <div className="remember">
              <input type="radio" name="" id="" />
              Remember me
            </div>
            <div className="forgetpwd">Forget Password</div>
          </div>
          <PrimaryButton
            text={"LOG IN"}
            backgroundColor={"#000000"}
            style={{ borderRadius: "0px" }}
            fontFamily={"Jost"}
            fontSize={"14px"}
            fontWeight={500}
            letterSpacing={"2px"}
            padding={"0.5rem"}
          />
        </form>
      </div>
    </div>
  );
};

export default LoginScreen;
