import { useSetState } from '../../../utils/functions.utils';
import './search_bar.ui.scss';

interface ISearchbar {
  text?: String;
  className?: string;
  onChange?: any;
  onPress?: any;
  value?: string;
  name?: string;
  iconOnPress?: any;
  placeholder?: string;
  style?: any;
}

const Searchbar = (props: ISearchbar) => {
  // State
  const [state, setState] = useSetState({});

  return (
    <div
      className={
        state.focus
          ? 'search_bar_focus search_input_container search_bar_set_bg'
          : 'search_input_container'
      }
      style={props.style}>
      
      <input
        type={'text'}
        className={
          state.focus
            ? `search_bar_set_bg input ${props.className || ''}`
            : `input ${props.className || ''}`
        }
        onChange={(e) => props.onChange(e.target.value)}
        value={props.value}
        name={props.name}
        placeholder={props.placeholder}
        onFocus={() => setState({ focus: true })}
        onBlur={() => setState({ focus: false })}
      />
      <div
        className="icon_wrapper"
        onClick={() => {
          props?.iconOnPress();
        }}>
          send
      </div>
    </div>
  );
};

export default Searchbar;
