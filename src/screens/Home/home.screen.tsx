import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import Splider from "../../common_components/ui/splider/splider.ui";
import { Model } from "../../imports/model.import";
import { Functions } from "../../utils/imports.utils";
import { ImageData,ProductData } from "../../utils/redux.utils";
import "./home.screen.scss";

const Home = () => {
  // redux
  const image_data: any = useSelector((state: any) => state.image);
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate=useNavigate()
  

  // allimage
  const getImage = async () => {
    Functions.notiflixLoader();

    try {
      const res: any = await Model.image.getImage();
      ImageData(res.data);
    } catch (error) {
      Functions.notiflixFailure(error);
    } finally {
      Functions.notiflixRemove();
    }
  };

  // all product
  const getAllProduct = async () => {
    Functions.notiflixLoader();
    try {
      const res: any = await Model.product.getAllProduct();
      ProductData(res.data);
    } catch (error) {
      Functions.notiflixFailure(error);
    } finally {
      Functions.notiflixRemove();
    }
  };
  
  useEffect(() => {
    if (!localStorage.token) {
      navigate('/login');
    }
    else{
      getImage();
      getAllProduct()
    }
  }, []);

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
          {image_data?.data[0]?.banner?.map((item: any, index: number) => (
            <img src={item} alt="" width="100%" key={index} />
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
        {image_data?.data[0]?.short_banner?.map((item: any, index: number) => (
          <img src={item} alt="" width="100%" key={index} />
        ))}
      </div>
      <div className="splider">
        <Splider title={"Best Seller"} view={"View"} />
      </div>
      <div className="sales_banner">
        {image_data?.data[0]?.autumn?.map((item: any, index: number) => (
          <img src={item} alt="" width="100%" key={index} />
        ))}

        <div className="banners">
          {image_data?.data[0]?.short_autumn?.map(
            (item: any, index: number) => (
              <img src={item} alt="" width="100%" key={index} />
            )
          )}
        </div>
      </div>
      <div className="best_seller_shopby">
        <div className="best_seller_title">Shop by</div>

        <div className="best_seller_shop">
          {image_data?.data[0]?.shop_by?.map((item: any, index: number) => (
            <img src={item} alt="" width="100%" key={index} />
          ))}
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
          {image_data?.data[0]?.journal?.map((item: any, index: number) => (
            <div className="best_seller_journal_card" key={index}>
              <img src={item.img} alt="" />
              <div className="best_seller_date">{item.date}</div>
              <div className="best_seller_content">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Home;
