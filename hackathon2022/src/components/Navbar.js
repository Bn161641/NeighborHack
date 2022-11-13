import "./Navbar.css";
import HomeIcon from "@mui/icons-material/Home";
import PinDropIcon from "@mui/icons-material/PinDrop";
import GroupsIcon from "@mui/icons-material/Groups";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="leftSide">
        <img src={require("./cooltext423335907473027.png")} />
        <div class="searchBar">
          <input type="text" className="searchBarInput" placeholder="Search" />
          <button type="submit" className="searchBarButton">
            <SearchIcon />
          </button>
        </div>
      </div>
      <div className="navButtonContainer">
        <Link to="/">
          <Button size="large">
            <HomeIcon />
          </Button>
        </Link>
        <Link to="/discover">
          <Button size="large">
            <PinDropIcon />
          </Button>
        </Link>
        <Link to="/group">
          <Button size="large">
            <GroupsIcon />
          </Button>
        </Link>
      </div>
      <div className="profileSection">
        <button className="profileButton">
          <Link to="/profile">
            <img className="profilePic" src={require("./profile.png")} />
          </Link>
        </button>
      </div>
    </div>
  );
}
