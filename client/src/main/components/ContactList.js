import React, { Component } from "react";
import eastlogo from '../assets/pics/EastVillageLogo.png';
import construction from '../assets/front/construction-banner.png'
import FrontPage from './FrontPage';
import { connect } from 'react-redux';
import { Input } from 'antd';
import axios from "axios";

const { TextArea } = Input;
class ContactPage extends React.Component{
    state={
        showFrontPage:false,
        showContactPage:true,
        verified:false,
        edit:false,
        newsList:'LOADING...',
        loginMsg:'',
        check:'ghjnjf',
        key:0,
    }

    componentDidMount(){
           
                    this.setState({showFrontPage:false,showContactPage:true,loginMsg:'',key:1},()=>{
                    }) 
                }
        

    getFrontPage=()=>{
        this.setState({showContactPage:false,showFrontPage:true});
    }

    
    render(){
        
            return(
                <div style={{fontWeight:'bold',fontSize:'150%'}}>
                {this.state.showContactPage?
                <div id="Contact">
                    <div style={{float:'left', marginLeft:'20px'}} > <button className="btn btn-lg btn-primary m-2" onClick={this.getFrontPage}>BACK</button></div>
                   <center>
                <div className="logo">   
                  <img src={eastlogo} className="rounded mx-auto d-block" alt="..." height="100" width="50%"></img>
                  <br/>
                  <h1> East Village Contact List</h1>
                  <h3>EVSA Board Members</h3>
                  <table width='100%' id='ContactTable' style={{border:'1px white solid'}}>
                      <tbody>
                          <tr style={{backgroundColor:'lightgrey'}}><th style={{border:'1px white solid'}}>NAME</th><th style={{border:'1px white solid'}}>TITLE</th></tr>
                          <tr><td style={{border:'1px white solid'}}>Anita Pritchard</td><td style={{border:'1px white solid'}}>Acting President And Vice-President</td></tr>
                          <tr><td style={{border:'1px white solid'}}>Lorraine Blais</td><td style={{border:'1px white solid'}}>Secretary</td></tr>
                          <tr><td style={{border:'1px white solid'}}>Joan Ramsay</td><td style={{border:'1px white solid'}}>Treasurer</td></tr>
                          <tr><td style={{border:'1px white solid'}}>Dorothy Bateman </td><td style={{border:'1px white solid'}}>Ad Hoc Committee Director</td></tr>
                      </tbody>
                  </table>
                  <br/>
                  <br/>
                  <table width='100%' id='ContactTable' style={{border:'1px white solid'}}>
                      <tbody>
                          <tr ><th style={{border:'1px white solid'}}>Consultant</th><th style={{border:'1px white solid'}}>D'Arcy Walsh MSW</th></tr>
                          <tr ><td style={{border:'1px white solid'}}>EVSA Phone</td><td style={{border:'1px white solid'}}>403-399-7443</td></tr>
                          <tr ><td style={{border:'1px white solid'}}>EVSA Email</td><td style={{border:'1px white solid'}}>eastvillagesa@gmail.com</td></tr>
                      </tbody>
                  </table>
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

const mapStateToProps = state => ({
    user:state.user
 })
 export default connect(mapStateToProps)(ContactPage);
