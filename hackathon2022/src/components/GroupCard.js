import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function GroupCard({ group }){

    return(
        <div>
            <Card sx={{ maxWidth: 250, maxHeight: 350, padding:'5px'}}>
                <CardMedia 
                    component="img"
                    height="140"
                    image={require(`../assets/${group.image}`)}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                    {group.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    {`${group.members} members • ${group.frequency}`}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button variant="contained" sx={{backgroundColor:'#FC7061'}}>Join Group</Button>
                </CardActions>
            </Card>
        </div>
    )
}