import React, { Component } from "react";
import eastlogo from '../assets/pics/EastVillageLogo.png';
import Coop from '../assets/GroceryStores/Co-op.png';
import GroceryLogo from '../assets/GroceryStores/GroceryLogo.png';
import MomPopGroc from '../assets/GroceryStores/MomPopGroc.png';
import NoFrills from '../assets/GroceryStores/No-Frills.png';
import SaveFood from '../assets/GroceryStores/Save-On-Foods.png';
import Safeway from '../assets/GroceryStores/Safeway.png';
import Sobeys from '../assets/GroceryStores/Sobeys.png';
import SuperStore from '../assets/GroceryStores/SuperStore.png';
import Grocery2 from '../assets/GroceryStores/Grocery2.png';
import Reason from "./Reason";
import FifthPage from "./FifthPage";
import '../App.css';


class SevenPage extends Component{ 
    state={
        logoSRC:'',
        showPageMain:true,
        showPageBack:false,
        showPageReason:false,
        Page:'SevenPage',
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
        <div id="Seventh">
            <div style={{float:'left', marginLeft:'20px'}} > <button className="btn btn-lg btn-primary m-2" onClick={this.GoBack}>BACK</button></div>
        <div className="logo">   
          <img src={Grocery2} className="rounded float-left ml-5"  alt="..." height="200" width="200"></img>
          <img src={Grocery2} className="rounded float-right mr-5" alt="..." height="200" width="200"></img>
          <img src={eastlogo} className="rounded mx-auto d-block" alt="..." height="200" width="50%"></img>
           <br/>
        <center>
            <img src={GroceryLogo} className="img-fluid ml-5 mr-5" alt="..." height="100"  width="50%"></img>
        </center>
        <br/>
        </div>
        <div className="GroContainer">
        <img src={Coop} height="300" width="300" className="Groc-item G1" onClick={()=>this.ReasonPage(Coop,'Coop')}></img>
        <img src={Safeway} height="300" width="300" className="Groc-item G2" onClick={()=>this.ReasonPage(Safeway,'Safeway')}></img>
        <img src={Sobeys} height="300" width="300"  className="Groc-item G3" onClick={()=>this.ReasonPage(Sobeys,'Sobeys')}></img>
        <img src={SuperStore} height="300" width="300"  className="Groc-item G4" onClick={()=>this.ReasonPage(SuperStore,'SuperStore')}></img>
        <img src={NoFrills} height="300" width="300"  className="Groc-item G5" onClick={()=>this.ReasonPage(NoFrills,'NoFrills')}></img>
        <img src={SaveFood} height="300" width="300"  className="Groc-item G6" onClick={()=>this.ReasonPage(SaveFood,'SaveFood')}></img>
        <img src={MomPopGroc} height="300" width="300"  className="Groc-item G7" onClick={()=>this.ReasonPage(MomPopGroc,'MomPopGroc')}></img>

            </div>
        </div> :
        this.state.showPageReason?
        <Reason logo={this.state.logoSRC} Page={this.state.Page} Name={this.state.logoName}/>:
        this.state.showPageBack?
        <FifthPage/>:""}

        </div> )
    }}
    
    export default SevenPage;