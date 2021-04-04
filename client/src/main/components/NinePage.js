import React, { Component } from "react";
import eastlogo from '../assets/pics/EastVillageLogo.png';
import Bell from '../assets/CellTv/Bell.png';
import Cell from '../assets/CellTv/cell.png';
import Chatr from '../assets/CellTv/Chatr.png';
import Fido from '../assets/CellTv/Fido.png';
import Freedom from '../assets/CellTv/Freedom.png';
import Internet from '../assets/CellTv/Internet.png';
import Koodo from '../assets/CellTv/Koodo.png';
import Lucky from '../assets/CellTv/Lucky_Mobile.png';
import PublicMobile from '../assets/CellTv/Public_Mobile.png';
import Rogers from '../assets/CellTv/Rogers.png';
import Telus from '../assets/CellTv/Telus.png';
import Tv from '../assets/CellTv/Tv.png';
import Virgin from '../assets/CellTv/Virgin.png';
import CellLogo from '../assets/CellTv/CellLogo.png';
import Reason from "./Reason";
import FifthPage from "./FifthPage";
import '../App.css';

class NinePage extends Component{ 
    state={
        logoSRC:'',
        showPageMain:true,
        showPageBack:false,
        showPageReason:false,
        Page:'NinePage',
        logoName:''

    }

    ReasonPage=(src,name)=>{
        this.setState({showPageMain:false,showPageReason:true,logoSRC:src, logoName:name});
    }

    GoBack= (event) =>{
        this.setState({showPageBack:true,showPageReason:false,showPageMain:false,logoSRC:''},()=>{
            console.log(this.state.showPageMain);
            console.log(this.state.showPageReason);
        });  
        
    }
    render(){
    return(
        <div>
        {this.state.showPageMain?
        <div id="Nine">
            <div style={{float:'left', marginLeft:'20px'}} > <button className="btn btn-lg btn-primary m-2" onClick={this.GoBack}>BACK</button></div>
        <div className="logo">   
          <img src={Cell} className="rounded float-left ml-5"  alt="..." height="400" width="200"></img>
          <img src={Internet} className="rounded float-right mr-5" alt="..." height="200" width="200"></img>
          <img src={eastlogo} className="rounded mx-auto d-block" alt="..." height="200" width="50%"></img>
          <img src={Tv} className="rounded mx-auto d-block" alt="..." height="200" width="400" vspace="40"></img>
          <br/>
        <center>
            <img src={CellLogo} className="img-fluid ml-5 mr-5" alt="..." height="100"  width="50%"></img>
        </center>
        <br/>
        </div>
        <div id="logos">
            <center>
        <table>
                <tr>
                    <td>
                    <span><img src={Bell} height="300" width="500" hspace="20" vspace="20" onClick={()=>this.ReasonPage(Bell,'Bell')}></img></span>
                    </td>
                    <td>
                    <span><img src={Rogers} height="300" width="500" hspace="20" vspace="20" onClick={()=>this.ReasonPage(Rogers,'Rogers')}></img></span>
                    </td>
                </tr>
                <tr>
                    <td>
                    <span><img src={Virgin} height="300" width="500" hspace="20" vspace="40" onClick={()=>this.ReasonPage(Virgin,'Virgin')}></img></span>
                    </td>
                    <td>
                    <span><img src={Telus} height="300" width="500" hspace="20" vspace="40" onClick={()=>this.ReasonPage(Telus,'Telus')}></img></span>   
                    </td>
                </tr>
                <tr>
                    <td>
                    <span><img src={Koodo} height="300" width="500" hspace="20" vspace="20" onClick={()=>this.ReasonPage(Koodo,'Koodo')}></img></span>
                    </td>
                    <td>
                    <span><img src={Fido} height="300" width="500" hspace="20" vspace="20" onClick={()=>this.ReasonPage(Fido,'Fido')}></img></span>
                    </td>
                </tr>
                <tr>
                    <td>
                    <span><img src={Freedom} height="300" width="500" hspace="20" vspace="20" onClick={()=>this.ReasonPage(Freedom,'Freedom')}></img></span>
                    </td>
                    <td>
                    <span><img src={Chatr} height="300" width="500" hspace="20" vspace="20" onClick={()=>this.ReasonPage(Chatr,'Chatr')}></img></span>
                    </td>
                </tr>
                <tr>
                    <td>
                    <span><img src={PublicMobile} height="300" width="500" hspace="20" vspace="20" onClick={()=>this.ReasonPage(PublicMobile,'PublicMobile')}></img></span>
                    </td>
                    <td>
                    <span><img src={Lucky} height="300" width="500" hspace="20" vspace="20" onClick={()=>this.ReasonPage(Lucky,'Lucky')}></img></span>
                    </td>
                </tr>
                </table>
                   
                    </center>
            </div>
        </div> :
        this.state.showPageReason?
        <Reason logo={this.state.logoSRC} Page={this.state.Page} Name={this.state.logoName}/>:
        this.state.showPageBack?
        <FifthPage/>:""}
        </div> )
    }}
    
    export default NinePage;