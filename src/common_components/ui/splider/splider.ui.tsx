import { Splide, SplideSlide } from "@splidejs/react-splide";
import "./splider.ui.scss";
import "@splidejs/react-splide/css/sea-green";
import Card from "../../../components/card/card.component";
import { useSelector } from "react-redux";
import { useRef } from "react";

const Splider = (props: any) => {
  const product_data = useSelector((state: any) => state.product);  
  const ref:any = useRef()
  // useEffect(() => {
  //     setInterval(() => {
  //       ref.current.splide.go('>');
  //     }, 2000);
  //  }, []);
  return (
    <div className="splider_container">
      <div className="splider_header">
        <div className="splider_title">{props.title}</div>
        {props.view && <div className="splider_view">{props.view}</div>}
      </div>
      <div className="splider_list">
        <Splide ref={ref}
          options={{
          dots: true,
          autoplay: true,
          type: "loop",
          perPage: 5,
          breakpoints: {
            1920:{
              perPage: 5,
            },
            1440: {
              perPage: 5,
            },
            1024: {
              perPage: 3,
             
            },
            767: {
              perPage: 2,
          
            },
            640: {
              perPage: 1,
            }
          },
          focus: "center",
          // gap: '1em',
          updateOnMove : true,
          omitEnd  : true,
          }}
          aria-label="Testmonials"
        >
          {product_data?.data.map((item: any, index: number) => {
            
            return (
              <div key={index}>
                {index < 5 && (
                  <SplideSlide >
                    <Card
                      image={item.img}
                      desc={item.desc}
                      amount={item.amount}
                      discount={item.discount}
                    />
                  </SplideSlide>
                )}
              </div>
            );
          })}
        </Splide>
      </div>
    </div>
    
  );
};

export default Splider;
