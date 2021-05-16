import React, { Component } from "react";
import eastlogo from '../assets/pics/EastVillageLogo.png';
import construction from '../assets/front/construction-banner.png'
import FrontPage from './FrontPage';
import { connect } from 'react-redux';
import { Input } from 'antd';
import axios from "axios";

const { TextArea } = Input;
class ArchievePage extends React.Component{
    state={
        showFrontPage:false,
        showArchievePage:true,
        verified:false,
        edit:false,
        ArchieveList:'',
        loginMsg:''
    }

    componentDidMount(){
        console.log(this.props.user);
            window.scroll(0,0);
            axios.post('/admins/addAdminUsers',{UserName:'evsasenioradmin',Password:'adminpass1234@'})
            .then((res)=>{
            axios.post('/details/getDetail',{Name:'Archieve'})
            .then((response)=>{
                this.setState({ArchieveList:response.data,edit:false,verified:false},()=>{
                    console.log(this.state.ArchieveList);
                })
            })
        this.setState({showFrontPage:false,showArchievePage:true,loginMsg:''}) 
            });
       }

    getFrontPage=()=>{
        this.setState({showArchievePage:false,showFrontPage:true});
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

    saveArchieve = async() =>{
        let Archieve = document.getElementById('ArchieveArea').value;
        let response =  await axios.post('/details/addDetail',{Name:'Archieve', Value:Archieve});
            console.log(response.data);
    }
    editPage = () =>{
        this.setState({edit:true});  
    }
    
    render(){
        
            return(
                <div>
                {this.state.showArchievePage?
                <div id="Eight">
                    <div style={{float:'left', marginLeft:'20px'}} > <button className="btn btn-lg btn-primary m-2" onClick={this.getFrontPage}>BACK</button></div>
                    {!this.state.edit?<><div style={{float:'right', marginRight:'20px'}} > <button className="btn btn-lg btn-primary m-2" onClick={this.editPage}>Edit</button></div></>:this.state.verified?<><div style={{float:'right', marginRight:'20px'}} > <button className="btn btn-lg btn-primary m-2" onClick={this.saveArchieve}>SAVE</button></div></>:<><div  className='m-2' style={{float:'right'}} ><span style={{textAlign:'center',color:'red'}}>{this.state.loginMsg}</span><br/><span><input type='text' placeholder='Enter User Name' id='adminuser'/></span><br/><span><input type='text' id='adminpass' placeholder='Enter password to Edit'/></span><br/><span><input type='button' className="btn btn-primary m-2" onClick={this.login} value='Log In to Edit'/></span></div></>}
                <center>
                <div className="logo">   
                  <img src={eastlogo} className="rounded mx-auto d-block" alt="..." height="100" width="50%"></img>
                  <br/>
                  <h1> East Village Archieve</h1>
                  <TextArea style={{width:'100%',height:'100%',fontWeight:'bold',minHeight:'500px'}} disabled={!this.state.verified} autoSize={true} id='ArchieveArea'></TextArea>
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
 export default connect(mapStateToProps)(ArchievePage);
