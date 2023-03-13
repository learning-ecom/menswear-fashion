import { useEffect } from "react";
import { useSetState } from "../../utils/functions.utils";
import Input from "../../common_components/ui/input_field/input_field.ui";
import "./dashboard_card.component.scss";
import Assets from "../../imports/assets.imports";
interface ICardDashboard {
  id?: any;
  image?: string;
  desc?: string;
  amount?: any;
  discount?: any;
  type: string;
  value: string;
  name: string;
  className?: string;
  icon?: string;
  data?: any;
  headerData?: any;
}

const Card = (props: ICardDashboard) => {

  const [state, setState] = useSetState({
    value: "",
    unFilteredData: props.data,
    filteredData: props.data,
  });

  useEffect(() => {
    setState({ unFilteredData: props.data, filteredData: props.data });
    // eslint-disable-next-line
  }, [props.data]);

  const inputHandler = (e: any) => {
    const data = state.unFilteredData.filter((item: any) => {
        console.log(item.first_name)
      return item.first_name.includes(e) || item.email.includes(e)
      });
    setState({ filteredData: data , value: e});
  };

  return (
    <div className="card">
      <div className="input">
        <Input
          onChange={inputHandler}
          type={props.type}
          value={state.value}
          name={props.name}
          className={props.className}
          placeholder={props.value}
          icon={Assets.search}
        />
      </div>
      <div className="table">
        <table>
          <thead>
            <tr>
              {props.headerData.map((item: any) => {
                return <th>{item}</th>;
              })}
            </tr>
          </thead>
        </table>
      </div>
      <div className="list-table">
        <table>
          <tbody>
            {state.filteredData &&
              state.filteredData.map((item: any, index: any) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.first_name}</td>
                    <td>{item.email}</td>
                    <td></td>
                    <td></td>
                    {/* <td>{item.mobile}</td>
                                            <td>{item.address}</td>
                                            <td>{item.action}</td> */}
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Card;
