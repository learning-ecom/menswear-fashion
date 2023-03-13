import { Functions} from '../../utils/imports.utils';
import './sidebar_admin.component.scss';
import { Assets } from '../../utils/imports.utils';
import { useNavigate } from 'react-router-dom';
import Notiflix from 'notiflix';
import { useSetState } from '../../utils/functions.utils';
import { useEffect } from 'react';

interface ISidebar {
  text?: String;
}

const Sidebar = (props: ISidebar) => {
  const sidebar_content:any = [
    {
      name: 'Dashboard',
      active_name: 'dashboard',
      active_icon: Assets.dashboard_active,
      inactive_icon: Assets.dashboard_inactive,
      route: '/admin/dashboard',
    },
    {
      name: 'Users',
      active_name: 'users',
      active_icon: Assets.user_active,
      inactive_icon: Assets.user_inactive,
      route: '/admin/users',
      user_details: 'user_details',
    },
    {
      name: 'Bookings',
      active_name: 'bookings',
        active_icon: Assets.bookings_active,
        inactive_icon: Assets.bookings_inactive,
      route: '/admin/bookings',
      booking_details: 'booking_details',
    },
    // {
    //   name: 'Payout',
    //   active_name: 'payout',
    //   // active_icon: Assets.payout_active,
    //   // inactive_icon: Assets.payout_inactive,
    //   route: '/payout',
    // },
    {
      name: 'Products',
      active_name: 'products',
      active_icon: Assets.product_active,
      inactive_icon: Assets.product_inactive,
      route: '/admin/products',
    },
    
  ];
  const navigate = useNavigate();
  const [state, setState] = useSetState({
    pathname: '',
  });
 
  useEffect(() => {
    setState({ pathname: window.location.pathname.split('/')[1] });
    // eslint-disable-next-line
  }, [state.pathname]);

  // logout
  const logout = async () => {
    Notiflix.Loading.pulse('signout...');
    localStorage.clear();
    // setUser({});  
     window.location.pathname='/login';
    Functions.notiflixRemove();
    
  };

  return (
      <div className="sidebar_containers">
        <div className="sidebar_wrapper">
          <div className="sidebar_section">
            <div className="sidebar_logo">
              <div className="sidebar_brand_img">
                <img src={Assets.logo} width="150" height='200' alt="logo" />
              </div>
            </div>
            <div className="sidebar_menu">
              {sidebar_content.map((item: any, index: number) => {
                console.log(item.route)
                return (
                    <div
                      onClick={() => {navigate(item.route)}}
                      className={
                        state.pathname === item.active_name
                          ? 'sidebar_menu_list_active'
                          : state.pathname === item.user_details
                          ? 'sidebar_menu_list_active'
                          : state.pathname === item.booking_details 
                          ? 'sidebar_menu_list_active'
                          : 'sidebar_menu_list'
                      } key={index}>
                      <div className="sidebar_icon">
                        <img
                          className="color"
                          src={
                            state.pathname === item.active_name
                              ? item.active_icon
                              : state.pathname === item.user_details
                              ? item.active_icon
                              : state.pathname === item.booking_details 
                              ? item.active_icon
                              : item.inactive_icon
                          }
                         
                          alt="icons"
                        />
                      </div>
                      <div
                        className={
                          state.pathname === item.active_name
                            ? 'sidebar_list_name_active'
                            : state.pathname === item.user_details
                            ? 'sidebar_list_name_active'
                            :state.pathname === item.booking_details 
                            ? 'sidebar_list_name_active'
                            : 'sidebar_list_name'
                        }>
                        {item.name}
                      </div>
                    </div>
                );
              })}
              <div className="line"></div>
              <div className="sidebar_menu_logout" onClick={(()=>logout())}>
                <div className="sidebar_icon" >
                  <img
                 src={Assets.logout_active} className="logout_active"
                    alt="icons"
                  />
                  <img
                    src={Assets.logout_inactive} className="logout_inactive"
                    alt="icons"
                  />
                <div className="sidebar_list_logout_name" >Logout</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar 