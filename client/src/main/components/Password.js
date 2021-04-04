import React, { Component } from "react";
import eastlogo from '../assets/pics/EastVillageLogo.png';
// import useForm from "react-hook-form";
import Light from '../assets/pics/Light.png';
import FourthPage from "./FourthPage";
import FirstPage from "./FirstPage";
import Login from "./Login";
import { EyeOutlined } from '@ant-design/icons';
import { EyeInvisibleOutlined } from '@ant-design/icons';
import axios from 'axios';
import '../App.css';

class Password extends Component{
    state={
showMainPage: true,
showCorrect:true,
showPageBack:false,
showPassword:false,
refFullName: null,
refMemberID: null,
refNewPassword: null,
errorMsg:'',
color:''
    }

    Reset = () =>{
        document.getElementById('passwordUsername').value="";
        document.getElementById('passwordMembership').value="";
        document.getElementById('passwordNewPassword').value="";
        this.setState({errorMsg:''});

    }

    authenticate = async() =>{
        var FullName = this.state.refFullName.value;
        var MemberID = this.state.refMemberID.value;
        var Password = this.state.refNewPassword.value;
        let  check= /^\w+$/;
        let checkNo= /[0-9]/;
        let checkapt = /[a-z]/;
        let checkAph = /[A-Z]/;
        if(FullName==""||MemberID==""||Password==""){
            this.setState({errorMsg:'Enter all the three values to change the password!',color:'red'},()=>{
                console.log(this.state.errorMsg);
            });
        }else if(Password.length<8){
            this.setState({errorMsg:'Password should contain atleast 8 characters!',color:'red'},()=>{
                console.log(this.state.errorMsg);
            }); 
        }else if(!check.test(Password)){
            this.setState({errorMsg:'Password can only contain letters, numbers or underscore!',color:'red'},()=>{
                console.log(this.state.errorMsg);
            });  
        }
        else if(!checkNo.test(Password)){
            this.setState({errorMsg:'Password must contain atleast 1 number!',color:'red'},()=>{
                console.log(this.state.errorMsg);
            });  
        }
        else if(!checkapt.test(Password)){
            this.setState({errorMsg:'Password must contain atleast 1 lowercase letter!',color:'red'},()=>{
                console.log(this.state.errorMsg);
            });  
        }
        else if(!checkAph.test(Password)){
            this.setState({errorMsg:'Password must contain atleast 1 Uppercase letter!',color:'red'},()=>{
                console.log(this.state.errorMsg);
            });  
        }

        else{
            this.setState({errorMsg:''});
            console.log('adding user');
            let response = await axios.post('http://localhost:5000/users/changePassword',{fullname:FullName,memberID:MemberID});
           console.log(response.data);
           let res = response.data;
            if(res.length==0){
            this.setState({errorMsg:'Cannot find this User - Register First!',color:'red'});
           }else{
               console.log(res[0]._id);
               let newid = res[0]._id;
            let updated = await axios.post('http://localhost:5000/users/updatePassword',{id:newid,newpassword:Password});    
            console.log(updated.data);
            this.setState({errorMsg:'Password changed!',color:'green'});  
            document.getElementById('passwordUsername').value="";
            document.getElementById('passwordMembership').value="";
            document.getElementById('passwordNewPassword').value="";
           }
            console.log(response);
            console.log('user added');
        }}
    

    handleRegister=(event) =>{
        this.setState({showMainPage: false, showRegister: true});
    }

    GoBack = (event) =>{
        this.setState({showMainPage: false, showRegister: false,showPageBack:true}); 
    }

    forgotPassword = () =>{
        this.setState({showMainPage: false, showRegister: false,showPageBack:false, showPassword: true}) 
    }
    toggleIcon=()=>{
        this.setState({showPassword:!this.state.showPassword});
    }

    render(){
    return(
        <div style={{backgroundColor:'gray'}}>
            {this.state.showMainPage?
        <div id="Login">
             <div style={{float:'left', marginLeft:'20px'}} > <button className="btn btn-lg btn-primary m-2" onClick={this.GoBack}>BACK</button></div>
            <center>
        <div className="logo">
            <img src={eastlogo} className="img-fluid ml-5 mr-5" alt="..." height="100"  width="50%"></img>
        </div>
        <div style={{fontSize:30}}>
            <br/>
            <h1> Change Password......</h1>
            <br/>
             <div style={{color:this.state.color}}>{this.state.errorMsg}</div>
          <br/>
          <center>
          <table>
              <tbody>
                  <tr>
         <td> Enter Full Name </td><td>  <input type="text" defaultValue="" id="passwordUsername" autoComplete="off" ref={el => this.state.refFullName = el}/></td></tr>
         <tr><td>   EVSA Membership #  </td><td> <input type="text" defaultValue=""  id="passwordMembership" autoComplete="off" ref={el => this.state.refMemberID = el}/></td> </tr>
            
           <tr><td> New Password  </td><td> <input type={this.state.showPassword?'text':'password'} defaultValue="" autoComplete="off" id="passwordNewPassword" autoComplete="off"  ref={el => this.state.refNewPassword = el}/></td><td>{this.state.showPassword?<span onClick={this.toggleIcon}><EyeInvisibleOutlined/></span>:<span onClick={this.toggleIcon}><EyeOutlined/></span>}</td></tr>
           </tbody>
           </table>
           </center>
           <br/>
        
            <button type="button"  style={{backgroundColor:'green',height:'50px',width:'80%'}} id="submit" onClick={this.authenticate}>SUBMIT</button><br/>
            <button type="button"  style={{backgroundColor:'blue',height:'50px',width:'80%'}} id="reset" onClick={this.Reset}>RESET</button>

        </div>
        </center>
        <br/><br/><br/>
        <div style={{height:'20%', width:'100%',backgroundColor:'gray'}}></div>
        </div>:
        this.state.showPageBack?<Login/>:<span></span>}
        </div>
    )
}}

export default Password;