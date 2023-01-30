import { useNavigate } from "react-router-dom";
import Assets from "../../../imports/assets.imports";
import "./navbar.screen.scss";

const Navbar = () => {
  const navbar_content: any = [
    {
      name: "Home",
      route: "/home",
    },
    {
      name: "Shop",
      route: "/shop",
    },
    {
      name: "Blog",
      route: "/Blog",
    },
    {
      name: "About",
      route: "/About",
    },
    {
      name: "Contact",
      route: "/About",
    },
  ];
  const navigate: any = useNavigate();
  return (
    <header>
      <div className="navbar_container">
        <nav>
          <div className="navbar">
            <div className="logo">
              <img src={Assets.logo} alt="" />
            </div>
            <div className="navbar_list">
              {navbar_content.map((item: any, index: number) => (
                <div
                  onClick={() => {
                    navigate(item.route);
                  }}
                  className="navbar_content"
                  key={index}
                >
                  {item.name}
                </div>
              ))}
              <div className="cart_icon " onClick={() => {
                    navigate("/cart");
                  }} >
                <img src={Assets.cart} alt="cart" />
                <div className="cart_value">3</div>
              </div>
              {/* <div className="profile_img navbar_content">
                    <img src="" alt="" />
                </div> */}
              <div
                onClick={() => {
                  navigate("/login");
                }}
                className="login navbar_content"
              >
                Login
              </div>
              <div
                onClick={() => {
                  navigate("/signup");
                }}
                className="sign navbar_content"
              >
                Sign Up
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
