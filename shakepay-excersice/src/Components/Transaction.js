import React from 'react';
import cashin from '../Assets/cashin.svg'
import cashout from '../Assets/cashout.svg'
import conversion from '../Assets/exchange.svg'
import Btc from '../Assets/currency btc.svg'

function Transaction(props) {
   // console.log(props.location.image)
    return (
        <div>
            <div  style={{ Margin: '10px'}}>
          <img  src={props.location.image} style={{ MarginTop: '10px'}} />  {props.location.name } Transactions
            </div>
            {props.location.data ?
        props.location.data.map(x =>{
            return (
                <ul style={{ listStyle: 'none'}}>
                    <li> {x.direction === 'credit' ?  (
                        <>
                        <img src={cashin} />  <span style={{ color:'Green'}}>{x.amount}  {x.currency}</span>
                        </>) : (
                    x.direction === 'debit' ?  (
                            <>
                                <img src={cashout} />  <span style={{ color:'Orange'}}>{x.amount}  {x.currency}</span>
                            </>)  :
                        (
                            <>
                                <img src={conversion} />  <span style={{ color:'Blue'}}>{x.amount}  {x.currency}</span>
                            </>)
                ) }   {x.direction} {x.type}</li>
                </ul>
            )
        })
        : null
        }</div>
    );
}

export default Transaction;