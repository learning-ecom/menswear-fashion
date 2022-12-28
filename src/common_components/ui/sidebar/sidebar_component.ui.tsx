import { useSetState } from "../../../utils/functions.utils";
import "./sidebar_component.ui.scss";
import { Assets } from "../../../utils/imports.utils";
import { useSelector } from "react-redux";
import { shopSize } from "../../../utils/redux.utils";
import PrimaryButton from "../button/primary_Button.ui";
import { useEffect } from "react";

interface Isidebar {
  text?: String;
  categories?: any;
  brand?: any;
  color?: any;
  size?: any;
  price: any;
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
  let size: any = [
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
      value: "XXL",
      label: "2XL",
    },
    {
      value: "XXXL",
      label: "3XL",
    },
  ];
  const price: any = [
    {
      value: "₹300 - ₹500",
      label: "₹300 - ₹500",
    },
    {
      value: "₹500 - ₹700",
      label: "₹500 - ₹700",
    },
    {
      value: "₹700 - ₹1000",
      label: "₹700 - ₹1000",
    },
    {
      value: "₹1000 - ₹1500",
      label: "₹1000 - ₹1500",
    },
  ];
  const categoriesFilter: any = (item: any) => {
    data = state.categories_data;
    if (data?.includes(item.value || item)) {
      data = [];
    } else {
      data = [];
      data.push(item.value);
    }
    setState({ categories_data: data });
    props.categories(data);
  };
  const brandFilter: any = (item?: any) => {
    data = state.brand_data;
    if (data.includes(item.value)) {
      data = [];
    } else {
      data = [];
      data.push(item.value);
    }
    setState({ brand_data: data });
    props.brand(data);
  };
  const colorFilter: any = (item?: any) => {
    data = state.color_data;
    if (data.includes(item.value || item)) {
      data = [];
    } else {
      data = [];
      data.push(item.value);
    }
    setState({ color_data: data });
    props.color(data);
  };
  const priceFilter: any = (item?: any) => {
    data = state.price_data;
    if (data.includes(item.value)) {
      data = [];
    } else {
      data = [];
      data.push(item.value);
    }
    setState({ price_data: data });
    props.price(data);
  };

  const sizeFilter = (item: any) => {
    if (size_data.data === item.value || item === "") {
      shopSize("");
      props.size("");
    } else {
      shopSize(item.value);
      props.size(item.value);
    }
  };
  const clearFilter = () => {
    setState({
      categories_data: "",
      brand_data: "",
      color_data: "",
      price_data: "",
    });
    shopSize("");
    categoriesFilter("");
    sizeFilter("");
    priceFilter("");
    brandFilter("");
    colorFilter("");
  };
useEffect(()=>{
  clearFilter()
},[])
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
                  onClick={() => categoriesFilter(item)}
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
                  onClick={() => brandFilter(item)}
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
                  onClick={() => colorFilter(item)}
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
                  onClick={() => sizeFilter(item)}
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
                  onClick={() => priceFilter(item)}
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
        <div className="clear_fliter">
          <PrimaryButton
            text={"CLEAR"}
            onClick={clearFilter}
            backgroundColor={"#ffffff"}
            style={{ borderRadius: "0px", border: "#000000 2px solid" }}
            fontFamily={"Jost"}
            fontSize={"14px"}
            fontWeight={600}
            letterSpacing={"2px"}
            color={"#000000"}
          />
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;
