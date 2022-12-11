import { Splide, SplideSlide } from "@splidejs/react-splide";
import "./splider.ui.scss";
import "@splidejs/react-splide/css/sea-green";
import Card from "../card/card.ui";

const Splider = (props: any) => {
  return (
    <div className="splider_container">
      <div className="splider_header">
        <div className="splider_title">{props.title}</div>
        {props.view && <div className="splider_view">{props.view}</div>}
      </div>
      <div className="splider_list">
        <Splide
          options={{
            type: "loop",
            drag: "free",
            focus: "center",
            autoplay: true,
            perPage: 4,
            gap:"20px",
            autoScroll: {
              speed: 10,
            },
            autoStart: true,
          }}
          aria-label="Testmonials"
        >
          <SplideSlide>
            <Card />
          </SplideSlide>
          <SplideSlide>
            <Card />
          </SplideSlide>
          <SplideSlide>
            <Card />
          </SplideSlide>
          <SplideSlide>
            <Card />
          </SplideSlide>
        </Splide>
      </div>
    </div>
  );
};

export default Splider;
