import React from 'react';
import logo from '../Assets/currency eth.svg'
import {
    Link
} from "react-router-dom";
import Eth from "../Assets/currency eth.svg";
const Ethereum = props => {
    //console.log(props.data)
    return (
        <div>
            <Link  style={{ textDecoration: 'none' }}  to={{
                pathname: "/transactions",
                data: props.data,
                name : 'Ethereum',
                image : Eth
            }}>
<img className={"currency-logo"}  src={logo } />
            <span className={"items"}> Ethereum </span>
                </Link>
        </div>
    );
};



export default Ethereum;