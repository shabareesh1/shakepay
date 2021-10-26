import React from 'react';
import Btc from '../Assets/currency btc.svg'
import {
    Link
} from "react-router-dom";
import Transaction from "./Transaction";

const Bitcoin = props  => {
   // console.log(props.data)

    return (
        <div >
        <div>
            <Link  style={{ textDecoration: 'none' }} to={{
                pathname: "/transactions",
                data: props.data,
                name : 'BitCoin' ,
                image : Btc
            }}>
             <img className={"currency-logo"} src={Btc} alt={"Bitcoin"} />
            <span className={"items"}> BitCoin </span>
            </Link>
        </div>
        </div>
    );
};

export default Bitcoin;