import "./Discover.css";
import Filter from "../components/Filter";
import Listing from "../components/Listing";
import { useState } from "react";
import Map from "../components/Map";
import "../ununpkg/leafletjs-1.9.2.css";

export default function Discover(props) {
  const [city, setCity] = useState("Richardson, TX")
  const [range, setRange] = useState(20);
  const [nav, setNav] = useState({
    showAll: true,
    events: false,
    volunteers: false,
    reports: false,
    add: false,
  });

  function settingCity(city){
    setCity(city);
  }
  
  function settingRange(range){
    setRange(range);
  }

  function settingNav(newNav){
    setNav(newNav);
  }

  return (
    <div className="discover">
      <div className="discoverSideBar2">
        <Filter onSettingNav={settingNav} onSetCity={settingCity} onSetRange={settingRange}/>
      </div>
      {/* <Listing city={city} range={range} nav={nav} eventList={props.eventList} setEventList={props.setEventList}/> */}
      <div id="map"><Map range={range} eventList={props.eventList}/></div>
    </div>
  );
}
