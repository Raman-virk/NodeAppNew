import React, { Component } from "react";
import eastlogo from '../assets/pics/EastVillageLogo.png';
import '../App.css';
import Six from './SixthPage';
import Seven from './SevenPage';
import Eight from './EightPage';
import Nine from './NinePage';
import Ten from './TenthPage';
import Reviews from './Reviews';
import axios from "axios";


class Reason extends Component {
    state={
        bgcolor1:'',
        bgcolor2:'',
        bgcolor3:'',
        bgcolor4:'',
        redcolor:'',
        yellowcolor:'',
        greencolor:'',
        showPageBack:false,
        showPageMain:true,
        page:this.props.Page,
        showPageReview:false,
        lastLogo:this.props.logo,
        selectedLocation:'',
        selectedLight:'',
        errorMsg:'',
        color:'',
        logoName:this.props.Name,
        previewStatus:false,
        reviewList:[],
        User:JSON.parse(localStorage.getItem("username"))
    }

    componentDidMount(){
        window.scroll(0,0);
        axios.post('/reviews/getReview',{logo:this.props.Name})
        .then((response)=>{
            this.setState({reviewList:response.data},()=>{
                console.log(this.state.reviewList);
            })
        })
    }

    ResetReview = () =>{
        document.getElementById('reasonArea').value='';
        this.noColor();
        this.setState({selectedLight:'',bgcolor1:'',bgcolor2:'',bgcolor3:'',bgcolor4:'',errorMsg:'',selectedLocation:''},()=>{
            console.log('all reset');
        })  

    }

    SaveReview = async() =>{

        let reasonValue = document.getElementById('reasonArea').value;
        if(this.state.selectedLocation==''){
            this.setState({errorMsg:'Please choose a location !',color:'red'});
        }
        else if(this.state.selectedLight==''){
            this.setState({errorMsg:'Please choose a Stop light Rating !',color:'red'});
        }
        else if(reasonValue==''){
            this.setState({errorMsg:'Enter a Reason !',color:'red'});  
        }
        else{
            this.setState({errorMsg:''},()=>{
                console.log(this.state.errorMsg);
            });
        console.log(this.props.Name);
        let response =  await axios.post('/reviews/addReview',{Logo:this.state.logoName, Location:this.state.selectedLocation,Light:this.state.selectedLight,Reason:reasonValue,Username: this.state.User});
            console.log(response.data);
            this.setState({errorMsg:'Review Saved!', color:'black'});
            document.getElementById('reasonArea').value='';
            this.noColor();
            this.setState({selectedLight:'',bgcolor1:'',bgcolor2:'',bgcolor3:'',bgcolor4:'',selectedLocation:''},()=>{
                console.log('all reset');
                axios.post('/reviews/getReview',{logo:this.props.Name})
                .then((response)=>{
                    this.setState({reviewList:response.data},()=>{
                        console.log(this.state.reviewList);
                    })
                })
            })  
            
    }
    }

    GoBack = () =>{
        this.setState({showPageBack:true,showPageMain:false},()=>{
            console.log(this.props.Page);
        });
    }

    changeColor1 = ()=>{
        this.setState({bgcolor1:'lightblue',bgcolor2:'',bgcolor3:'',bgcolor4:'',selectedLocation:'N.E.'},()=>{
            console.log('this.state.selectedLocation');
        });
    }
    changeColor2 = ()=>{
        this.setState({bgcolor2:'lightblue',bgcolor1:'',bgcolor3:'',bgcolor4:'',selectedLocation:'N.W.'},()=>{
            console.log('this.state.selectedLocation');
        });
    }
    changeColor3 = ()=>{
        this.setState({bgcolor3:'lightblue',bgcolor2:'',bgcolor1:'',bgcolor4:'',selectedLocation:'S.E.'},()=>{
            console.log('this.state.selectedLocation');
        });
    }
    changeColor4 = ()=>{
        this.setState({bgcolor4:'lightblue',bgcolor2:'',bgcolor3:'',bgcolor1:'',selectedLocation:'S.W.'},()=>{
            console.log('this.state.selectedLocation');
        });
    }
    changeRed = ()=>{
        this.setState({redcolor:'#ff0000',yellowcolor:'',greencolor:'',selectedLight:'Red'},()=>{
            console.log('this.state.selectedLight');
        }); 
    }
    changeYellow = () =>{
        this.setState({redcolor:'',yellowcolor:'#ffff00',greencolor:'',selectedLight:'Yellow'},()=>{
            console.log('this.state.selectedLight');
        });  
    }
    changeGreen = ()=>{
        this.setState({redcolor:'',yellowcolor:'', greencolor:'#66ff33',selectedLight:'Green'},()=>{
            console.log('this.state.selectedLight');
        });   
    }

