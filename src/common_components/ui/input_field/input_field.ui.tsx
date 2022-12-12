import { useSetState } from "../../../utils/function.utils";
import "./input_field.ui.scss";

interface IInputProps {
  className?: string;
  onChange: any;
  icon?: any;
  icon_class?: string;
  type: string;
  onPress?: any;
  value: string;
  name: string;
  iconOnPress?: any;
  size?: any;
  error?: any;
  min?: any;
  disabled?: boolean;
  label?: string;
  endText?: string;
  placeholder?: string;
  hide?: any;
  width?: any;
  fontFamily?: any;
  fontSize?: any;
}

const Input = (props: IInputProps) => {
  // State
  const [state, setState] = useSetState({ focus: false });

  return (
    <>
      <div
        className="login_input_field_label"
        style={{ fontFamily: props.fontFamily, fontSize: props.fontSize }}
      >
        {props.label}
      </div>
      <div
        className={
          state.focus ? "focus input_container set_bg" : "input_container"
        }
        style={{ width: props.width }}
      >
        <input
          type={props.type}
          className={
            state.focus
              ? `set_bg input ${props.className || ""}`
              : `input ${props.className || ""}`
          }
          style={props.icon ? { width: "93%" } : { width: "100%" }}
          onChange={(e) => props.onChange(e.target.value)}
          value={props.value}
          name={props.name}
          onFocus={() => setState({ focus: true })}
          onBlur={() => {
            setState({ focus: false });
          }}
          min={props.min}
          disabled={props?.disabled}
          placeholder={props.placeholder}
        />

        {props.hide !== "" && (
          <div
            className="icon_wrapper"
            style={props.icon && { width: "7%" }}
            onClick={() => {
              props.iconOnPress();
            }}
          >
            {props?.icon && (
              <img
                src={props.icon}
                alt="images"
                className={`input_icon ${props.icon_class || ""}`}
              />
            )}
            {props.endText && (
              <div className="end_text_wrapper">{props.endText}</div>
            )}
          </div>
        )}
      </div>
      {props.error &&
        props.error.map(
          (error: any) =>
            props.name === error?.path && (
              <div className="input_field_error">
                {props.name === error?.path && error.message}
              </div>
            )
        )}
    </>
  );
};

export default Input;
