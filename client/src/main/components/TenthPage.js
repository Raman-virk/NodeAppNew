import React, { Component } from "react";
import eastlogo from '../assets/pics/EastVillageLogo.png';
import Bay from '../assets/DepartmentalStores/Bay.png';
import BedBath from '../assets/DepartmentalStores/BedBath.png';
import BestBuy from '../assets/DepartmentalStores/BestBuy.png';
import DepartmentalStore2 from '../assets/DepartmentalStores/DepartmentalStore2.png';
import DepartmentLogo from '../assets/DepartmentalStores/DepartmentLogo.png';
import HomeDepot from '../assets/DepartmentalStores/HomeDepot.png';
import LondonDrugs from '../assets/DepartmentalStores/LondonDrugs.png';
import Rona from '../assets/DepartmentalStores/Rona.png';
import Shoppers from '../assets/DepartmentalStores/Shoppers.png';
import Staples from '../assets/DepartmentalStores/Staples.png';
import Vision from '../assets/DepartmentalStores/Vision.png';
import Walmart from '../assets/DepartmentalStores/Walmart.png';
import Winners from '../assets/DepartmentalStores/Winners.png';
import Reason from "./Reason";
import FifthPage from "./FifthPage";
import '../App.css';

class TenthPage extends Component{ 
    state={
        logoSRC:'',
        showPageMain:true,
        showPageBack:false,
        showPageReason:false,
        Page:"TenthPage",
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
          <img src={DepartmentalStore2} className="rounded float-left ml-5"  alt="..." height="200" width="200"></img>
          <img src={DepartmentalStore2} className="rounded float-right mr-5" alt="..." height="200" width="200"></img>
          <img src={eastlogo} className="rounded mx-auto d-block" alt="..." height="200" width="50%"></img>
          <br/>
        <center>
            <img src={DepartmentLogo} className="img-fluid ml-5 mr-5" alt="..." height="100"  width="50%"></img>
        </center>
        <br/>
        </div>
        <div id="logos">
            <center>
        <table>
                <tr>
                    <td>
                    <span><img src={Bay} height="300" width="500" hspace="20" vspace="20" onClick={()=>this.ReasonPage(Bay,'Bay')}></img></span>
                    </td>
                    <td>
                    <span><img src={Walmart} height="300" width="500" hspace="20" vspace="20" onClick={()=>this.ReasonPage(Walmart,'Walmart')}></img></span>
                    </td>
                </tr>
                <tr>
                    <td>
                    <span><img src={LondonDrugs} height="300" width="500" hspace="20" vspace="40" onClick={()=>this.ReasonPage(LondonDrugs,'LondonDrugs')}></img></span>
                    </td>
                    <td>
                    <span><img src={Shoppers} height="300" width="500" hspace="20" vspace="40" onClick={()=>this.ReasonPage(Shoppers,'Shoppers')}></img></span>   
                    </td>
                </tr>
                <tr>
                    <td>
                    <span><img id="outline" src={Winners} height="300" width="500" hspace="20" vspace="20" onClick={()=>this.ReasonPage(Winners,'Winners')}></img></span>
                    </td>
                    <td>
                    <span><img src={BedBath} height="300" width="500" hspace="20" vspace="20" onClick={()=>this.ReasonPage(BedBath,'BedBath')}></img></span>
                    </td>
                </tr>
                <tr>
                    <td>
                    <span><img id="outline" src={BestBuy} height="300" width="500" hspace="20" vspace="20" onClick={()=>this.ReasonPage(BestBuy,'BestBuy')}></img></span>
                    </td>
                    <td>
                    <span><img src={Staples} height="300" width="500" hspace="20" vspace="20" onClick={()=>this.ReasonPage(Staples,'Staples')}></img></span>
                    </td>
                </tr>
                <tr>
                    <td>
                    <span><img id="outline" src={HomeDepot} height="300" width="500" hspace="20" vspace="20" onClick={()=>this.ReasonPage(HomeDepot,'HomeDepot')}></img></span>
                    </td>
                    <td>
                    <span><img src={Vision} height="300" width="500" hspace="20" vspace="20" onClick={()=>this.ReasonPage(Vision,'Vision')}></img></span>
                    </td>
                </tr>
                </table>
                    <span><img src={Rona} height="300" width="500" hspace="20" vspace="20" onClick={()=>this.ReasonPage(Rona,'Rona')}></img></span> 
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
    
    export default TenthPage;