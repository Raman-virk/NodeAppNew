import React, { Component } from "react";
import AutoRepair from '../assets/pics/AutoRepair.png';
import eastlogo from '../assets/pics/EastVillageLogo.png';
import CenterCircle from '../assets/pics/CenterCircle.png';
import Diner from '../assets/pics/Diner.png';
import Que from '../assets/pics/Que.png';
import DepartmentalStore from '../assets/pics/DepartmentalStore.png';
import Good from '../assets/pics/Good.png';
import Bad from '../assets/pics/Bad.png';
import Bank from '../assets/pics/Bank.png';
import Grocery from '../assets/pics/Grocery.png';
import Medical from '../assets/pics/Medical.png';
import Other from '../assets/pics/Other.png';
import Think from '../assets/pics/Think.png';
import TvCell from '../assets/pics/TvCell.png';
import '../App.css';

class Pic2 extends Component {
  render() {
    return (
        <div>
          <div className="logo">
          <img src={eastlogo} className="img-fluid ml-5 mr-5" alt="..." height="100"  width="85%"></img>
          </div>
          <br/>
          <div className ="container">


          <div className="gallery-container w2">
            <div className="gallery-item">
              <div className="image">
          <img src={AutoRepair} height="200" width="200"></img>
          </div>
          <div className="text" >Auto Repair</div>
          </div>
          </div>

         <div className="gallery-container w3">
            <div className="gallery-item">
              <div className="image">
          <img src={Diner} height="200" width="200"></img>
          </div>
          <div className="text">Restaurants</div>
          </div>
          </div>

          {/* <div className="gallery-container w6">
            <div className="gallery-item">
              <div className="image">
          <img src={Good} height="100" width="100"></img>
          </div>
          </div>
          </div> */}

          <div className="gallery-container w4">
            <div className="gallery-item">
              <div className="image">
          <img src={DepartmentalStore} height="200" width="200"></img>
          </div>
          <div className="text">Department Stores</div>
          </div>
          </div>

     

          {/* <div className="gallery-container w15">
            <div className="gallery-item">
              <div className="image">
          <img src={Que} height="100" width="100"></img>
          </div>
          </div>
          </div> */}

          <div className="gallery-container w9">
            <div className="gallery-item">
              <div className="image">
                <img src={CenterCircle} height="400" width="400"></img>
              </div>
            </div>
          </div>

     

          <div className="gallery-container w10">
            <div className="gallery-item">
              <div className="image">
          <img src={TvCell} height="200" width="200"></img>
          </div>
          <div className="text">TV / Phone Service</div>
          </div>
          </div>
        
          

          <div className="gallery-container w7">
            <div className="gallery-item">
              <div className="image">
               <img src={Grocery} height="200" width="200"></img>
              </div>
             <div className="text">Grocery Stores</div>
            </div>
          </div>
          

          
          
{/* 
             <div className="gallery-container w11">
            <div className="gallery-item">
              <div className="image">
          <img src={Think} height="400" width="200"></img>
          </div>
          </div>
          </div> */}

          {/* <div className="gallery-container w8">
            <div className="gallery-item">
              <div className="image">
                <img src={Bad} height="100" width="100"></img>
              </div>
              </div>
              </div> */}

             <div className="gallery-container w12">
            <div className="gallery-item">
              <div className="image">
          <img src={Medical} height="200" width="200"></img>
          </div>
          <div className="text">Medical / Clinics</div>
          </div>
          </div>
          

            <div className="gallery-container w13">
              <div className="gallery-item">
                <div className="image">
                  <img src={Bank} height="200" width="200"></img>
                </div>
                <div className="text">Banks / Insurance</div>
                </div>
              </div>
          

             <div className="gallery-container w14">
            <div className="gallery-item">
              <div className="image">
          <img src={Other} height="200" width="200"></img>
          </div>
          <div className="text">Other Businesses</div>
          </div>
          </div>
          
        </div>
        </div>
    )
  }
}

export default Pic2;
