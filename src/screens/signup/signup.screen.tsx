import React from "react";
import "./signup.screen.scss";
import Assets from "../../imports/assets.imports";
import { useSetState } from "../../utils/function.utils";
import PrimaryButton from "../../common_components/ui/button/primary_Button.ui";
import Input from "../../common_components/ui/input_field/input_field.ui";

const SignUpScreen = () => {
  const [state, setState] = useSetState({
    name: "",
    lastname: "",
    email: "",
    password: "",
  });
  return (
    <div className="signup_container">
      <div className="signup_form">
        <h2>Register</h2>
        <div className="facebook_btn">
          <div className="fb_logo">
            <img src={Assets.fb_logo} alt="facebook" />
          </div>
          <button>CONTINUE WITH FACEBOOK</button>
        </div>
        <div className="google_btn">
          <div className="google_logo">
            <img src={Assets.google_logo} alt="Google" />
          </div>
          <button>CONTINUE WITH GOOGLE</button>
        </div>
        <div className="or">OR</div>
        <form typeof="submit">
          <Input
            onChange={(value: any) => setState({ name: value })}
            type={"text"}
            name={"name"}
            value={state.name}
            placeholder={"Name"}
            label={"Name"}
          />
          <Input
            onChange={(value: any) => setState({ lastname: value })}
            type={"text"}
            name={"lastname"}
            value={state.lastname}
            placeholder={"LastName"}
            label={"LastName"}
          />

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
          <div className="term">
            <span>
              <input type="radio" name="" id="" />
            </span>
            <span>I have read and accpet to Our Term and Pricacy Policy </span>
          </div>
          <PrimaryButton
            text={"CREATE AN ACCOUNT"}
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

export default SignUpScreen;
