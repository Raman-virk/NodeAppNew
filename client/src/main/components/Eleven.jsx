import React, { Component } from "react";
import eastlogo from '../assets/pics/EastVillageLogo.png';
import Chiro from '../assets/Medical/M_Chiro.png';
import Clinic from '../assets/Medical/M_Clinic.png';
import Heart from '../assets/Medical/M_Heart.png';
import Homecare from '../assets/Medical/M_Homecare.png';
import Pharmacy from '../assets/Medical/M_Pharmacy.png';
import Vision from '../assets/Medical/M_Vision.png';
import DepartmentalStore2 from '../assets/DepartmentalStores/DepartmentalStore2.png';
import DepartmentLogo from '../assets/DepartmentalStores/DepartmentLogo.png';
import Reason from "./Reason";
import FifthPage from "./FifthPage";
import '../App.css';
import Medical2 from '../assets/pics/Medical2.png';
import MedicalLogo from '../assets/Medical/Medical_Logo.png'

class ElevenPage extends Component{ 
    state={
        logoSRC:'',
        showPageMain:true,
        showPageBack:false,
        showPageReason:false,
        Page:"Eleven",
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
        <div id="Eleventh">
            <div style={{float:'left', marginLeft:'20px'}} > <button className="btn btn-lg btn-primary m-2" onClick={this.GoBack}>BACK</button></div>
        <div className="logo">   
          <img src={Medical2} className="rounded float-left ml-5"  alt="..." height="200" width="200"></img>
          <img src={Medical2} className="rounded float-right mr-5" alt="..." height="200" width="200"></img>
          <img src={eastlogo} className="rounded mx-auto d-block" alt="..." height="200" width="50%"></img>
          <br/>
        <center>
            <img src={MedicalLogo} className="img-fluid ml-5 mr-5" alt="..." height="100"  width="50%"></img>
        </center>
        <br/>
        </div>
        <div id="logos">
            <center>
        <table>
                <tr>
                    <td>
                    <span><img src={Chiro} height="300" width="500" hspace="20" vspace="20" onClick={()=>this.ReasonPage(Chiro,'Chiro')}></img></span>
                    </td>
                    <td>
                    <span><img src={Clinic} height="300" width="500" hspace="20" vspace="20" onClick={()=>this.ReasonPage(Clinic,'Clinic')}></img></span>
                    </td>
                </tr>
                <tr>
                    <td>
                    <span><img src={Heart} height="300" width="500" hspace="20" vspace="40" onClick={()=>this.ReasonPage(Heart,'Heart')}></img></span>
                    </td>
                    <td>
                    <span><img src={Homecare} height="300" width="500" hspace="20" vspace="40" onClick={()=>this.ReasonPage(Homecare,'Homecare')}></img></span>   
                    </td>
                </tr>
                <tr>
                    <td>
                    <span><img  src={Pharmacy} height="300" width="500" hspace="20" vspace="20" onClick={()=>this.ReasonPage(Pharmacy,'Pharmacy')}></img></span>
                    </td>
                    <td>
                    <span><img src={Vision} height="300" width="500" hspace="20" vspace="20" onClick={()=>this.ReasonPage(Vision,'Vision')}></img></span>
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
    
    export default ElevenPage;