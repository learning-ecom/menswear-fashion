import React from "react";
import Card from "../../common_components/ui/card/card.ui";
import Dropdown from "../../common_components/ui/dropdown/dropdown.ui";
import FilterSidebar from "../../common_components/ui/sidebar/sidebar_component.ui";
import Assets from "../../imports/assets.imports";
import "./shop.screen.scss";
const Shops = () => {
  return (
    <div className="shop_container">
      <div className="banner_wrapper">
        <img
          src="https://res.cloudinary.com/denokpulg/image/upload/v1670045929/menswear/banner/Banner_tkkelo.jpg"
          alt=""
        />
      </div>
      <div className="shop_wrapper">
        <div className="filter_panel">
          <FilterSidebar />
        </div>

        <div className="product_card_items">
          <div className="product_header">
            <div className="product_title">Fashion Best Sellers</div>
            <div className="sort_by">
              <div className="sort_by_content">SORT BY</div>
              <Dropdown
                width={"190px"}
                background={"#fff"}
                border={"2px solid #EEEEEE"}
              />
             
            </div>
          </div>
          <div className="product_card_item">
           <Card/>
           <Card/>
           <Card/>
           <Card/>
           <Card/>
           <Card/>
          </div>
          <div className="product_pagination">
            <div className="pagination_content">1</div>
            <div className="pagination_content">2</div>
            <div className="pagination_content">3</div>
            <img src={Assets.pagination} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shops;
