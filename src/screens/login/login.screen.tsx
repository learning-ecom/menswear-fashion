import { useSetState } from "../../utils/functions.utils";
import Assets from "../../imports/assets.imports";
import Input from "../../common_components/ui/input_field/input_field.ui";
import PrimaryButton from "../../common_components/ui/button/primary_Button.ui";
import "./login.screen.scss";
import { Model } from "../../imports/model.import";
import { Functions } from "../../utils/imports.utils";
import { useNavigate } from "react-router-dom";

const LoginScreen = () => {
  // state
  const [state, setState] = useSetState({
    email: "",
    password: "",
  });
const navigate:any =useNavigate();
  // userlogin
  const userLogin =async()=>{
    const body ={
      email: state.email,
      password: state.password
    }
    try {
      const res:any = await Model.user.userLogin(body)
      localStorage.setItem("id", res.data._id);
      localStorage.setItem("role", res.data.role);
      localStorage.setItem("token", res.token);
      if(Object.keys(res.data).length>0){
        navigate("/")
       }
      
      setState({ firstname: "", lastname: "", email: "", password: "" });
     } catch (error) {
       Functions.notiflixFailure(error);
     } finally {
       Functions.notiflixRemove();
     }
   };

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
        <form action="">
          <div className="login_input_field">
            <label className="login_input_field_label">Email</label>
            <Input
              onChange={(value: any) => setState({ email: value })}
              type={"email"}
              name={"email"}
              value={state.email}
              placeholder={"Enter the email"}
              fontSize={"18px"}
            />
            <label className="login_input_field_label">Password</label>
            <Input
              onChange={(value: any) => setState({ password: value })}
              type={"password"}
              name={"password"}
              value={state.password}
              placeholder={"Enter Password"}
              fontSize={"18px"}
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
              padding={"0.5rem"}
              onClick={userLogin}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginScreen;
