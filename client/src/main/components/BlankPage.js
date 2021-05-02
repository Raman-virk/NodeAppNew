import React, { Component } from "react";
import eastlogo from '../assets/pics/EastVillageLogo.png';
import construction from '../assets/front/construction-banner.png'
import FrontPage from './FrontPage';


class BlankPage extends React.Component{
    state={
        showFrontPage:false,
        showBlankPage:true,
    }

    componentDidMount(){
        this.setState({showFrontPage:false,showBlankPage:true}) 
       }

    getFrontPage=()=>{
        this.setState({showBlankPage:false,showFrontPage:true});
    }
    render(){
            return(
                <div>
                {this.state.showBlankPage?
                <div id="Eight">
                    <div style={{float:'left', marginLeft:'20px'}} > <button className="btn btn-lg btn-primary m-2" onClick={this.getFrontPage}>BACK</button></div>
                <center>
                <div className="logo">   
                  <img src={eastlogo} className="rounded mx-auto d-block" alt="..." height="100" width="50%"></img>
                  <br/>
                  <br/>
                  <img src={construction} className='m-2' height="400" width="75%"/>
                  <br/>

                </div>
                </center>
                </div>
                 :
                 this.state.showFrontPage?
                 <FrontPage/>:""
                 }
                 </div>
                );
                }
}
export default BlankPage;