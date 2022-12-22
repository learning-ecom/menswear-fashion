import { useSetState } from "../../../utils/functions.utils";
import "./sidebar_component.ui.scss";
import { Assets } from "../../../utils/imports.utils";

import { useSelector } from "react-redux";
import { shopSize } from "../../../utils/redux.utils";
import _ from "lodash";

interface Isidebar {
  text?: String;
}

const FilterSidebar = (props: Isidebar) => {
  // redux
  const size_data: any = useSelector((state: any) => state.shop);

  const [state, setState] = useSetState({
    categories_data: [],
    brand_data: [],
    color_data: [],
    price_data: [],
  });
  let data: any = [];

  let categories = [
    {
      value: "Jeans",
      label: "Jeans",
    },
    {
      value: "Shirts",
      label: "Shirts",
    },
    {
      value: "Footwear",
      label: "Footwear",
    },
    {
      value: "Tops",
      label: "Tops",
    },
  ];
  let brand = [
    {
      value: "Nike",
      label: "Nike",
    },
    {
      value: "Adidas",
      label: "Adidas",
    },
    {
      value: "Gucci",
      label: "Gucci",
    },
    {
      value: "Levi’s",
      label: "Levi’s",
    },
  ];
  let color = [
    {
      value: "Beige",
      label: "Beige",
    },
    {
      value: "Black",
      label: "Black",
    },
    {
      value: "Blue",
      label: "Blue",
    },
    {
      value: "Brown",
      label: "Brown",
    },
  ];
  let size = [
    {
      value: "S",
      label: "S",
    },
    {
      value: "M",
      label: "M",
    },
    {
      value: "L",
      label: "L",
    },
    {
      value: "XL",
      label: "XL",
    },
    {
      value: "2XL",
      label: "2XL",
    },
    {
      value: "UK6",
      label: "UK6",
    },
    {
      value: "UK7",
      label: "UK7",
    },
  ];
  const price: any = [
    {
      value: "$10 - $100",
      label: "$10 - $100",
    },
    {
      value: "$100 - $200",
      label: "$100 - $200",
    },
    {
      value: "$200 - $300",
      label: "$200 - $300",
    },
    {
      value: "$300 - $400",
      label: "$300 - $400",
    },
  ];
  const categoriesFilter: any = (item: any, index: number) => {
    data = state.categories_data;
    if (data.includes(item.value)) {
      data = [];
    } else {
      data = [];
      data.push(item.value);
    }
    setState({ categories_data: data });
  };
  const brandFilter: any = (item: any, index: number) => {
    data = state.brand_data;
    if (data.includes(item.value)) {
      data = [];
    } else {
      data = [];
      data.push(item.value);
    }
    setState({ brand_data: data });
  };
  const colorFilter: any = (item: any, index: number) => {
    data = state.color_data;
    if (data.includes(item.value)) {
      data = [];
    } else {
      data = [];
      data.push(item.value);
    }
    setState({ color_data: data });
  };
  const priceFilter: any = (item: any, index: number) => {
    data = state.price_data;
    if (data.includes(item.value)) {
      data = [];
    } else {
      data = [];
      data.push(item.value);
    }
    setState({ price_data: data });
  };

  const sizeFilter = (item: any, index: number) => {
    if (_.isEqual(size_data.data.toString(), item.value.toString())) {
      shopSize("");
    } else {
      shopSize(item.value);
    }
  };

  return (
    <div>
      <div className="filter_containers">
        <div className="filter_header">Filter</div>
        <div className="filter_menu">
          <div className="filter_menu_header">CATEGORIES</div>
          <div className="filter_menu_item">
            {categories.map((item: any, index: number) => {
              return (
                <div
                  className="filter_wrapper"
                  onClick={() => categoriesFilter(item, index)}
                  key={index}
                >
                  <img
                    src={
                      state.categories_data.includes(item.value)
                        ? Assets.filter_active
                        : Assets.filter_inactive
                    }
                    alt=""
                  />

                  <div className="filter_item">{item.label}</div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="filter_menu">
          <div className="filter_menu_header">BRAND</div>
          <div className="filter_menu_item">
            {brand.map((item: any, index: number) => {
              return (
                <div
                  className="filter_wrapper"
                  onClick={() => brandFilter(item, index)}
                  key={index}
                >
                  <img
                    src={
                      state.brand_data.includes(item.value)
                        ? Assets.filter_active
                        : Assets.filter_inactive
                    }
                    alt=""
                  />

                  <div className="filter_item">{item.label}</div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="filter_menu">
          <div className="filter_menu_header">COLOR</div>
          <div className="filter_menu_item">
            {color.map((item: any, index: number) => {
              return (
                <div
                  className="filter_wrapper"
                  onClick={() => colorFilter(item, index)}
                  key={index}
                >
                  <img
                    src={
                      state.color_data.includes(item.value)
                        ? Assets.filter_active
                        : Assets.filter_inactive
                    }
                    alt=""
                  />

                  <div className="filter_item">{item.label}</div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="filter_menu">
          <div className="filter_menu_header">SIZE</div>
          <div className="filter_menu_item_size">
            {size.map((item: any, index: number) => {
              return (
                <div
                  className={
                    size_data.data === item.value
                      ? "filter_wrapper_box_active"
                      : "filter_wrapper_box"
                  }
                  onClick={() => sizeFilter(item, index)}
                  key={index}
                >
                

                  <div className="filter_item_size">{item.label}</div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="filter_menu">
          <div className="filter_menu_header">PRICE</div>
          <div className="filter_menu_item">
            {price.map((item: any, index: number) => {
              return (
                <div
                  className="filter_wrapper"
                  onClick={() => priceFilter(item, index)}
                  key={index}
                >
                  <img
                    src={
                      state.price_data.includes(item.value)
                        ? Assets.filter_active
                        : Assets.filter_inactive
                    }
                    alt=""
                  />

                  <div className="filter_item">{item.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;
