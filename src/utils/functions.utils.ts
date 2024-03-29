import Notiflix from "notiflix";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useLocation } from "react-router-dom";

export const useSetState = (initialState: any) => {
    const [state, setState] = useState(initialState);
  
    const newSetState = (newState: any) => {
      setState((prevState: any) => ({ ...prevState, ...newState }));
    };
    return [state, newSetState];
  };


export const getBaseUrl=()=>{
  let baseURL= "http://localhost:8000"
  return baseURL
}


export const notiflixLoader = (data?:any) => {
  if (data) {
    Notiflix.Loading.standard(data);
  } else {
    Notiflix.Loading.dots('');
  }
};

export const notiflixFailure = (err: any) => {
  toast.error(err, {
    id: '1',
  });
};

export const notiflixSuccess = (success: any) => {
  toast.success(success, {
    id: '1',
  });
};

export const notiflixRemove = () => {
  Notiflix.Loading.remove();
};

Notiflix.Notify.init({
  position: 'center-top',
  distance: '50px',
});

Notiflix.Loading.init({
  className: 'notiflix-loading',
  zindex: 4000,
  backgroundColor: 'rgba(0,0,0,0)',
  svgSize: '60px',
  svgColor: '#9C312B',
});


export const useQuery = () => {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
};

export const capitalizeFirstLetter = (string: string) => {
  if (string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  } else {
    return '';
  }
};