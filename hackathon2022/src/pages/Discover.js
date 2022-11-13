import "./Discover.css";
import Filter from "../components/Filter";
import Listing from "../components/Listing";
import { useState } from "react";
import Map from "../components/Map";
import "../ununpkg/leafletjs-1.9.2.css";
import AddForm from "../components/AddForm";
import { feedData } from "../pages/feedData";


export default function Discover(props) {
  const [city, setCity] = useState("Richardson, TX")
  const [range, setRange] = useState(20);
  const [nav, setNav] = useState(false);
  const [onMap, setOnMap] = useState(false);
  const [showListing, setShowListing] = useState(feedData);
  
  function settingCity(city){
    setCity(city);
  }
  
  function settingRange(range){
    setRange(range);
  }

  function settingNav(newNav){
    setNav(newNav);
  }

  function settingMapToggle(toggle){
    setOnMap(toggle);
  }



  return (
    <div className="discover">
      <div className="discoverSideBar2">
        <Filter onSetList={setShowListing} onSettingMapToggle={settingMapToggle} nav={nav} onSettingNav={setNav} onSetCity={settingCity} onSetRange={settingRange}/>
      </div>
      {nav ? <AddForm showListing={showListing} onSetList={setShowListing}/> : onMap ? <div id="map"><Map toggle={nav} range={range} eventList={props.eventList}/></div> : <Listing city={city} range={range} nav={nav} showListing={showListing}/>}
      {/* <Listing city={city} range={range} nav={nav} eventList={props.eventList} setEventList={props.setEventList}/> */}
      
    </div>
  );
}
