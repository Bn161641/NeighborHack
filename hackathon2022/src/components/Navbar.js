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
          <input type="text" class="searchBarInput" placeholder="Search" />
          <button type="submit" class="searchBarButton">
            <SearchIcon />
          </button>
        </div>
      </div>
      <div className="navButtonContainer">
        <Button size="large">
          <Link to="/">
            <HomeIcon />
          </Link>
        </Button>
        <Button size="large">
          <Link to="/discover">
            <PinDropIcon />
          </Link>
        </Button>
        <Button size="large">
          <Link to="/group">
            <GroupsIcon />
          </Link>
        </Button>
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
