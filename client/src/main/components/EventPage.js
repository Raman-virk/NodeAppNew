import React, { Component } from "react";
import eastlogo from '../assets/pics/EastVillageLogo.png';
import construction from '../assets/front/construction-banner.png'
import FrontPage from './FrontPage';
import { connect } from 'react-redux';
import { Input } from 'antd';
import axios from "axios";

const { TextArea } = Input;
class EventsPage extends React.Component{
    state={
        showFrontPage:false,
        showEventPage:true,
        verified:false,
        edit:false,
        eventList:'',
        loginMsg:''
    }

    componentDidMount(){
        console.log(this.props.user);
            window.scroll(0,0);
            axios.post('/details/getDetail',{Name:'Events'})
            .then((response)=>{
                if(response.data.length>0){
                    this.setState({eventList:response.data[0].Value,edit:false,verified:false},()=>{
                        console.log(this.state.eventList);
                    })    
                }
                this.setState({showFrontPage:false,showEventPage:true,loginMsg:''}) 
                
            })
   
           
       }

    getFrontPage=()=>{
        this.setState({showEventPage:false,showFrontPage:true});
    }

    login = () =>{
        let user=document.getElementById('adminuser').value;
        let pass = document.getElementById('adminpass').value;
        axios.post('/admins/getAdminUser',{UserName:user,Password:pass})
        .then((res)=>{
            document.getElementById('adminuser').value='';
            document.getElementById('adminpass').value='';
            if(res.data.length==1){
        this.setState({verified:true,loginMsg:''},()=>{
             
        });
            }else{
        this.setState({loginMsg:'Not Authorized!',verified:false},()=>{ 
        });
            }
        });
    }

    saveEvents = async() =>{
        let events = document.getElementById('EventArea').value;
        let response =  await axios.post('/details/updateDetail',{Name:'Events', Value:events});
            console.log(response.data);
    }
    editPage = () =>{
        this.setState({edit:true});  
    }
    
    render(){
        
            return(
                <div>
                {this.state.showEventPage?
                <div id="Eight">
                    <div style={{float:'left', marginLeft:'20px'}} > <button className="btn btn-lg btn-primary m-2" onClick={this.getFrontPage}>BACK</button></div>
                    {!this.state.edit?<><div style={{float:'right', marginRight:'20px'}} > <button className="btn btn-lg btn-primary m-2" onClick={this.editPage}>Edit</button></div></>:this.state.verified?<><div style={{float:'right', marginRight:'20px'}} > <button className="btn btn-lg btn-primary m-2" onClick={this.saveEvents}>SAVE</button></div></>:<><div  className='m-2' style={{float:'right'}} ><span style={{textAlign:'center',color:'red'}}>{this.state.loginMsg}</span><br/><span><Input type='text' placeholder='Enter User Name' id='adminuser'/></span><br/><span><Input type='text' id='adminpass' placeholder='Enter password to Edit'/></span><br/><span><input type='button' className="btn btn-primary m-2" onClick={this.login} value='Log In to Edit'/></span></div></>}
                <center>
                <div className="logo">   
                  <img src={eastlogo} className="rounded mx-auto d-block" alt="..." height="100" width="50%"></img>
                  <br/>
                  <h1> East Village Events</h1>
                  <TextArea style={{width:'100%',height:'100%',fontWeight:'bold',minHeight:'500px'}} disabled={!this.state.verified} autoSize={true} id='EventArea'></TextArea>
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
 export default connect(mapStateToProps)(EventsPage);
