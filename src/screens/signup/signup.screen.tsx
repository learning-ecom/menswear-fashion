import "./signup.screen.scss";
import Assets from "../../imports/assets.imports";
import { useSetState } from "../../utils/functions.utils";
import PrimaryButton from "../../common_components/ui/button/primary_Button.ui";
import Input from "../../common_components/ui/input_field/input_field.ui";
import { Model } from "../../imports/model.import";
import { Functions } from "../../utils/imports.utils";
import { useEffect } from "react";

const SignUpScreen = () => {
  const role:any=localStorage.getItem('role')


  const [state, setState] = useSetState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    cpassword: "",
    signupData:{}
  });

  const handleSignup = async () => {
    Functions.notiflixLoader();
    try {
      const body = {
        first_name: state.firstname,
        last_name: state.lastname,
        email: state.email,
        password: state.password,
      };
      let res: any = await Model.user.UserSignup(body); 
      localStorage.setItem("id", res.data._id);
      localStorage.setItem("role", res.data.role);
      localStorage.setItem("token", res.token);
      setState({ firstname: "", lastname: "", email: "", password: "",signupData:res.data });
    
      
    } catch (error) {
      Functions.notiflixFailure(error);
    } finally {
      Functions.notiflixRemove();
    }
  };

  useEffect(()=>{
    if (role) {
      if (role === "admin") {
        window.location.href="/admin/dashboard"
      } else if (role === "user") {
        window.location.href='/home'
      }
    }
  },[role])
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
            onChange={(value: any) => setState({ firstname: value })}
            type={"text"}
            name={"name"}
            value={state.firstname}
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
            onClick={handleSignup}
          />
        </form>
      </div>
    </div>
  );
};

export default SignUpScreen;
