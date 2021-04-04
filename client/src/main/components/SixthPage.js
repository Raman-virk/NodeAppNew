import React, { Component } from "react";
import eastlogo from '../assets/pics/EastVillageLogo.png';
import Boston from '../assets/Restuarants/Boston.png';
import Cora from '../assets/Restuarants/Cora.png';
import MomPopRest from '../assets/Restuarants/MomPopRest.png';
import Montana from '../assets/Restuarants/Montana.png';
import OliveGarden from '../assets/Restuarants/OliveGarden.png';
import PizzaHut from '../assets/Restuarants/PizzaHut.png';
import Swiss from '../assets/Restuarants/Swiss.png';
import TonyRoma from '../assets/Restuarants/TonyRoma.png';
import Diner2 from '../assets/pics/Diner2.png';
import RestaurantLogo from '../assets/Restuarants/RestaurantLogo.png';
import Reason from "./Reason";
import '../App.css';
import FifthPage from "./FifthPage";

class SixthPage extends Component{ 
    state={
        showPageMain:true,
        showPageBack:false,
        showPageReason:false,
        logoSRC:'',
        Page:'SixthPage',
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
        <div id="Sixth">
           <div style={{float:'left', marginLeft:'20px'}} > <button className="btn btn-lg btn-primary m-2" onClick={this.GoBack}>BACK</button></div>
           <br/>
        <div className="logo">   
          <img src={Diner2} className="rounded float-left ml-5"  alt="..." height="200" width="200"></img>
          <img src={Diner2} className="rounded float-right mr-5" alt="..." height="200" width="200"></img>
          <img src={eastlogo} className="rounded mx-auto d-block" alt="..." height="200" width="50%"></img>
          <br/>
        <center>
            <img src={RestaurantLogo} className="img-fluid ml-5 mr-5" alt="..." height="100"  width="30%"></img>
        </center>
        <br/>
        </div>
        <div className="RestContainer">
        <img src={OliveGarden} height="300" width="300" className="Rest-item R1" onClick={()=>this.ReasonPage(OliveGarden,'OliveGarden')}></img>
        <img src={Swiss} height="300" width="300" className="Rest-item R2" onClick={()=>this.ReasonPage(Swiss,'Swiss')}></img>
        <img src={Montana} height="300" width="300"  className="Rest-item R3" onClick={()=>this.ReasonPage(Montana,'Montana')}></img>
        <img src={TonyRoma} height="300" width="300"  className="Rest-item R4" onClick={()=>this.ReasonPage(TonyRoma,'TonyRoma')}></img>
        <img src={Boston} height="300" width="300"  className="Rest-item R5" onClick={()=>this.ReasonPage(Boston,'Boston')}></img>
        <img src={Cora} height="300" width="300"  className="Rest-item R6" onClick={()=>this.ReasonPage(Cora,'Cora')}></img>
        <img src={MomPopRest} height="300" width="300"  className="Rest-item R7" onClick={()=>this.ReasonPage(MomPopRest,'MomPopRest')}></img>
        <img src={PizzaHut} height="300" width="300" className="Rest-item R8" onClick={()=>this.ReasonPage(PizzaHut,'PizzaHut')}></img>
        
                   
            </div>
        </div>:
        this.state.showPageReason?
        <Reason logo={this.state.logoSRC} Page={this.state.Page} Name={this.state.logoName}/>:
        this.state.showPageBack?
        <FifthPage/>:""}

        </div> )
    }
}
    
    export default SixthPage;