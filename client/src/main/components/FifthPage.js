import React, { Component } from "react";
import eastlogo from '../assets/pics/EastVillageLogo.png';
import AutoRepair2 from '../assets/pics/AutoRepair2.png';
import CenterCircle from '../assets/pics/CenterCircle.png';
import Diner2 from '../assets/pics/Diner2.png';
import Que from '../assets/pics/Que.png';
import DepartmentalStore2 from '../assets/pics/DepartmentalStore2.png';
import Good from '../assets/pics/Good.png';
import Bad from '../assets/pics/Bad.png';
import Bank2 from '../assets/pics/Bank2.png';
import Grocery2 from '../assets/pics/Grocery2.png';
import Medical2 from '../assets/pics/Medical2.png';
import Other2 from '../assets/pics/Other2.png';
import Think from '../assets/pics/Think.png';
import TvCell2 from '../assets/pics/TvCell2.png';
import FigureImage from "react-bootstrap/esm/FigureImage";
import FigureCaption from "react-bootstrap/esm/FigureCaption";
import { Figure } from "react-bootstrap";
import '../App.css';
import TenthPage from "./TenthPage";
import SeventhPage from "./SevenPage";
import SixthPage from "./SixthPage";
import EightPage from "./EightPage";
import NinePage from "./NinePage";


class FifthPage extends React.Component{ 
    state={
        showPageFifth:true,
        showPageSixth: false,
        showPageSeventh : false,
        showPageEight : false,
        showPageNine: false,
        showPageTen : false,
    }

    getDept= (event) =>{
        this.setState({showPageFifth: false ,showPageTen: true});
    }
    getGroc= (event) =>{
        this.setState({showPageFifth: false ,showPageSeventh: true});
    }
    getAuto= (event) =>{
        this.setState({showPageFifth: false ,showPageEight: true});
    }
    getCell= (event) =>{
        this.setState({showPageFifth: false ,showPageNine: true});
    }
    getRest= (event) =>{
        this.setState({showPageFifth: false ,showPageSixth: true});
    }
   
    render(){
        return(
            <div>
                {this.state.showPageFifth?
        <div id="Fifth">
            <center>
        <div className="logo">
            <img src={eastlogo} className="img-fluid ml-5 mr-5" alt="..." height="100"  width="50%"></img>
        </div>
      
        <h2> Business Groups: </h2>
        </center>
        <div className="ImageContainer">
           <Figure className="mainFigure" onClick={this.getDept}><Figure.Image src={DepartmentalStore2} height={200} width={600}/><Figure.Caption style={{fontSize:40, color:"white"}}> Department Store</Figure.Caption></Figure>
           <Figure className="mainFigure" onClick={this.getGroc}><Figure.Image src={Grocery2} height={200} width={600}/><Figure.Caption style={{fontSize:40, color:"white"}}> Grocery Store</Figure.Caption></Figure>
           <Figure className="mainFigure" onClick={this.getAuto}><Figure.Image src={AutoRepair2} height={200} width={600}/><Figure.Caption style={{fontSize:40, color:"white"}}> Auto Repair</Figure.Caption></Figure>
           <Figure className="mainFigure" onClick={this.getCell}><Figure.Image src={TvCell2} height={200} width={600}/><Figure.Caption style={{fontSize:40, color:"white"}}> Cellphone, TV, Internet</Figure.Caption></Figure>
           <Figure className="mainFigure" onClick={this.getRest}><Figure.Image src={Diner2} height={200} width={600}/><Figure.Caption style={{fontSize:40, color:"white"}}> Restaurant</Figure.Caption></Figure>
           <Figure className="mainFigure" ><Figure.Image src={Bank2} height={200} width={600}/><Figure.Caption style={{fontSize:40, color:"white"}}> Banks & Insurance</Figure.Caption></Figure>
           <Figure className="mainFigure"><Figure.Image src={Medical2} height={200} width={600}/><Figure.Caption style={{fontSize:40, color:"white"}}> Medical Services</Figure.Caption></Figure>
           <Figure className="mainFigure"><Figure.Image src={Other2} height={200} width={600}/><Figure.Caption style={{fontSize:40, color:"white"}}> Other businesses</Figure.Caption></Figure>

        </div>
      
        </div>:<span></span>}
        
        <div>
            {this.state.showPageTen?<TenthPage/>:<span></span>}
            {this.state.showPageSeventh?<SeventhPage/>:<span></span>}
            {this.state.showPageEight?<EightPage/>:<span></span>}
            {this.state.showPageNine?<NinePage/>:<span></span>}
            {this.state.showPageSixth?<SixthPage/>:<span></span>}
        </div>
        </div>
    )
}
}

export default FifthPage;