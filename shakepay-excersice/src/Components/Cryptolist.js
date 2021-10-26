import React, {Component} from 'react';
import logo from "../Assets/logo.svg";
import Bitcoin from "./Bitcoin";
import Ethereum from "./Ethereum";
import Cad from "./Cad";

class Cryptolist extends Component {

    state= {
        initialvalue : 8442,
        Bitcoindata: [],
        Etheriumdata :[] ,
        caddata :[]
    }

    componentDidMount() {
        fetch('https://shakepay.github.io/programming-exercise/web/transaction_history.json').then(res => res.json()).then(data =>{
            //console.log(data)
            const caddata =    data.filter(x => x.currency === 'CAD' );
            const Bitcoindata =    data.filter(x => x.currency === 'BTC' )
            const  Etheriumdata  =    data.filter(x => x.currency === 'ETH' )

            this.setState({...this.state  , Bitcoindata, Etheriumdata , caddata} ,()=>{
              //  console.log('Eth' ,this.state.Etheriumdata)
                //console.log( 'btc'  ,this.state.Bitcoindata)
                //console.log(  'cad' ,this.state.caddata)
            })
        })
    }

    render() {
        return ( <>
            <div>
                <img src={logo} alt="Logo" />
            </div>
        <div style={{ padding :'5px' , borderBottom :'0.5px solid grey'}}>
            $ <span style={{fontWeight:'bold', fontSize:'30px'}}> {this.state.initialvalue}</span>
        </div>
                <div>
                    {/*
                    {this.state.exchangedata  ?
                        this.state.exchangedata.map(x =>{
                            return (
                                <ul key={x.index}>
                                    <li>  {x.amount}{x.currency} {x.direction}</li>
                                </ul>
                            )

                        } )


                        : null}*/}
                    <Cad  data={ this.state.caddata}/>
                  <Bitcoin  data ={this.state.Bitcoindata}/>
                    <Ethereum  data={this.state.Etheriumdata}/>

                </div>
        </>
        );
    }
}



export default Cryptolist;