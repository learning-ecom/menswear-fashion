import React, { useEffect, useRef, useImperativeHandle } from 'react';
import { useSetState } from '../../../utils/functions.utils';
import './nav_button.ui.scss';

interface INavbutton {
  text?: String;
  icon: any;
  badge?: any;
  className?: any;
  onClick?: any;
  widthTrue?: any;
  style?: any;
}

const Navbutton = (props: INavbutton) => {
  return (
    <div
      className={`navbutton_wrapper ${props.className || ''}`}
      onClick={props.onClick}
      style={props.style}>
      {props.widthTrue ? (
        <img className="navbutton_image_true" src={props.icon} alt="icon" />
      ) : (
        <img className="navbutton_image" src={props.icon} alt="icon" />
      )}
      {props.badge && <div className="navbutton_badge">{props.badge}</div>}
    </div>
  );
};

export default Navbutton;
