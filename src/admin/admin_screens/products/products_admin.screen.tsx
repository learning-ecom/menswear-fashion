import {
  capitalizeFirstLetter,
  useSetState,
} from "../../../utils/functions.utils";
import { useEffect } from "react";
import React from "react";
import { PrimaryButton } from "../../../utils/imports.utils";
import { Assets, Functions } from "../../../utils/imports.utils";
import "./products_admin.screen.scss";
import ProductModal from "../../../common_components/ui/product_modal/product_modal";
import CommonCard from "../../../components/dashboard_card/common_card.component";
import { Model } from "../../../imports/model.import";
import { notiflixFailure } from "../../../utils/functions.utils";
import { Accordion, AccordionItem } from "@szhsin/react-accordion";

const Products: React.FC = () => {
  const [state, setState] = useSetState({
    isModalOpen: false,
    data: "",
    header: [
      "#",
      "Image",
      "Category",
      "Brand",
      "Amount",
      "Discount",
      "Quantity",
      "Actions",
    ],
  });
  const createModal = (props: any) => {
    // console.log("the button is clicked");
    setState({ isModalOpen: true });
    // console.log(state.isModalOpen);
  };
  const allProducts = async () => {
    try {
      const data: any = await Model.product.getAllProduct({});
      setState({ data: data.data });
    } catch (err) {
      Functions.notiflixFailure(err);
    }
  };
  useEffect(() => {
    allProducts();
  }, []);
  console.log(state.data);
  return (
    <div className="products">
      <div className="header">
        <h1>Products</h1>
        <PrimaryButton
          text="Create Product"
          icon={Assets.plusAdd}
          iconDirection="right"
          className="create-button"
          onClick={createModal}
        />
      </div>
      <ProductModal
        open={state.isModalOpen}
        closeButton={(val: Boolean) => {
          setState({ isModalOpen: val });
        }}
      ></ProductModal>
      <CommonCard>
        <div className="table">
          <table>
            <thead>
              <tr>
                {state.header.map((item: any) => {
                  return <th>{item}</th>;
                })}
              </tr>
            </thead>
          </table>
        </div>
        <div className="list-table">
          <table>
            <tbody>
              {state.data &&
                state.data.map((item: any, index: any) => {
                  return (
                    <Accordion>
                      <AccordionItem header={
                        <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                          <img src={item.img} alt="product-imge" className="product-image" />
                        </td>
                        <td>{item.categories.toString()}</td>
                        <td>{item.brand}</td>
                        <td>{item.amount}</td>
                        <td>{item.discount}</td>
                        <td>
                          <>
                          {
                           Object.values(item.stock).reduce((arr:any, cur:any) => arr + cur, 0)
                          }
                          </>
                        </td>
                        <td>
                          <div className="action-flex">
                            <div className="add">
                              <img src={Assets.editIcon} alt={Assets.plus} />
                              <p>Add</p>
                            </div>
                            <div className="delete">
                              <img src={Assets.deleteIcon} alt={Assets.plus} />
                              <p>Delete</p>
                            </div>
                            <div className="view">
                              <img src={Assets.viewIcon} alt={Assets.plus} />
                              <p>View</p>
                            </div>
                          </div>
                        </td>
                      </tr>
                        }>
                        <div className="product_display_card">
                           <div className="first-row">
                            <div className="sub-heading id">
                              <h6>Product Id</h6>
                              <p>{item._id}</p>
                            </div>
                            <div className="sub-heading text-center brand">
                              <h6>Brand</h6>
                              <p>{item.brand}</p>
                            </div>
                            <div className="sub-heading text-center category">
                              <h6>Category</h6>
                              <p>{item.categories.toString()}</p>
                            </div>
                            <div className="sub-heading text-center color">
                              <h6>Color</h6>
                              <p>{item.color.toString()}</p>
                            </div>
                           </div>
                           <div className="second-row">
                            <h6>Description</h6>
                            <p>{item.desc}</p>
                           </div>
                           <div className="third-row">
                            <div className="sub-heading price">
                              <h6>Price Range</h6>
                              <p>{item.price}</p>
                            </div>
                            <div className="sub-heading text-center amount">
                              <h6>Amount</h6>
                              <p>{item.amount}</p>
                            </div>
                            <div className="sub-heading text-center discount">
                              <h6>Discount</h6>
                              <p>{item.discount}</p>
                            </div>
                            <div className="sub-heading text-center ratings">
                              <h6>Ratings</h6>
                              <p>{item.ratings}</p>
                            </div>
                           </div>
                           <div className="fourth-row">
                            <div className="image">
                              <img src={item.img} alt={item.name} />
                            </div>
                            
                             < div className="quantity-lot">
                              {Object.entries<string>(item.stock).map(([value, key], index) => {
                                // console.log(value, key , 'khbvhhv')
                                return (
                                  <div className="size">
                                     <h6>{`${value} -`}</h6>
                                    <p>{key}</p>
                                  </div>
                                )
                              })}
                             </div>
                            
                           </div>
                        </div>
                      </AccordionItem > 
                      
                    </Accordion>
                  );
                })}
            </tbody>
          </table>
        </div>
      </CommonCard>
    </div>
  );
};

export default Products;
