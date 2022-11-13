import React from 'react'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { IconButton, Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import CommentIcon from '@mui/icons-material/Comment';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Chip from '@mui/material/Chip';

export default function Postcard({ post }){

    return(
        <div>
            <Card sx={{ width: 500 }} style={{textAlign:'left',position:'relative'}}>
                <CardHeader
                    style={{backgroundColor:'#B99E9B'}}
                    avatar={<Avatar src={require(`../assets/${post.profile}`)}/>}
                    action={
                        <div>
                            {
                            post.type === "Event" && <Chip 
                            label={post.type} 
                            style={{backgroundColor:"#4681f4", color:"white"}}
                            >
                            </Chip>
                            } 
                            {
                            post.type === "Volunteering" && <Chip 
                            label={post.type} 
                            style={{backgroundColor:"#33b249", color:"white"}}
                            >
                            </Chip>
                            } 
                            {
                                post.type === "Report" && <Chip 
                                label={post.type} 
                                style={{backgroundColor:"#f44336", color:"white"}}
                                >
                                </Chip>
                            }
                            <IconButton>
                                <MoreVertIcon />
                            </IconButton>
                        </div>
                    }
                    title={<Typography style={{fontWeight:'bold', color:'#FCF4EF'}}>{post.author}</Typography>}
                    subheader={<Typography style={{color:'#FCF3EF'}}>{post.duration}</Typography>}
                />
                <CardContent>
                    <Typography variant="body2">
                        {post.description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <IconButton aria-label="location" style={{marginRight:'190px'}}>
                        <LocationOnIcon />
                        <Typography variant="body2">
                            {post.location}
                        </Typography>
                    </IconButton>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="comment">
                        <CommentIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                        <ShareIcon />
                    </IconButton>
                </CardActions>         
            </Card>
        </div>
    )
}