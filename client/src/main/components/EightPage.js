import React, { Component } from "react";
import eastlogo from '../assets/pics/EastVillageLogo.png';
import CanadianTire from '../assets/AutoService/Canadian-Tire.png';
import jiffylube from '../assets/AutoService/jiffylube.png';
import meineke from '../assets/AutoService/meineke.png';
import midas from '../assets/AutoService/midas.png';
import minitlube from '../assets/AutoService/minitlube.png';
import MrLube from '../assets/AutoService/MrLube.png';
import OtherAutoService from '../assets/AutoService/OtherAutoService.png';
import AutoRepair2 from '../assets/pics/AutoRepair2.png';
import AutoRepairLogo from '../assets/AutoService/AutoRepairLogo.png';
import Reason from "./Reason";
import FifthPage from "./FifthPage";
import '../App.css';

class EightPage extends Component{ 
    state={
        logoSRC:'',
        showPageMain:true,
        showPageBack:false,
        showPageReason:false,
        Page:'EightPage',
        logoName:''
    }

    ReasonPage=(src,name)=>{
        this.setState({showPageMain:false,showPageReason:true,logoSRC:src,logoName:name});
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
        <div id="Eight">
            <div style={{float:'left', marginLeft:'20px'}} > <button className="btn btn-lg btn-primary m-2" onClick={this.GoBack}>BACK</button></div>
        <div className="logo">   
          <img src={AutoRepair2} className="rounded float-left ml-5"  alt="..." height="200" width="200"></img>
          <img src={AutoRepair2} className="rounded float-right mr-5" alt="..." height="200" width="200"></img>
          <img src={eastlogo} className="rounded mx-auto d-block" alt="..." height="200" width="50%"></img>
          <br/>
        <center>
            <img src={AutoRepairLogo} className="img-fluid ml-5 mr-5" alt="..." height="100"  width="50%"></img>
        </center>
        <br/>
        </div>

        <div className="AutoContainer">
        <img src={CanadianTire} height="300" width="300" className="Auto-item A1" onClick={()=>this.ReasonPage(CanadianTire,'CanadianTire')}></img>
        <img src={midas} height="300" width="300" className="Auto-item A2" onClick={()=>this.ReasonPage(midas,'midas')}></img>
        <img src={meineke} height="300" width="300"  className="Auto-item A3" onClick={()=>this.ReasonPage(meineke,'meineke')}></img>
        <img src={jiffylube} height="300" width="300"  className="Auto-item A4" onClick={()=>this.ReasonPage(jiffylube,'jiffylube')}></img>
        <img src={minitlube} height="300" width="300"  className="Auto-item A5" onClick={()=>this.ReasonPage(minitlube,'minitlube')}></img>
        <img src={OtherAutoService} height="300" width="300"  className="Auto-item A6" onClick={()=>this.ReasonPage(OtherAutoService,'OtherAutoService')}></img>
        <img src={MrLube} height="300" width="300"  className="Auto-item A7" onClick={()=>this.ReasonPage(MrLube)}></img>
       
            </div>
        </div> :
        this.state.showPageReason?
        <Reason logo={this.state.logoSRC} Page={this.state.Page} logoName={this.state.logoName}/>:
        this.state.showPageBack?
        <FifthPage/>:""}
        </div> )
    }
}
    
    export default EightPage;