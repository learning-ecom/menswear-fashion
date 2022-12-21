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
    cpassword: "",
  });
  return (
    <div className="signup_container">
      <div className="signup_form">
        <h2 className="signup_title">Register</h2>
        <div className="google_facebook_btn">
          <PrimaryButton
            icon={Assets.fb_logo}
            text={"CONTINUE WITH FACEBOOK"}
            backgroundColor={"#4267B2"}
            fontFamily={"jost"}
            fontSize={"14px"}
            fontWeight={500}
            padding={"12px 20px"}
          />
          <PrimaryButton
            icon={Assets.google_logo}
            text={"CONTINUE WITH GOOGLE"}
            backgroundColor={"#ffffff"}
            style={{ borderRadius: "0px", border: "#efefef 2px solid" }}
            fontFamily={"jost"}
            fontSize={"14px"}
            fontWeight={500}
            color={"#000000"}
            padding={"12px 20px"}
          />
        </div>
        <div className="or">OR</div>
        <form typeof="submit" className="signup__form">
          <label className="signup_input_field_label">Name</label>
          <Input
            onChange={(value: any) => setState({ name: value })}
            type={"text"}
            name={"name"}
            value={state.name}
            placeholder={"Name"}
            fontSize={"16px"}
          />
          <label className="signup_input_field_label">LastName</label>
          <Input
            onChange={(value: any) => setState({ lastname: value })}
            type={"text"}
            name={"lastname"}
            value={state.lastname}
            placeholder={"LastName"}
            fontSize={"16px"}
          />
          <label className="signup_input_field_label">Email</label>
          <Input
            onChange={(value: any) => setState({ email: value })}
            type={"email"}
            name={"email"}
            value={state.email}
            placeholder={"Email"}
            fontSize={"16px"}
          />
          <label className="signup_input_field_label">Password</label>
          <Input
            onChange={(value: any) => setState({ password: value })}
            type={"password"}
            name={"password"}
            value={state.password}
            placeholder={"Password"}
            fontSize={"16px"}
          />
          <label className="signup_input_field_label">Confirm-Password</label>
          <Input
            onChange={(value: any) => setState({ cpassword: value })}
            type={"password"}
            name={"cpassword"}
            value={state.cpassword}
            placeholder={"Confirm password"}
            fontSize={"16px"}
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
