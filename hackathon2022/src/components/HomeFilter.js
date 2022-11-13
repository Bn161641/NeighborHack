import "./Filter.css";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import { useState } from "react";
import AppsIcon from "@mui/icons-material/Apps";
import EventIcon from "@mui/icons-material/Event";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import ReportIcon from "@mui/icons-material/Report";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Slider from "@mui/material/Slider";
import AddIcon from "@mui/icons-material/Add";
import Switch from '@mui/material/Switch';
import { feedData } from "../pages/feedData";

export default function HomeFilter(props) {
  const [range, setRange] = useState(20);
  const [filterName, setFilterName] = useState("Richardson, TX");
  const [sideNav, setSideNav] = useState({
    showAll: true,
    events: false,
    volunteers: false,
    reports: false,
    add: false,
  });

  const [onMapToggle, setOnMapToggle] = useState(false);

  function handleSwichChange(event){
    setOnMapToggle(event.target.checked);
    props.onSettingMapToggle(event.target.checked);
  }
  const handleSliderChange = (event, newValue) => {
    setRange(newValue);
    props.onSetRange(newValue);
  };

  function handleChange(element){
    setFilterName(element.target.value);
    props.onSetCity(element.target.value);
  }
  function changeView(view) {
    switch (view) {
      case "showAll":
        setSideNav({
          showAll: true,
          events: false,
          volunteers: false,
          reports: false,
          add: false,
        });
        props.onSetList(feedData);
        props.onSettingNav(false);
        break;
      case "events":
        setSideNav({
          showAll: false,
          events: true,
          volunteers: false,
          reports: false,
          add: false,
        });
        props.onSetList(feedData.filter((feed) => feed.type === "event"));
        props.onSettingNav(false);
        break;
      case "volunteers":
        setSideNav({
          showAll: false,
          events: false,
          volunteers: true,
          reports: false,
          add: false,
        });
        props.onSetList(feedData.filter((feed) => feed.type === "volunteer"));
        props.onSettingNav(false);
        break;
      case "reports":
        setSideNav({
          showAll: false,
          events: false,
          volunteers: false,
          reports: true,
          add: false,
        });
        props.onSetList(feedData.filter((feed) => feed.type === "report"));
        props.onSettingNav(false);
        break;
      case "add":
        setSideNav({
          showAll: false,
          events: false,
          volunteers: false,
          reports: false,
          add: true,
        });
        props.onSettingNav(true);
        break;
    }
  }

  return (
    <div className="filter">
      <div class="discoverHeader">
        <h1>Discover</h1>
        <div className="discoverSwitch">
          <p>List</p>
          <Switch checked={onMapToggle} onChange={handleSwichChange}/>
          <p>Map</p>
          </div>
      </div>
      <div className="discoverSearch">
        <SearchIcon />
        <input
          type="text"
          placeholder="Search Discovery"
          className="discoverInput"
        />
      </div>
      <div className="discoverCategory">
        {/* <p>{sideNav}</p> */}
        <Button
          onClick={() => changeView("showAll")}
          className={`${sideNav.showAll ? `active` : ``}`}
          variant="text"
        >
          <div className={`sideNavIcon ${sideNav.showAll ? `active` : ``}`}>
            <AppsIcon />
          </div>
          Show All
        </Button>
        <Button
          onClick={() => changeView("events")}
          className={`${sideNav.events ? `active` : ``}`}
          variant="text"
        >
          <div className={`sideNavIcon ${sideNav.events ? `active` : ``}`}>
            <EventIcon />
          </div>
          Events
        </Button>
        <Button
          onClick={() => changeView("volunteers")}
          className={`${sideNav.volunteers ? `active` : ``}`}
          variant="text"
        >
          <div className={`sideNavIcon ${sideNav.volunteers ? `active` : ``}`}>
            <VolunteerActivismIcon />
          </div>
          Volunteers
        </Button>
        <Button
          onClick={() => changeView("reports")}
          className={`${sideNav.reports ? `active` : ``}`}
          variant="text"
        >
          <div className={`sideNavIcon ${sideNav.reports ? `active` : ``}`}>
            <ReportIcon />
          </div>
          Reports
        </Button>
        <Button
          onClick={() => changeView("add")}
          className={`${sideNav.add ? `active` : ``}`}
          variant="text"
        >
          <div className={`sideNavIcon ${sideNav.add ? `active` : ``}`}>
            <AddIcon />
          </div>
          Add Feed
        </Button>
      </div>
      <div className="discoverFilter">
        <h3 className="filterLabel">Filter</h3>
        {/* <Button variant="text">{filterName}</Button> */}
        <div className="discoverFormContainer">
        <FormControl className="discoverFormController" variant="standard">
          <Input
            className="locationForm"
            value={filterName}
            onChange={handleChange}
            startAdornment={
              <InputAdornment position="start">
                <LocationOnIcon />
              </InputAdornment>
            }
          />
        </FormControl>
        </div>
        <div className="discoverRange">
          <p className="pRange">{range} miles</p>
          <Slider
            onChange={handleSliderChange}
            defaultValue={range}
            aria-label="Default"
          />
        </div>
      </div>
    </div>
  );
}