    noColor = ()=>{
        this.setState({redcolor:'',yellowcolor:'', greencolor:'',selectedLight:''});  
    }

    ReviewPage = ()=>{
        this.setState({showPageBack:false, showPageMain:false, showPageReview:true});
    }
    render() { 
        const project = () => {
            switch(this.props.Page) {
      
              case "SixthPage":   return <Six />;
              case "SevenPage":   return <Seven />;
              case "EightPage": return <Eight />;
              case "NinePage":  return <Nine />;
              case "TenthPage":  return <Ten />;
      
              default:      return <span></span>
            }}
      
        return ( 
            <div>
                {this.state.showPageMain? 
            <div id="Reason" style={{textAlign:'left',marginLeft:'20px',backgroundColor:"gray"}}>
                <div style={{float:'left', marginLeft:'20px'}} > <button className="btn btn-lg btn-primary m-2" onClick={this.GoBack}>BACK</button></div>
            <div className="logo" >
            <img src={eastlogo} className="img-fluid ml-5 mr-5" alt="..." height="100"  width="50%"></img>
            </div> 
            <div>
                <button type="button" style={{float:"right"}} className="btn btn-primary btn-lg mr-3" onClick={this.ReviewPage} disabled={this.state.reviewList.length==0?true:false}>View Previous Reviews</button>
            </div>
            <br/>
            <br/>
            <div style={{color:this.state.color}}><b>{this.state.errorMsg}</b></div>
            <div style={{color:'black',textAlign:'left',marginLeft:'20px',backgroundColor:'gray'}}>
            <div style={{float:'left',backgroundColor:'gray'}}>
            <span width="300px"><img src={this.props.logo}  height="100px"  width="300px"/> </span>
            </div>
            <table width="100%" style={{color:'black',textAlign:'left',marginLeft:'20px',backgroundColor:'gray'}}>
                <tbody>
                <tr>
               <td width="20%"><span style={{color:'black'}}><b>Location: </b></span></td><td width="60%"> <span className="round-border m-2" style={{backgroundColor:this.state.bgcolor1}} onClick={this.changeColor1} >N.E. </span><span className="round-border m-2" style={{backgroundColor:this.state.bgcolor2}} onClick={this.changeColor2} >N.W. </span><span className="round-border m-2" style={{backgroundColor:this.state.bgcolor3}} onClick={this.changeColor3} >S.E. </span><span className="round-border m-2" style={{backgroundColor:this.state.bgcolor4}} onClick={this.changeColor4} >S.W. </span></td>
               </tr>
                
                <tr style={{color:'black',textAlign:'left',marginLeft:'20px'}}>
               <td width="20%"><span style={{color:'black'}}><b>Stop light Rating: </b></span></td><td width="60%"> <span className="round-red m-2" style={{backgroundColor:this.state.redcolor}} onClick={this.changeRed} >Red </span><span className="round-yellow m-2" style={{backgroundColor:this.state.yellowcolor}} onClick={this.changeYellow}  >Yellow </span><span className="round-green m-2" style={{backgroundColor:this.state.greencolor}} onClick={this.changeGreen} >Green </span></td>
               </tr>
               </tbody>
               </table>
               
            
            <div style={{color:'black',textAlign:'left',marginLeft:'20px' , backgroundColor:'gray'}}><b>Reason :</b></div><div><textarea rows="15" cols="150" id="reasonArea"></textarea></div>
            <center>
            <button type="button"  style={{backgroundColor:'green',height:'50px',width:'80%'}} id="submitReason" onClick={this.SaveReview}>SUBMIT</button><br/>
            <button type="button"  style={{backgroundColor:'blue',height:'50px',width:'80%'}} id="resetReason" onClick={this.ResetReview}>RESET</button>
            </center>
            <br/>
           </div></div>:
            this.state.showPageBack?
            <div>{ project() }</div>:
            this.state.showPageReview?
            <Reviews logo={this.state.lastLogo} Page={this.state.page} Name={this.state.logoName}/>:<span></span>}
            </div>
            
            
            
        );
    }
}
 
export default Reason;