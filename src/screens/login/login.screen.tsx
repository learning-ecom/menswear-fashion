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
        <div className="login_title">Login</div>
        <div className="google_facebook_btn">
          <PrimaryButton
            icon={Assets.fb_logo}
            text={"CONTINUE WITH FACEBOOK"}
            backgroundColor={"#4267B2"}
            fontFamily={"jost"}
            fontSize={"14px"}
            fontWeight={600}
          />
          <PrimaryButton
            icon={Assets.google_logo}
            text={"CONTINUE WITH GOOGLE"}
            backgroundColor={"#ffffff"}
            style={{ borderRadius: "0px", border: "#efefef 2px solid" }}
            fontFamily={"jost"}
            fontSize={"14px"}
            fontWeight={600}
            color={"#000000"}
          />
        </div>
        <div className="or">OR</div>
        <div className="login_input_field">
          <Input
            onChange={(value: any) => setState({ email: value })}
            type={"email"}
            name={"email"}
            value={state.email}
            placeholder={"Enter the email"}
            label={"E-mail"}
            fontFamily={"jost"}
            fontSize={"16px"}
            fontWeight={500}
          />

          <Input
            onChange={(value: any) => setState({ password: value })}
            type={"password"}
            name={"password"}
            value={state.password}
            placeholder={"Enter Password"}
            label={"Password"}
            fontFamily={"jost"}
            fontSize={"16px"}
            fontWeight={500}
          />
        </div>
        <div className="forget_pwd">Forget Password</div>
        <div className="login_btn">

        <PrimaryButton
          text={"LOG IN"}
          backgroundColor={"#000000"}
          style={{ borderRadius: "0px" }}
          fontFamily={"Jost"}
          fontSize={"14px"}
          fontWeight={500}
          letterSpacing={"2px"}
        />
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
