import { useState } from "react";
import "./home.screen.scss";
import { Splide, SplideSlide } from "@splidejs/react-splide";

// Default theme
import "@splidejs/react-splide/css";

// or other themes
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";

// or only core styles
import "@splidejs/react-splide/css/core";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slide_data = [
    "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://res.cloudinary.com/denokpulg/image/upload/v1669807658/menswear/banner/Slider_vzxire.jpg",
  ];
  const data = [
    "https://res.cloudinary.com/denokpulg/image/upload/v1669807883/menswear/banner/1_1_thbjfl.jpg",
    "https://res.cloudinary.com/denokpulg/image/upload/v1669807832/menswear/banner/2_1_ovgtzy.jpg",
    "https://res.cloudinary.com/denokpulg/image/upload/v1669807830/menswear/banner/3_mpah5w.jpg",
  ];
  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 3 : (prev) => prev - 1);
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 3 ? 0 : (prev) => prev + 1);
  };
  return (
    <section className="home_container">
      <div className="slidebar_container">
        <div
          className="banner"
          style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
        >
          {slide_data.map((item: any, index) => (
            <img src={slide_data[index]} alt="" width="100%" />
          ))}
        </div>
        <div className="icons">
          <div className="icon" onClick={prevSlide}>
            1
          </div>
          <div className="icon" onClick={nextSlide}>
            2
          </div>
        </div>
      </div>

      <div className="banner_img">
        {data.map((item: any, index) => (
          <img src={data[index]} alt="" width="100%" />
        ))}
      </div>
      <div className="best_seller">
        <div className="best_seller_header">
          <div className="best_seller_title">Best Seller</div>
          <div className="best_seller_view">View All</div>
        </div>
        <div className="best_seller_list">
          <Splide
            options={{
              type: "loop",
              drag: "free",
              focus: "center",
              fixedWidth: "270px",
              autoplay: true,
              perPage: 5,
              autoScroll: {
                speed: 10,
              },
              autoStart: true,
            }}
            aria-label="Testmonials"
          >
            <SplideSlide>
              <div className="best_seller_card">
                <img
                  src="https://res.cloudinary.com/denokpulg/image/upload/v1669808291/menswear/card/Img_vdka54.jpg"
                  alt=""
                />
                <div className="best_seller_content">
                  Under Armour Training stretch woven half zip jacket in white
                </div>
                <div className="best_seller_footer">$222</div>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="best_seller_card">
                <img
                  src="https://res.cloudinary.com/denokpulg/image/upload/v1669808291/menswear/card/Img_vdka54.jpg"
                  alt=""
                />
                <div className="best_seller_content">
                  Under Armour Training stretch woven half zip jacket in white
                </div>
                <div className="best_seller_footer">$222</div>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="best_seller_card">
                <img
                  src="https://res.cloudinary.com/denokpulg/image/upload/v1669808291/menswear/card/Img_vdka54.jpg"
                  alt=""
                />
                <div className="best_seller_content">
                  Under Armour Training stretch woven half zip jacket in white
                </div>
                <div className="best_seller_footer">$222</div>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="best_seller_card">
                <img
                  src="https://res.cloudinary.com/denokpulg/image/upload/v1669808291/menswear/card/Img_vdka54.jpg"
                  alt=""
                />
                <div className="best_seller_content">
                  Under Armour Training stretch woven half zip jacket in white
                </div>
                <div className="best_seller_footer">$222</div>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="best_seller_card">
                <img
                  src="https://res.cloudinary.com/denokpulg/image/upload/v1669808291/menswear/card/Img_vdka54.jpg"
                  alt=""
                />
                <div className="best_seller_content">
                  Under Armour Training stretch woven half zip jacket in white
                </div>
                <div className="best_seller_footer">$222</div>
              </div>
            </SplideSlide>
          </Splide>
        </div>
      </div>
      <div className="sales_banner">
        <img
          src="https://res.cloudinary.com/denokpulg/image/upload/v1669807983/menswear/banner/1_2_lxq9ul.jpg"
          alt=""
        />
        <div className="banners">
          <img
            src="https://res.cloudinary.com/denokpulg/image/upload/v1669808017/menswear/banner/2_2_hbgyq6.jpg"
            alt=""
          />
          <img
            src="https://res.cloudinary.com/denokpulg/image/upload/v1669807972/menswear/banner/3_1_ym5fpc.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="best_seller_shopby">
        <div className="best_seller_title">Shop by</div>

        <div className="best_seller_shop">
          <img
            src="https://res.cloudinary.com/denokpulg/image/upload/v1669880865/menswear/banner/1_4_wfzis8.jpg"
            alt=""
          />
          <img
            src="https://res.cloudinary.com/denokpulg/image/upload/v1669880865/menswear/banner/1_4_wfzis8.jpg"
            alt=""
          />
          <img
            src="https://res.cloudinary.com/denokpulg/image/upload/v1669880865/menswear/banner/1_4_wfzis8.jpg"
            alt=""
          />
          <img
            src="https://res.cloudinary.com/denokpulg/image/upload/v1669880865/menswear/banner/1_4_wfzis8.jpg"
            alt=""
          />
          <img
            src="https://res.cloudinary.com/denokpulg/image/upload/v1669880865/menswear/banner/1_4_wfzis8.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="banner_content">
        <div className="content">
          The best sets you'll ever wear — made in Ontario from locally-sourced
          merino wool Products provided by Uniso
        </div>
      </div>
      <div className="best_seller_shopby">
        <div className="best_seller_title">From the Journal</div>

        <div className="best_seller_journal">
          <div className="best_seller_journal_card">
            <img
              src="https://res.cloudinary.com/denokpulg/image/upload/v1669882384/menswear/banner/Img_1_pa86mj.jpg"
              alt=""
            />
            <div className="best_seller_date">MAY 15, 2020</div>
            <div className="best_seller_content">
              Under Armour Training stretch woven half zip jacket in white
            </div>
          </div>
          <div className="best_seller_journal_card">
            <img
              src="https://res.cloudinary.com/denokpulg/image/upload/v1669882384/menswear/banner/Img_1_pa86mj.jpg"
              alt=""
            />
            <div className="best_seller_date">MAY 15, 2020</div>
            <div className="best_seller_content">
              Under Armour Training stretch woven half zip jacket in white
            </div>
          </div>
          <div className="best_seller_journal_card">
            <img
              src="https://res.cloudinary.com/denokpulg/image/upload/v1669882384/menswear/banner/Img_1_pa86mj.jpg"
              alt=""
            />
            <div className="best_seller_date">MAY 15, 2020</div>
            <div className="best_seller_content">
              Under Armour Training stretch woven half zip jacket in white
            </div>
          </div>
        </div>
      </div>
      {/* <div className="best_seller_">
        <div className="best_seller_header">
          <div className="best_seller_title">Best Seller</div>
          <div className="best_seller_view">View All</div>
        </div>
        <div className="banner_img">
        {data.map((item: any, index) => (
          <img src={data[index]} alt="" width="100%" />
        ))}
      </div>
        </div> */}
    </section>
  );
};
export default Home;
