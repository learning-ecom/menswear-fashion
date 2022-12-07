
import './dropdown.ui.scss';
import Select from 'react-select';

interface IDropdownProps {
  text?: String;
  data?: any;
  onChange?: any;
  width?:any;
  borderRadius?: any;
  background?: any;
  border?: any;
  placeholder?:any;
  color?:any;
  value?: any;
}

const Dropdown:any = (props: IDropdownProps) => {
  
  const customStyles: any = {
    multiValueRemove: (provided:any, state:any) => ({
      ...provided,
      backgroundColor:props.background,

      '&:hover': {
        backgroundColor:'transparent',
        color: 'white',
      },
    }),
    placeholder: (defaultStyles:any) => {
      return {
        ...defaultStyles,
        fontFamily: 'Jost',
        fontSize: '16px',
        fontWeight: 400,
   

        color:props.color || '#000000',

      };
    },
    control: (styles:any) => ({
      ...styles,
      background: props.background||'#f6f6f6',
      borderRadius: props.borderRadius||"none",
      width: props.width,
      outline: '0px',
      
      border:props.border ||'none',
      height:'48px',

      '&:hover': {
        backgroundColor: '#f6f6f6',
        color: '#000',
      },
    }),
    menu: (styles:any) => ({
      ...styles,
      background: '#f6f6f6',
      width: props.width,

      '&:hover': {
        backgroundColor: '#f6f6f6',
        color: '#000',
      },
    }),
    menuList: (styles:any) => ({
      ...styles,
      background: '#f6f6f6',
      width: props.width,
      '&:hover': {
        backgroundColor: '#f6f6f6',
        color: '#000',
      },
    }),
  };

  return (
    <div>
      <Select
        maxMenuHeight={200}
        styles={customStyles}
        options={props.data}
        onChange={props.onChange}
        placeholder={props.placeholder}
        value={props.value}
      />
    </div>
  );
}

export default Dropdown;
