import "./Filter.css";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import { useState } from "react";
import AppsIcon from '@mui/icons-material/Apps';
import EventIcon from '@mui/icons-material/Event';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import ReportIcon from '@mui/icons-material/Report';

export default function Filter() {
  const [range, setRange] = useState(20);
  const [filterName, setFilterName] = useState("Richardson, TX - Within 20 miles")

  return (
    <div className="filter">
      <h1>Discover</h1>
      <div className="discoverSearch">
        <SearchIcon />
        <input
          type="text"
          placeholder="Search Discovery"
          className="discoverInput"
        />
      </div>
      <div className="discoverCategory">
        <Button variant="text">
          <div className="sideNavIcon"><AppsIcon/></div>
          Show All
          </Button>
        <Button variant="text"><div className="sideNavIcon"><EventIcon/></div>Events</Button>
        <Button variant="text"><div className="sideNavIcon"><VolunteerActivismIcon/></div>Volunteers</Button>
        <Button variant="text"><div className="sideNavIcon"><ReportIcon/></div>Reports</Button>
      </div>
      <div className="discoverFilter">
        <h3 className="filterLabel">Filter</h3>
        <Button variant="text">{filterName}</Button>
      </div>
    </div>
  );
}
