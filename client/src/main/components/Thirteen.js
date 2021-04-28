import React, { Component } from "react";
import eastlogo from '../assets/pics/EastVillageLogo.png';
import AllState from '../assets/Banks/B_Allstate.png';
import AMA from '../assets/Banks/B_AMA.png';
import ATB from '../assets/Banks/B_ATB.png';
import Bank2 from '../assets/pics/Bank2.png';
import BanksLogo from '../assets/Banks/BanksLogo.png';
import CIBC from '../assets/Banks/B_CIBC.png';
import CWB from '../assets/Banks/B_CWB.png';
import FCalgary from '../assets/Banks/B_FCalgary.png';
import Intact from '../assets/Banks/B_INTACT.png';
import Operators from '../assets/Banks/B_Operators.png';
import RBC from '../assets/Banks/B_RBC.png';
import Scotia from '../assets/Banks/B_Scotia.png';
import Servus from '../assets/Banks/B_Servus.png';
import TD from '../assets/Banks/B_TD.png';
import Reason from "./Reason";
import FifthPage from "./FifthPage";
import '../App.css';

class Thirteen extends Component{ 
    state={
        logoSRC:'',
        showPageMain:true,
        showPageBack:false,
        showPageReason:false,
        Page:"Thirteen",
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
        <div id="Tenth">
            <div style={{float:'left', marginLeft:'20px'}} > <button className="btn btn-lg btn-primary m-2" onClick={this.GoBack}>BACK</button></div>
        <div className="logo">   
          <img src={Bank2} className="rounded float-left ml-5"  alt="..." height="200" width="200"></img>
          <img src={Bank2} className="rounded float-right mr-5" alt="..." height="200" width="200"></img>
          <img src={eastlogo} className="rounded mx-auto d-block" alt="..." height="200" width="50%"></img>
          <br/>
        <center>
            <img src={BanksLogo} className="img-fluid ml-5 mr-5" alt="..." height="100"  width="50%"></img>
        </center>
        <br/>
        </div>
        <div id="logos">
            <center>
        <table>
                <tr>
                    <td>
                    <span><img src={TD} height="300" width="500" hspace="20" vspace="20" onClick={()=>this.ReasonPage(TD,'TD')}></img></span>
                    </td>
                    <td>
                    <span><img src={Scotia} height="300" width="500" hspace="20" vspace="20" onClick={()=>this.ReasonPage(Scotia,'Scotia')}></img></span>
                    </td>
                </tr>
                <tr>
                    <td>
                    <span><img src={ATB} height="300" width="500" hspace="20" vspace="40" onClick={()=>this.ReasonPage(ATB,'ATB')}></img></span>
                    </td>
                    <td>
                    <span><img src={CIBC} height="300" width="500" hspace="20" vspace="40" onClick={()=>this.ReasonPage(CIBC,'CIBC')}></img></span>   
                    </td>
                </tr>
                <tr>
                    <td>
                    <span><img  src={RBC} height="300" width="500" hspace="20" vspace="20" onClick={()=>this.ReasonPage(RBC,'RBC')}></img></span>
                    </td>
                    <td>
                    <span><img src={FCalgary} height="300" width="500" hspace="20" vspace="20" onClick={()=>this.ReasonPage(FCalgary,'FCalgary')}></img></span>
                    </td>
                </tr>
                <tr>
                    <td>
                    <span><img src={Intact} height="300" width="500" hspace="20" vspace="20" onClick={()=>this.ReasonPage(Intact,'Intact')}></img></span>
                    </td>
                    <td>
                    <span><img src={Operators} height="300" width="500" hspace="20" vspace="20" onClick={()=>this.ReasonPage(Operators,'Operators')}></img></span>
                    </td>
                </tr>
                <tr>
                    <td>
                    <span><img  src={CWB} height="300" width="500" hspace="20" vspace="20" onClick={()=>this.ReasonPage(CWB,'CWB')}></img></span>
                    </td>
                    <td>
                    <span><img src={AMA} height="300" width="500" hspace="20" vspace="20" onClick={()=>this.ReasonPage(AMA,'AMA')}></img></span>
                    </td>
                </tr>
                <tr>
                    <td>
                    <span><img  src={AllState} height="300" width="500" hspace="20" vspace="20" onClick={()=>this.ReasonPage(AllState,'AllState')}></img></span>
                    </td>
                    <td>
                    <span><img src={Servus} height="300" width="500" hspace="20" vspace="20" onClick={()=>this.ReasonPage(Servus,'Servus')}></img></span>
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
    }
}
    
    export default Thirteen;