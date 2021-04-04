import React, { Component } from "react";
import eastlogo from '../assets/pics/EastVillageLogo.png';
import '../App.css';
import Six from './SixthPage';
import Seven from './SevenPage';
import Eight from './EightPage';
import Nine from './NinePage';
import Ten from './TenthPage';
import Reason from './Reason';
import axios from "axios";



class Reviews extends Component {
    state={
  
        showPageMain:true,
        showBackPage:false,
        showPageReview: false,
        reviewList:[]
    }

    componentDidMount(){
        window.scroll(0,0);
        axios.post('http://localhost:5000/reviews/getReview',{logo:this.props.Name})
        .then((response)=>{
            this.setState({reviewList:response.data},()=>{
                console.log(this.state.reviewList);
            })
        })
    }

    GoBack = () =>{
        this.setState({showPageBack:true,showPageMain:false},()=>{
        });
    }

 
    render() { 
       
        return ( 
            <div height="100%" style={{backgroundColor:"gray"}}>
                {this.state.showPageMain? 
                 <div  className="full-height">
                 <div style={{float:'left', marginLeft:'20px'}} > <button className="btn btn-lg btn-primary m-2" onClick={this.GoBack}>BACK</button></div>
                 <img src={eastlogo} className="img-fluid ml-5 mr-5" alt="..." height="100"  width="50%"></img>
                 <br/>
                 {this.state.reviewList.map((review)=>(
              <div className="section m-2" style={{border:'1px black solid',padding:'10px',backgroundColor:'lightgray'}}>
              <table width="100%" style={{color:'black',textAlign:'left',marginLeft:'20px'}}>
                <tbody>
                <tr>
                <td ><span style={{color:'black'}}><b>Location: </b></span><span className="round-border m-2" style={{backgroundColor:'lightblue'}}> {review.Location} </span></td>
               <td><span style={{color:'black'}}><b>Stop light Rating: </b></span><span className="round-light m-2" style={{backgroundColor:review.Light}} >{review.Light} </span> </td>
               <td><span style={{color:'black'}}><b>User Name: </b></span><span className="round-light m-2" style={{backgroundColor:'lightblue'}} >{review.Username} </span> </td></tr>
               </tbody>
               </table>
               <div>
               <div style={{color:'black',textAlign:'left',marginLeft:'20px' , backgroundColor:'lightgray'}}><b>Reason :</b></div><div><textarea rows="4" cols="150" id="reasonArea" defaultValue={review.Reason} disabled></textarea></div>
                  </div> 
          
            </div>
                 ))}
                 </div>:
            this.state.showPageBack?
            <div><Reason logo={this.props.logo} Page={this.props.Page} Name={this.props.Name} /></div>:
            <span></span>}
            </div>
            
            
        );
    }
}
 
export default Reviews;