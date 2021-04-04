import React, { Component } from "react";
import eastlogo from '../assets/pics/EastVillageLogo.png';
import Graph from '../assets/pics/Graph.png';
import YellowLight from '../assets/pics/YellowLight.png';
import RedLight from '../assets/pics/RedLight.png';
import FirstPage from './FirstPage';
import '../App.css';

class ThirdPage extends Component{
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
        <div id="Third">
             <div style={{float:'left', marginLeft:'20px'}} > <button className="btn btn-lg btn-primary m-2" onClick={this.GoBack}>BACK</button></div>
         <center>
        <div className="logo">
            <img src={eastlogo} className="img-fluid ml-5 mr-5" alt="..." height="100"  width="50%"></img>
        </div>
        <div className="mt-2">
            <h3>Business Areas:  S.E. - S.W. - N.E. - N.W. - Downtown</h3>
        </div>
        <div>
        <img src={Graph} height="600" width="600"></img>
        </div>
        <div>
            <p style={{fontSize:40}}> Business Location: Businesses with multiple locations will be <br/> simply identified by the quadrant. Ex.- "Costco SE"</p>
        </div>
        </center>
        </div>:
   this.state.showBackPage?<FirstPage/>:<span></span>}
   </div>
   )
}}

export default ThirdPage;