import Searchbar from '../../common_components/ui/search_bar/search_bar.ui'
import Assets from '../../imports/assets.imports'
import './footer.screen.scss'
const Footer = () => {
    const follow_data:any=[
    " https://res.cloudinary.com/denokpulg/image/upload/v1669886530/menswear/banner/1_6_usiuxf.jpg",
    "https://res.cloudinary.com/denokpulg/image/upload/v1669886524/menswear/banner/6_rhq4va.jpg",
    "https://res.cloudinary.com/denokpulg/image/upload/v1669886484/menswear/banner/5_2_flzxgu.jpg",
 "https://res.cloudinary.com/denokpulg/image/upload/v1669886482/menswear/banner/4_1_kjdl9k.jpg",
 "https://res.cloudinary.com/denokpulg/image/upload/v1669886480/menswear/banner/3_1_kulu1h.jpg",
 "https://res.cloudinary.com/denokpulg/image/upload/v1669886480/menswear/banner/2_1_ksnfie.jpg"
    ]
  return (
<section className="footer">
   
<div className="followus_wrapper">
        <div className="followus_header">
          <div className="followus_title">Follow Our Instagram</div>
          <div className="followus_view">FOLLOW US @store</div>
        </div>
        <div className="followus_img">
        {follow_data.map((item: any, index:number) => (
          <img src={follow_data[index]} alt="" width="100%" />
        ))}
      </div>
</div>
<div className="footer_container">
<div className="footer_wrapper">

  <div className="footer_panel">
    <div className="footer_header">
      HELP
    </div>
    <div className="footer_content">
      Shipping & Returns
    </div>
    <div className="footer_content">
    Track Your Order
    </div>
    <div className="footer_content">
    Store Finder
    </div>
    <div className="footer_content">
    FAQs
    </div>

  </div>
  <div className="footer_panel">
    <div className="footer_header">
    ABOUT
    </div>
    <div className="footer_content">
    About Us
    </div>
    <div className="footer_content">
    Contact Us
    </div>
    <div className="footer_content">
    Careers
    </div>
    <div className="footer_content">
    Become an Affiliate
    </div>

  </div>
  <div className="footer_panel">
    <div className="footer_header">
    CATEGORIES
    </div>
    <div className="footer_content">
    Shirts
    </div>
    <div className="footer_content">
    Jeans
    </div>
    <div className="footer_content">
    Footwear
    </div>
    <div className="footer_content">
    Accessories
    </div>
  </div>
    <div className="footer_comment_panel">
    <div className="footer_header">
    JOIN THE LIST AND RECEIVE 15% OFF YOUR FIRST ORDER
    </div>
   <Searchbar placeholder='Email...'/>
    <div className="social_media">
      <img src={Assets.facebook} alt="" />
      <img src={Assets.instagram} alt="" />
      <img src={Assets.pinterest} alt="" />
    </div>
    </div>
</div>
    </div>
</section>
   
    
  
  )
}

export default Footer
