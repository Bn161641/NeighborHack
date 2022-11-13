import "./Filter.css";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import { ListItemButton, Typography } from "@mui/material";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import { groups } from '../groupData'


export default function GroupFilter() {
  return (
    <div className="filter" style={{padding:"10px"}}>
      <div class="discoverHeader">
        <h1>Groups</h1>
      </div>
      <div className="discoverSearch">
        <SearchIcon />
        <input
          type="text"
          placeholder="Search Discovery"
          className="discoverInput"
        />
      </div> 
      <Button variant="contained" style={{margin:'15px', backgroundColor:'#FC7061'}}>
        Create New Group
      </Button>
      <Typography variant="h6">
        Groups you've joined
      </Typography>
      {groups.map(group => (
              <ListItem key={group.id} style={{padding:0}}>
                <ListItemButton>
                  <ListItemAvatar>
                    <Avatar src={require(`../assets/${group.image}`)}/>
                  </ListItemAvatar>
                  <ListItemText primary={group.name} secondary={`${group.members} members`}/>
                </ListItemButton>
              </ListItem>
            ))}
        
    </div>
  );
}
