import React, { Component } from "react";
import Head from '../assets/front/frontHeading.png';
import SubHead from '../assets/front/frontSubHeading.png';
import SubSub from '../assets/front/FrontSubtitle.png';
import Image from '../assets/front/EVSA_front.png'
import evsaPic from '../assets/front/EVSA_pic.png'
import FirstPage from './FirstPage';
import NewsPage from './NewsPage';
import EventPage from './EventPage';
import ArchievePage from './ArchievePage';
import ContactPage from "./ContactList";


class FrontPage extends React.Component{
    state={
        showFrontpage:true,
        showFirstPage:false,
        showNewsPage:false,
        showEventPage:false,
        showArchievePage:false,
        showContactPage:false
    }
    componentDidMount(){
     this.setState({showContactPage:false,showFrontPage:true,showFirstPage:false,showNewsPage:false}) 
    }

    getFirstPage = (event) =>{
        this.setState({showContactPage:false,showFrontPage:false,showNewsPage:false,showEventPage:false,showArchievePage:false,showFirstPage:true});
    }

    getNewsPage = (event) =>{
        this.setState({showContactPage:false,showFrontPage:false,showFirstPage:false,showEventPage:false,showArchievePage:false,showNewsPage:true});
    }

    getEventPage=(event)=>{
        this.setState({showContactPage:false,showFrontPage:false,showFirstPage:false,showArchievePage:false,showNewsPage:false,showEventPage:true});
    }

    getArchievePage = (event) =>{
        this.setState({showContactPage:false,showFrontPage:false,showFirstPage:false,showNewsPage:false,showEventPage:false,showArchievePage:true});  
    }

    getContactPage = (event) =>{
        this.setState({showFrontPage:false,showFirstPage:false,showNewsPage:false,showEventPage:false,showArchievePage:false,showContactPage:true});  
    }
    render(){
        return(
            <div>
                 {this.state.showFrontPage?
                <div id='FrontPage'>
       
        <div>
<div className='mt-2' style={{textAlign:'center'}}><img src={Head}/></div>
<center>
<table width='50%'>
    <tbody>
        <tr>
<td style={{textAlign:'center',paddingRight:'40px'}}><img src={SubHead}/></td>
<td style={{textAlign:'right'}} rowSpan='2'><img src={evsaPic} height='150'/></td>
        </tr>
        <tr>
<td style={{textAlign:'center'}}><img src={SubSub}/></td>
        </tr>
    </tbody>
</table>
</center>
{/* <span><img src={SubHead}/></div>
<div></div> */}
<div><img src={Image} height='300' Width='800'/></div>
<div>
    <table width='100%' style={{marginTop:'1%',borderCollapse:'separate',borderSpacing:'120px 30px',color:'black',fontWeight:'bold'}}>
        <tbody>
            <tr style={{border:'1px solid black'}}>
                <td height='100px' style={{textAlign:'center'}}><span style={{fontSize:'35px',textAlign:'center'}}><input type='button' value='Mission Statement' style={{height:'100%',width:'100%',backgroundColor:'#008CBA',borderRadius: '12px',border:'4px solid black', textAlign:'center'}}/></span></td>
                <td style={{textAlign:'left'}}><span style={{fontSize:'large'}}>"Our objective is to be the voice of all seniors over 55 of age living in the community of East Village.Our mission is to communicate with the leaders of our community and governments, expressing our concerns and showing support on issues related to all seniors quality of life" </span></td>
            </tr>
            <tr style={{border:'1px solid black'}}>
                <td height='100px' style={{textAlign:'center'}}><span style={{fontSize:'35px',textAlign:'center'}}><input type='button' value='News' style={{height:'100%',width:'100%',backgroundColor:'#008CBA',borderRadius: '12px',border:'4px solid black',textAlign:'center'}} onClick={this.getNewsPage}/></span></td>
                <td style={{textAlign:'left'}}><span  style={{fontSize:'large'}}>Local, Provincial and National News that affects seniors in Calgary</span></td>
            </tr>
            <tr style={{border:'1px solid black'}}>
                <td height='100px'style={{textAlign:'center'}}><span style={{fontSize:'35px',textAlign:'center'}}><input type='button' value='Coming Events' style={{height:'100%',width:'100%',backgroundColor:'#008CBA',borderRadius: '12px',border:'4px solid black',textAlign:'center'}} onClick={this.getEventPage}/></span></td>
                <td style={{textAlign:'left'}}><span style={{fontSize:'large'}}>Coming Events in the East village and Calgary for Seniors</span></td>
            </tr>
            <tr style={{border:'1px solid black'}}>
                <td  height='100px' style={{textAlign:'center'}}><span style={{fontSize:'35px',textAlign:'center'}}><input type='button' value='Consumer Centre' style={{height:'100%',width:'100%',backgroundColor:'#008CBA',borderRadius: '12px',border:'4px solid black',textAlign:'center'}} onClick={this.getFirstPage}/></span></td>
                <td style={{textAlign:'left'}}><span style={{fontSize:'large'}}>Consumer Awareness Centre where Seniors can write about their shopping experiences and give businesses a thumbs up or thumbs down</span></td>
            </tr>
            <tr style={{border:'1px solid black'}}>
                <td height='100px' style={{textAlign:'center'}}><span style={{fontSize:'35px',textAlign:'center'}}><input type='button' value='Archive' style={{height:'100%',width:'100%',backgroundColor:'#008CBA',borderRadius: '12px',border:'4px solid black',textAlign:'center'}} onClick={this.getArchievePage}/></span></td>
                <td style={{textAlign:'left'}}><span style={{fontSize:'large'}}>Past minutes of EVSA Meetings and highlights of social events in the East Village</span></td>
            </tr>
            <tr style={{border:'1px solid black'}}>
                <td height='100px' style={{textAlign:'center'}}><span style={{fontSize:'35px',textAlign:'center'}}><input type='button' value='Contact' style={{height:'100%',width:'100%',backgroundColor:'#008CBA',borderRadius: '12px',border:'4px solid black',textAlign:'center'}} onClick={this.getContactPage}/></span></td>
                <td style={{textAlign:'left'}}><span style={{fontSize:'large'}}>List of EVSA Board Members and EVSA Contact Information.</span></td>
            </tr>
        </tbody>
    </table>
    <div style={{backgroundColor:'gray',fontWeight:'bold',float:'right'}}><div>Website designed By:</div><div> Raman Virk<br/>Email- harman.virk651@gmail.com</div></div>
  
</div>
</div>
</div>:<span></span>}
    <div>
      {this.state.showFirstPage?<FirstPage/>:<span></span>}
      {this.state.showNewsPage?<NewsPage/>:<span></span>}
      {this.state.showEventPage?<EventPage/>:<span></span>}
      {this.state.showArchievePage?<ArchievePage/>:<span></span>}
      {this.state.showContactPage?<ContactPage/>:<span></span>}
    </div>
    </div>

        );
    }

}


export default FrontPage;