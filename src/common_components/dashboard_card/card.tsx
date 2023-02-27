import React, { ReactNode, useEffect } from 'react'
import { useSetState } from '../../utils/functions.utils';
import Input from '../ui/input_field/input_field.ui';
import './card.scss';
import Assets from '../../imports/assets.imports';
interface ICardDashboard {
    id?:any;
    image?: string;
    desc?: string;
    amount?: any;
    discount?:any;
    type: string,
    value: string,
    name: string,
    className?: string,
    icon?: string,
    data?: any,
    headerData? : any
  }

const Card = (props: ICardDashboard) => {
    const [state, setState] = useSetState(
        {
            value: '',
            unfileteredData : props.data,
            filteredData: props.data
        }
    )
    useEffect(() => {
        setState({unfileteredData: props.data, filteredData: props.data})
    }, [props.data])
    const inputHandeler = (val:any) => {
        setState({value: val})
        console.log(val)        
        const nameArray = state.unfileteredData && state.unfileteredData.filter((item:any) => {
            if(item.first_name.includes(val) || item.email.includes(val)) {
                return item
            } 
        })
        setState({filteredData: nameArray})
    }
  return (
    <div className="card">
      <div className="input">
        <Input 
            onChange={inputHandeler}
            type={props.type}
            value= {state.value}
            name= {props.name}
            className={props.className}
            placeholder={props.value}
            icon={Assets.search}
        />
      </div>
      <div className="table">
            <table>
                <thead>
                    <tr>
                        {props.headerData.map((item:any) => {
                            return(
                                <th>{item}</th>
                            )
                        })}
                    </tr>
                </thead>  
            </table>
            
            
                
        </div>
        <div className="list-table">
                <table >
                    <tbody >             
                            {state.filteredData && state.filteredData.map((item:any, index:any) => {
                                return(
                                    
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{item.first_name}</td>
                                            <td>{item.email}</td>
                                            <td></td>
                                            <td></td>
                                            {/* <td>{item.mobile}</td>
                                            <td>{item.address}</td>
                                            <td>{item.action}</td> */}
                                        </tr>
                                ) 
                            })}
                        </tbody>
            </table>
            </div>
    </div>
  )
}

export default Card
