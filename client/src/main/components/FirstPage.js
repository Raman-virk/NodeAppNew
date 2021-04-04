import React from 'react';
import Pic2 from './Pic2';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import SecondPage from './SecondPage';
import ThirdPage from './ThirdPage';
import FourthPage from './FourthPage';
import Login from './Login';

class firstPage extends React.Component{

  state={
    showSecondPage:false,
    showThirdPage:false,
    showFourthPage:false,
    showFirstPage:true,
  }
  getSecondPage = (event) =>{
    this.setState({showFirstPage:false,showSecondPage:true});
  }
  getThirdPage = (event) =>{
    this.setState({showFirstPage:false,showThirdPage:true});
  }
  getFourthPage = (event) =>{
    this.setState({showFirstPage:false,showFourthPage:true});
  }
  render(){
  return(
    <div>
      {this.state.showFirstPage?
  <div id="FirstPage">
    <span>
      <Pic2 />
    </span>
    <div className="flexContainer">
    <button type="button" className="btn btn-primary btn-lg" onClick={this.getSecondPage} label="Action">How It Works</button>
    <button type="button" className="btn btn-primary btn-lg " onClick={this.getThirdPage} >Business and Areas</button>
    <button type="button"  className="btn btn-primary btn-lg" onClick={this.getFourthPage}>Members Log In</button>
    
    </div>
    </div>:<span></span>}
    <div>
      {this.state.showSecondPage?<SecondPage/>:<span></span>}
      {this.state.showThirdPage?<ThirdPage/>:<span></span>}
      {this.state.showFourthPage?<Login/>:<span></span>}
    </div>
  </div>
  )
}
}

export default firstPage;