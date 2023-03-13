import { useEffect } from "react";
import CardDashboardUI from "../../../components/dashboard_card/dashboard_card.component";
import { Model } from "../../../imports/model.import";
import { useSetState } from "../../../utils/functions.utils";
import { Functions } from "../../../utils/imports.utils";
import "./users_admin.screen.scss";

const User = () => {

  const [state, setState] = useSetState({
    data: [],
    headerTitle: ["#", "User", "Email", "Mobile Number", "Action"],
  });

  const getUsersDetails = async () => {
    try {
      const users: any = await Model.user.getManyUser({});
      setState({ data: users.data });
    } catch (err) {
      Functions.notiflixFailure(err);
    }
  };

  useEffect(() => {
    getUsersDetails();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <CardDashboardUI
        type={"text"}
        value={"Search the user"}
        name={"user-input"}
        className={"user-name"}
        icon={""}
        data={state.data}
        headerData={state.headerTitle}
      />
    </div>
  );
};

export default User;
