import { useSelector } from "react-redux";
import Searchbar from "../../../common_components/ui/search_bar/search_bar.ui";
import Assets from "../../../imports/assets.imports";
import "./footer.screen.scss";
const Footer = () => {
 const image_data= useSelector((state:any)=>state.image)
  return (
    <footer className="footer">
      <div className="followus_wrapper">
        <div className="followus_header">
          <div className="followus_title">Follow Our Instagram</div>
          <div className="followus_view">FOLLOW US @store</div>
        </div>
        <div className="followus_img">
          {image_data?.data[0]?.footer_img.map((item: any, index: number) => (
            <div className="image_slide" key={index}>
              <img src={item} alt="" width="100%" />
            </div>
          ))}
        </div>
      </div>
      <div className="footer_container">
        <div className="footer_wrapper">
          <div className="footer_panel">
            <div className="footer_header">HELP</div>
            <div className="footer_content">Shipping & Returns</div>
            <div className="footer_content">Track Your Order</div>
            <div className="footer_content">Store Finder</div>
            <div className="footer_content">FAQs</div>
          </div>
          <div className="footer_panel">
            <div className="footer_header">ABOUT</div>
            <div className="footer_content">About Us</div>
            <div className="footer_content">Contact Us</div>
            <div className="footer_content">Careers</div>
            <div className="footer_content">Become an Affiliate</div>
          </div>
          <div className="footer_panel">
            <div className="footer_header">CATEGORIES</div>
            <div className="footer_content">Shirts</div>
            <div className="footer_content">Jeans</div>
            <div className="footer_content">Footwear</div>
            <div className="footer_content">Accessories</div>
          </div>
          <div className="footer_comment_panel">
            <div className="footer_header">
              JOIN THE LIST AND RECEIVE 15% OFF YOUR FIRST ORDER
            </div>
            <Searchbar placeholder="Email..." />
            <div className="social_media">
              <img src={Assets.facebook} alt="" />
              <img src={Assets.instagram} alt="" />
              <img src={Assets.pinterest} alt="" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
