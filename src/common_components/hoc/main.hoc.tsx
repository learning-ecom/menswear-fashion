import React from 'react'
import Sidebar from '../../components/sidebar_admin/sidebar_admin.component'
import { useSetState } from '../../utils/functions.utils'
import Footer from './footer/footer.screen'
import Navbar from './navbar/navbar.screen'

import '../hoc/main.scss'

export default function Main(props: any) {
  const role:any=localStorage.getItem('role')
  const [state, setState] = useSetState({
    signout: false,
    loading: false,
  });



  const setMainLoading = (loading: boolean) => {
    setState({ loading: loading });
  };
 const showSuccess = (text: string) => {
    //show snack success
  };
  const renderChildren = () => {
    return React.Children.map(props.children, (child: any) => {
      if (child) {
        return React.cloneElement(child, {
          showSuccess,
          setMainLoading,
        });
      }
    });
  };
  
  if (state.signout) window.location.href = '/';
  if (state.loading) return <div>Loading</div>;
  return role==='admin'?<>
  <div className="admin">
    <Sidebar/>
    <div className="right-side-content">
      {renderChildren()}
    </div>
  </div>
  </>:<> <Navbar/>{renderChildren()}<Footer/></>

}
