import React from 'react';
import logo from '../Assets/currency cad.svg'
import {
    Link
} from "react-router-dom";
import Cadi from "../Assets/currency cad.svg";

function Cad(props) {
    //console.log(props.data)
    return (
        <div>
            <Link  style={{ textDecoration: 'none' }} to={{
                pathname: "/transactions",
                data: props.data ,
                name : 'Dollars' ,
                image : Cadi
            }}>
            <img className={"currency-logo"}  src={logo } />
              <span className={"items"}>  Dollars </span>
            </Link>
        </div>
    );
}

export default Cad;