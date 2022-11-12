import "./Navbar.css";
import HomeIcon from '@mui/icons-material/Home';
import PinDropIcon from '@mui/icons-material/PinDrop';
import GroupsIcon from '@mui/icons-material/Groups';
import Button from '@mui/material/Button';

export default function Navbar(){
  return (<div className="navbar">
    <img src={require('./cooltext423335907473027.png')} />
    <div className="navButtonContainer">
      <Button size="large"><HomeIcon/></Button>
      <Button size="large"><PinDropIcon/></Button>
      <Button size="large"><GroupsIcon/></Button>
    </div>
    <div className="profileSection">
      
    </div>
  </div>);
};