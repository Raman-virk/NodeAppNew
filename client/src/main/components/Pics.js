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

class Pics extends Component {
  render() {
    return (
        <div>
          <div className="logo">
          <img src={eastlogo} className="img-fluid ml-5 mr-5" alt="..." height="100"  width="85%"></img>
          </div>
          <div className="image-area">
          <div className="One">
          <img src={DepartmentalStore} className="rounded float-left ml-5"  alt="..." height="200" width="200"></img>
          <img src={Diner} className="rounded float-right mr-5" alt="..." height="200" width="200"></img>
          <img src={AutoRepair} className="rounded mx-auto d-block" alt="..." height="200" width="200"></img>
          </div>
          <div className="Two">
          <img src={Grocery} className="rounded float-left ml-5 mt-lg-5"  alt="..." height="200" width="200"></img>
          <img src={TvCell} className="rounded float-right mr-5 mt-5" alt="..." height="200" width="200"></img>
          <img src={CenterCircle} className="rounded mx-auto d-block" alt="..." height="400" width="400"></img>
          </div>
          <div className="Three">
          <img src={Medical} className="rounded float-left ml-5"  alt="..." height="200" width="200"></img>
          <img src={Other} className="rounded float-right mr-5" alt="..." height="200" width="200"></img>
          <img src={Bank} className="rounded mx-auto d-block" alt="..." height="200" width="200"></img>
          </div>
          </div>
        </div>
    )
  }
}

export default Pics;
