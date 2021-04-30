import React, { Component } from "react";
import Head from '../assets/front/frontHeading.png';
import SubHead from '../assets/front/frontSubHeading.png';
import SubSub from '../assets/front/FrontSubtitle.png';
import Image from '../assets/front/EVSA_front.png'
import evsaPic from '../assets/front/EVSA_pic.png'
import FirstPage from './FirstPage';


class FrontPage extends React.Component{
    state={
        showFrontpage:true,
        showFirstPage:false,
    }
    componentDidMount(){
     this.setState({showFrontPage:true,showFirstPage:false}) 
    }

    getFirstPage = (event) =>{
        this.setState({showFrontPage:false,showFirstPage:true});
    }
    render(){
        
      

        return(
            <div>
                 {this.state.showFrontPage?
                <div id='FrontPage'>
       
        <div>
<div className='mt-2' style={{textAlign:'center'}}><img src={Head}/></div>
<center>
<table width='95%'>
    <tbody>
        <tr>
<td style={{textAlign:'right',paddingRight:'40px'}}><img src={SubHead}/></td>
<td style={{textAlign:'left'}} rowSpan='2'><img src={evsaPic}/></td>
        </tr>
        <tr>
<td style={{textAlign:'right'}}><img src={SubSub}/></td>
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
                <td height='100px' style={{border:'4px solid black',textAlign:'center',height:'40px'}}><span style={{fontSize:'35px'}}>Mission Statement</span></td>
                <td style={{textAlign:'left'}}><span style={{fontSize:'large'}}>"Our objective is to be the voice of all seniors over 55 of age living in <br/>the community of East Village.Our mission is to communicate with the <br/>leaders of our community and governments, expressing our concerns <br/>and showing support on issues related to all seniors quality of life" </span></td>
            </tr>
            <tr style={{border:'1px solid black'}}>
                <td height='100px' style={{border:'4px solid black',textAlign:'center'}}><span style={{fontSize:'35px'}}>News</span></td>
                <td style={{textAlign:'left'}}><span  style={{fontSize:'large'}}>Local, Provincial and National News that affects seniors in Calgary</span></td>
            </tr>
            <tr style={{border:'1px solid black'}}>
                <td height='100px'style={{border:'4px solid black',textAlign:'center'}}><span style={{fontSize:'35px'}}>Coming Events</span></td>
                <td style={{textAlign:'left'}}><span style={{fontSize:'large'}}>Coming Events in the East village and Calgary for Seniors</span></td>
            </tr>
            <tr style={{border:'1px solid black'}}>
                <td  height='100px' style={{border:'4px solid black',textAlign:'center'}}><span style={{fontSize:'35px'}}>Consumer Centre</span></td>
                <td style={{textAlign:'left'}}><span style={{fontSize:'large'}}>Consumer Awareness Centre where Seniors can write about their <br/>shopping experiences and give businesses a thumbs up <br/>or thumbs down</span></td>
            </tr>
            <tr style={{border:'1px solid black'}}>
                <td height='100px' style={{border:'4px solid black',textAlign:'center'}}><span style={{fontSize:'35px'}}>Archive</span></td>
                <td style={{textAlign:'left'}}><span style={{fontSize:'large'}}>Past minutes of EVSA Meetings and highlights of social events in <br/>the East Village</span></td>
            </tr>
        </tbody>
    </table>
  
</div>
<div style={{float:'right'}}>
        <input type='button' className='btn btn-primary btn-lg m-2' value='Click here to Access Website' onClick={this.getFirstPage}/>
        </div>
</div>
</div>:<span></span>}
    <div>
      {this.state.showFirstPage?<FirstPage/>:<span></span>}
    </div>
    </div>

        );
    }

}

export default FrontPage;