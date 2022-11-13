import React from "react"
import { Card, CardActions, CardHeader, Grid, IconButton, ListItemButton, TextField, Typography } from "@mui/material"
import { data } from "../data"
import { contacts } from "../contactData"
import Postcard from "../components/Postcard"
import PostForm from "../components/PostForm"
import { Container } from "@mui/system"
import Box from "@mui/material/Box";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';

export default function Home(){
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)



  return(
    <div className="homeContainer">
     <Box
      style={{
        display:'flex',
        alignItems: 'center',
        justifyContent:'space-around',
      }}
     >
        <div style={{width:'194.75px', marginLeft:'250px', visibility:'hidden'}}>
        hello world
      </div>
        <Grid container spacing={3} direction="column" 
          style={{
          display:'flex',
          alignItems: 'center',
          justifyContent:'center',
          padding:'20px',
          marginTop: '50px',
          width:'600px',
          gap:"15px"
          }}
        >
        <PostForm />
          {data.map(post => (
            <Grid item key={post.id} style={{padding:'0'}}>
              <Postcard post={post} />
            </Grid>
          ))}
        </Grid>
          <List sx={{ alignSelf:'flex-start', marginTop:'100px', marginRight:'250px'}}>
            <Card>
              <CardHeader 
              sx={{padding:0}}
              title={<Typography variant="h5"style={{padding:'10px', backgroundColor:'#FC7061', color:'#FCF4EF', textAlign:'left'}}>Contacts</Typography>}/>
              {contacts.map(contact => (
                <ListItem key={contact.id} style={{padding:0}}>
                  <ListItemButton onClick={handleOpen}>
                    <ListItemAvatar>
                      <Avatar src={require(`../assets/${contact.profile}`)}/>
                    </ListItemAvatar>
                    <ListItemText primary={contact.name} />
                  </ListItemButton>
                </ListItem>
              ))}
              </Card>
          </List>
      </Box>
      {open && 
      <Card style={{position:'fixed', top:'50%', left:'81%', zIndex:'20', padding:'10px'}}>
        <CardActions>
          <IconButton onClick={handleClose} style={{marginLeft:'auto'}}>
            <CancelPresentationIcon />
          </IconButton>
        </CardActions>   
        <TextField id="outlined-basic" label="Type Your Message Here" variant="outlined" style={{marginTop:'350px', width:'300px'}}/>
      </Card>}
    </div>
  )
}