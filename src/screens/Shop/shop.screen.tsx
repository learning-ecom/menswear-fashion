import { useEffect } from "react";
import { useNavigate } from "react-router";
import Card from "../../components/card/card.component";
import Pagination from "../../common_components/ui/Pagination/Pagination";
import FilterSidebar from "../../common_components/ui/sidebar/sidebar_component.ui";
import { Model } from "../../imports/model.import";
import { useSetState } from "../../utils/functions.utils";
import { Functions } from "../../utils/imports.utils";
import "./shop.screen.scss";
const Shops = () => {
  const  navigate:any=useNavigate()
  const [state, setState] = useSetState({
    currentPage: 1,
    itemPerPage: 6,
    product_data: [],
    categories_search: [],
    brand_search: [],
    color_search: [],
    size_search: [],
    price_search: [],
  });

  // all product
  const getAllProduct = async () => {
    Functions.notiflixLoader();
    try {
      let query: any = {};
      if (state.categories_search.length > 0) {
        query.categories_search = state.categories_search[0];
      }
      if (state.brand_search.length > 0) {
        query.brand_search = state.brand_search[0];
      }
      if (state.color_search.length > 0) {
        query.color_search = state.color_search[0];
      }
      if (state.size_search.length > 0) {
        query.size_search = state.size_search[0];
      }
      if (state.price_search.length > 0) {
        query.price_search = state.price_search[0];
      }
      const res: any = await Model.product.getAllProduct(query);
      setState({ product_data: res.data });
    } catch (error) {
      Functions.notiflixFailure(error);
    } finally {
      Functions.notiflixRemove();
    }
  };
 
  useEffect(()=>{
    if (!localStorage.token) {
      navigate('/login');
    }
    // eslint-disable-next-line
  },[])
  // hooks
  useEffect(() => {
    if (localStorage.token) {
    getAllProduct();
    }
    // eslint-disable-next-line
  },[
    state.categories_search,
    state.brand_search,
    state.color_search,
    state.size_search,
    state.price_search,
  ]);



  // get currentpost
  const indexOfLastItem = state.currentPage * state.itemPerPage;
  const indexOfFirstItem = indexOfLastItem - state.itemPerPage;
  const currentItem = state.product_data?.slice(
    indexOfFirstItem,
    indexOfLastItem
  );
  
  // change page
  const paginate = (pageNumber: any) => setState({ currentPage: pageNumber });
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
          <FilterSidebar
            categories={(search: any) =>
              setState({ categories_search: search })
            }
            brand={(search: any) => setState({ brand_search: search })}
            color={(search: any) => setState({ color_search: search })}
            size={(search: any) => setState({ size_search: search })}
            price={(search: any) => setState({ price_search: search })}
          />
        </div>

        <div className="product_card_items">
          <div className="product_header">
            <div className="product_title">Fashion Best Sellers</div>
            {/* <div className="sort_by">
              <div className="sort_by_content">SORT BY</div>
              <Dropdown
                width={"190px"}
                background={"#fff"}
                border={"2px solid #EEEEEE"}
              />
            </div> */}
          </div>
          {currentItem.length > 0 ? (
            <div className="product_card_item">
              {currentItem?.map((item: any, index: number) => {

              let product_size:boolean= item.stock[state.size_search]===0;
                

                return (
                  <Card
                  id={item._id}
                    image={item.img}
                    desc={item.desc}
                    amount={
                      product_size? "Out of Stock" : item.amount
                    }
                    discount={item.discount}
                    key={index}
                  />
                );
              })}
            </div>
          ) : (
            <div className="no_data"> NO DATA FOUND</div>
          )}
        </div>
      </div>
      <Pagination
        itemPerPage={state.itemPerPage}
        totalItems={state.product_data?.length}
        paginate={paginate}
        currentPage={state.currentPage}
        setCurrentPage={(value: any) => setState({ currentPage: value })}
      />
    </div>
  );
};

export default Shops;
