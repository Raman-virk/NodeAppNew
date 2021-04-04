import React, { Component } from "react";
import eastlogo from '../assets/pics/EastVillageLogo.png';
// import useForm from "react-hook-form";
import Light from '../assets/pics/Light.png';
import '../App.css';
import Login from './Login';
import { EyeOutlined } from '@ant-design/icons';
import { EyeInvisibleOutlined } from '@ant-design/icons';
import axios from 'axios';


class FourthPage extends Component{
    state={
        showMainPage:true,
        showBackPage:false,
        showPassword:false,
        fullNameRef:null,
        memberRef:null,
        userNameRef:null,
        passwordRef:null,
        errorMsg:'',
        color:'red'
    }
    ResetRegister = () =>{
        document.getElementById('registerName').value="";
        document.getElementById('registerMember').value="";
        document.getElementById('registerUsername').value="";
        document.getElementById('registerPassword').value="";
        this.setState({errorMsg:''});

    }

    addUser= async()=>{
        var FullName = this.state.fullNameRef.value;
        var MemberID = this.state.memberRef.value;
        var UserName = this.state.userNameRef.value;
        var Password = this.state.passwordRef.value;
        let  check= /^\w+$/;
        let checkNo= /[0-9]/;
        let checkapt = /[a-z]/;
        let checkAph = /[A-Z]/;
        if(FullName==""||MemberID==""||UserName==""||Password==""){
            this.setState({errorMsg:'Enter all the four values to Register!',color:'red'},()=>{
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
          let fullnameExist =  await axios.post('http://localhost:5000/users/getFullName',{fullname:FullName});
          if(fullnameExist.data.length>0){
              console.log(fullnameExist.data);
            this.setState({errorMsg:'This Full Name already exist-Login with your username/Password!',color:'red'},()=>{
                console.log(this.state.errorMsg);  
            }); 
          }else{
            let memberIDExist =  await axios.post('http://localhost:5000/users/getMemberID',{memberID:MemberID}); 
            if(memberIDExist.data.length>0){
                console.log(memberIDExist.data);
                this.setState({errorMsg:'This EVSA Member ID already exist-Login with your username/Password!',color:'red'},()=>{
                    console.log(this.state.errorMsg);  
                });  
          }else{
            let usernameExist =  await axios.post('http://localhost:5000/users/getUserName',{username:UserName}); 
            if(usernameExist.data.length>0){
                console.log(usernameExist.data);
                this.setState({errorMsg:'This Username already exist-Login with your username/Password!',color:'red'},()=>{
                    console.log(this.state.errorMsg);  
                }); 
          }else{

            this.setState({errorMsg:''});
        console.log('adding user');
        let response = await axios.post('http://localhost:5000/users/addUser',{FullName:FullName,MemberID:MemberID, UserName:UserName,Password:Password});
       console.log(response.data);
       let res = response.data;
        if(res.includes('Account Created!')){
        this.setState({errorMsg:res,color:'black'},()=>{
            document.getElementById('registerName').value="";
            document.getElementById('registerMember').value="";
            document.getElementById('registerUsername').value="";
            document.getElementById('registerPassword').value="";
        });
       }else{
        this.setState({errorMsg:res,color:'red'});   
       }
        console.log(response);
        console.log('user added');
    }
    }}}
}

    GoBack=(event)=>{
        this.setState({showMainPage:false,showBackPage:true});
    }
    toggleIcon=()=>{
        this.setState({showPassword:!this.state.showPassword});
    }

    render(){
    return(
        <div>{this.state.showMainPage?
        <div id="Fourth">
               <div style={{float:'left', marginLeft:'20px'}} > <button className="btn btn-lg btn-primary m-2" onClick={this.GoBack}>BACK</button></div>
            <center>
        <div className="logo">
            <img src={eastlogo} className="img-fluid ml-5 mr-5" alt="..." height="100"  width="50%"></img>
        </div>
        <form style={{fontSize:30}}>
            <h1> Members Log In</h1>
            <h4>New Member ? Register :</h4>
            <div style={{color:this.state.color}}>{this.state.errorMsg}</div>
            <table>
                <tbody>

             
      <tr><td>   Full Name </td> <td> <input type="text" defaultValue="" id="registerName" autoComplete="off" ref={el => this.state.fullNameRef = el}/></td></tr>
        <tr><td>   EVSA Membership # </td><td> <input type="text" defaultValue="" id="registerMember" autoComplete="off" ref={el => this.state.memberRef = el}/></td></tr>
         <tr><td>   User Name </td><td> <input type="text" defaultValue=""  id="registerUsername" autoComplete="off" ref={el => this.state.userNameRef = el}/></td></tr>
        <tr><td>    Password </td><td> <input type={this.state.showPassword?'text':'password'} defaultValue=""  id="registerPassword" autoComplete="off" ref={el => this.state.passwordRef = el}/>{this.state.showPassword?<span onClick={this.toggleIcon}><EyeInvisibleOutlined/></span>:<span onClick={this.toggleIcon}><EyeOutlined/></span>}</td></tr>
            </tbody>
            </table>
            <table>
                <tr>
                    <td><img src={Light} height="150" width="150"></img></td>
                    <td><p>User Name: Use a nickname or name you would never forget!<br/><br/> Password: Must be a minimum of 8 characters, both letters and numbers with at least 1 letter Uppercase.</p></td>
                </tr>
            </table>
            <button type="button"  style={{backgroundColor:'green',height:'50px',width:'80%'}} id="addUser" onClick={this.addUser}>REGISTER</button><br/>
            <button type="button"  style={{backgroundColor:'blue',height:'50px',width:'80%'}} id="reset" onClick={this.ResetRegister}>RESET</button>
        </form>
        </center>
        </div>:
   this.state.showBackPage?<Login/>:<span></span>}
   </div>
   )
}}

export default FourthPage;