import React, { Component } from "react";
import eastlogo from '../assets/pics/EastVillageLogo.png';
import Amazon from '../assets/Others/O_Amazon.png';
import Art from '../assets/Others/O_Art.png';
import Barber from '../assets/Others/O_Barber.png';
import Bussiness from '../assets/Others/O_Bussiness.png';
import Clothing from '../assets/Others/O_Clothing.png';
import DepartmentalStore2 from '../assets/DepartmentalStores/DepartmentalStore2.png';
import DepartmentLogo from '../assets/DepartmentalStores/DepartmentLogo.png';
import Reason from "./Reason";
import FifthPage from "./FifthPage";
import '../App.css';
import Other2 from '../assets/pics/Other2.png';
import OtherBussLogo from '../assets/Others/OtherBussLogo.png'

class TwelvePage extends Component{ 
    state={
        logoSRC:'',
        showPageMain:true,
        showPageBack:false,
        showPageReason:false,
        Page:"Twelve",
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
        <div id="Twelve">
            <div style={{float:'left', marginLeft:'20px'}} > <button className="btn btn-lg btn-primary m-2" onClick={this.GoBack}>BACK</button></div>
        <div className="logo">   
          <img src={Other2} className="rounded float-left ml-5"  alt="..." height="200" width="200"></img>
          <img src={Other2} className="rounded float-right mr-5" alt="..." height="200" width="200"></img>
          <img src={eastlogo} className="rounded mx-auto d-block" alt="..." height="200" width="50%"></img>
          <br/>
        <center>
            <img src={OtherBussLogo} className="img-fluid ml-5 mr-5" alt="..." height="100"  width="50%"></img>
        </center>
        <br/>
        </div>
        <div id="logos">
            <center>
        <table>
                <tr>
                    <td>
                    <span><img src={Barber} height="300" width="500" hspace="20" vspace="20" onClick={()=>this.ReasonPage(Barber,'Barber')}></img></span>
                    </td>
                    <td>
                    <span><img src={Bussiness} height="300" width="500" hspace="20" vspace="20" onClick={()=>this.ReasonPage(Bussiness,'Bussiness')}></img></span>
                    </td>
                </tr>
                <tr>
                    <td>
                    <span><img src={Clothing} height="300" width="500" hspace="20" vspace="40" onClick={()=>this.ReasonPage(Clothing,'Clothing')}></img></span>
                    </td>
                    <td>
                    <span><img src={Art} height="300" width="500" hspace="20" vspace="40" onClick={()=>this.ReasonPage(Art,'Art')}></img></span>   
                    </td>
                </tr>
                </table>
                <span><img  src={Amazon} height="300" width="500" hspace="20" vspace="20" onClick={()=>this.ReasonPage(Amazon,'Amazon')}></img></span>

                 
                     
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
    
    export default TwelvePage;