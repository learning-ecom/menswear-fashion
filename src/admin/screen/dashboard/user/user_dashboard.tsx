import React, { useEffect } from "react";
import CardDashboardUI from "../../../../common_components/dashboard_card/card";
import { Model } from "../../../../imports/model.import";
import { useSetState } from "../../../../utils/functions.utils";
import { Functions } from "../../../../utils/imports.utils";
import './user.scss';
const User = () => {
  const [state, setState] = useSetState({data: [], headerTitle: ['#', 'User', 'Email', 'Mobile Number', 'Action']})
  const getUsersDetails = async () => {
    try {
      const users:any  = await Model.user.getManyUser({})
      setState({data: users.data})
    } catch(err) {
      Functions.notiflixFailure(err);
    }
   
  }
  
  useEffect( () => {
    
    getUsersDetails()
  }, [])
  console.log(state.data)
  return (
    <div >
      <h1>Dashboard</h1>
      <CardDashboardUI
        type={"text"}
        value={"Search the user"}
        name={"user-input"}
        className={"user-name"}
        icon={""}  
        data={state.data}  
        headerData= {state.headerTitle}  />
    </div>
  );
};

export default User;
