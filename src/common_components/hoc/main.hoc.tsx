import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Sidebar from '../../admin/common_components/ui/sidebar/sidebar_component.ui'
import { useSetState } from '../../utils/functions.utils'
import Footer from './footer/footer.screen'
import Navbar from './navbar/navbar.screen'

export default function Main(props: any) {
  const role:any=localStorage.getItem('role')
  const navigate:any=useNavigate()
  // let token = localStorage.getItem('token');
  // if (!token) window.location.pathname = '/login';
  const [state, setState] = useSetState({
    signout: false,
    loading: false,
  });

  useEffect(()=>{

   
if(role==='admin' ){
      navigate('/dashboard')
    }
  })
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
  <Sidebar/>{renderChildren()}
  </>:<> <Navbar/>{renderChildren()}<Footer/></>

}
