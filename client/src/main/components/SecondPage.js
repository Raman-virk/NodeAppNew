import React, { Component } from "react";
import eastlogo from '../assets/pics/EastVillageLogo.png';
import GreenLight from '../assets/pics/GreenLight.png';
import YellowLight from '../assets/pics/YellowLight.png';
import RedLight from '../assets/pics/RedLight.png';
import FirstPage from './FirstPage';
import '../App.css';

class SecondPage extends Component{
    state={
        showMainPage:true,
        showBackPage:false
    }
    GoBack=(event)=>{
        this.setState({showMainPage:false,showBackPage:true});
    }
    render(){
    return(
        <div>
            {this.state.showMainPage?
        <div id="Second">
        <div className="logo">
        <div style={{float:'left', marginLeft:'20px'}} > <button className="btn btn-lg btn-primary m-2" onClick={this.GoBack}>BACK</button></div>
        <center>
            <img src={eastlogo} className="img-fluid ml-5 mr-5" alt="..." height="100"  width="50%"></img>
        </center>
        </div>
        <h1>How It Works: </h1>
        <p style={{fontSize:40}}>This site is driven by EVSA members who shop for products and services in Calgary and want to recommend a business or warn other Seniors about an unsatisfactory experience.</p>
        <div style={{fontSize:30, maxWidth:1000}} >
            <table style={{textAlign:"center"}}>
                <tr>
                    <td>
                    <span><img src={GreenLight} height="200" width="200"></img></span>
                    </td>
                    <td>
                        <p>Green Light- Good place to shop!  Good service, good price would recommend - would return !</p>
                    </td>
                </tr>
                <tr>
                    <td>
                    <span><img src={YellowLight} height="200" width="200"></img></span>
                    </td>
                    <td>
                        <p>Yellow Light- Has one redeemable good point - would recommend but with 'buyer beware!'</p>
                    </td>
                </tr>
                  <tr>
                    <td>
                    <span><img src={RedLight} height="200" width="200"></img></span>
                    </td>
                    <td>
                        <p>Red Light- Would not recommend. Definately would not be returning!</p>
                    </td>
                </tr>
            </table>
        
        </div>
        <div style={{backgroundColor:"orange", fontSize:30}}>
<p> Reason: A space for you to explain why you recommend or warn about the business.</p>
        </div>
        </div>:
        this.state.showBackPage?<FirstPage/>:<span></span>}
        </div>
        )
    }}
    
    export default SecondPage;