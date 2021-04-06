import React, { Component } from "react";
import eastlogo from '../assets/pics/EastVillageLogo.png';
// import useForm from "react-hook-form";
import Light from '../assets/pics/Light.png';
import '../App.css';
import FourthPage from "./FourthPage";
import FirstPage from "./FirstPage";
import Password from "./Password";
import { EyeOutlined } from '@ant-design/icons';
import { EyeInvisibleOutlined } from '@ant-design/icons';
import axios from 'axios';
import FifthPage from './FifthPage';
import { store } from '../redux/store';
import { CONNECT_WITH_SSO } from '../redux/types';


const mapStateToProps = (state) => ({
    user: state.user,
  });
  function connectWithSSO() {
    const json = JSON.parse(localStorage.getItem("username"));
    console.log( json);
    store.dispatch({
        type: CONNECT_WITH_SSO,
        user: json,
    });
  }
class Login extends Component{
    state={
showMainPage: true,
showRegister: false,
showPageBack:false,
showPasswordField: false,
showPassword:false,
errorMsg:'',
refUserName: null,
refPassword: null,
showFirstPage: false,
showMainPage: true

    }
    ResetLogin = () =>{
        document.getElementById('loginUsername').value="";
        document.getElementById('loginPassword').value="";
        this.setState({errorMsg:''});

    }

    login = async()=> {

        var UserName = this.state.refUserName.value;
        var Password = this.state.refPassword.value;
        if(UserName==""||Password==""){
            this.setState({errorMsg:'Enter Both UserName and Password!',color:'red'},()=>{
                console.log(this.state.errorMsg);
            });
        } 
        else{
            this.setState({errorMsg:''});
        console.log('getting user');
        let response = await axios.post('/users/getUser',{username:UserName,password:Password});
       console.log(response.data);
       let res = response.data;
        if(res.length==0){
        this.setState({errorMsg:'Incorrect UserName/Password!',color:'red'});
       }else{
        this.ResetLogin();
        console.log(res[0].FullName);
        localStorage.setItem('username', JSON.stringify(res[0].FullName)); 
        connectWithSSO();
        this.setState({errorMsg:'',color:'',showFirstPage:true, showMainPage:false});
           
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
        this.setState({showMainPage: false, showRegister: false,showPageBack:false, showPasswordField: true}) 
    }

    toggleIcon=()=>{
        this.setState({showPassword:!this.state.showPassword});
    }
    render(){
    return(
        <div>
            {this.state.showMainPage?
        <div id="Login">
             <div style={{float:'left', marginLeft:'20px'}} > <button className="btn btn-lg btn-primary m-2" onClick={this.GoBack}>BACK</button></div>
            <center>
        <div className="logo">
            <img src={eastlogo} className="img-fluid ml-5 mr-5" alt="..." height="100"  width="50%"></img>
        </div>
        <form style={{fontSize:30}}>
            <h1> Members Log In</h1>
            <br/>
               <span className="hoverClass" onClick={this.handleRegister}><u> Register? Click here!</u></span>
            <br/>
            <br/>
            <div style={{color:this.state.color}}>{this.state.errorMsg}</div>
            <table>
                <tbody>
           <tr><td> User Name </td><td>  <input type="text"  id="loginUsername" autoComplete="off" ref={el => this.state.refUserName = el} defaultValue=""/></td></tr>
            <tr></tr>
           <tr><td> Password </td><td><input type={this.state.showPassword?'text':'password'} autoComplete="off" id="loginPassword" ref={el => this.state.refPassword = el} defaultValue=""/></td><td>{this.state.showPassword?<span onClick={this.toggleIcon}><EyeInvisibleOutlined/></span>:<span onClick={this.toggleIcon}><EyeOutlined/></span>}</td></tr>
            </tbody>
            </table>
            <br/>
            <div className="hoverClass" onClick={this.forgotPassword}><u>Forgot Username/Password?</u></div>
            <br/>
            <button type="button"  style={{backgroundColor:'green',height:'50px',width:'80%'}} id="login" onClick={this.login}>LOGIN</button><br/>
            <button type="button"  style={{backgroundColor:'blue',height:'50px',width:'80%'}} id="reset" onClick={this.ResetLogin}>RESET</button>
        </form>
        </center>
        <br/><br/>
        </div>:
        this.state.showRegister?<FourthPage/>:
        this.state.showPageBack?<FirstPage/>:
        this.state.showPasswordField?<Password/>:
        this.state.showFirstPage?<FifthPage/>:<span></span>}
        </div>
    )
}}

export default Login;