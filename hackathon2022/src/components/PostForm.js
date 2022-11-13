import React from 'react'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { CardActions, Chip } from '@mui/material';

export default function PostForm(){
    const [types, setTypes] = React.useState([
        {text:'None', chosen: false,},
        {text:'Event', chosen: false,},
        {text:'Volunteer', chosen: false,},
        {text:'Report', chosen: false,},
      ]);
    
      const choices = types.map(choice => (
        <Chip 
            label={choice.text}
            style={{backgroundColor: choice.chosen && "gray",
            color: choice.chosen && "white"}}
            onClick={() => handleClick(choice)}
        />
    ))


    function handleClick(chosenType){
        setTypes(oldTypes => oldTypes.map(oldType => {
            return chosenType.text === oldType.text ?
            {...oldType, chosen: !oldType.chosen} :
            {...oldType, chosen: false}
        }))
    }
    
    return(
        <div>
            <Card sx={{ width: 500}} style={{textAlign:'left', padding:'10px'}}>
                <CardHeader
                        title={<TextField
                            id="filled-multiline-static"
                            label="What's Happening?"
                            multiline
                            rows={4}
                            defaultValue=""
                            variant="filled"
                            fullWidth
                            sx={{ backgroundColor:'white'}}
                          />}
                    />
                <CardActions>
                    {choices}
                    <Button variant="contained" style={{marginLeft:'auto', backgroundColor:'#FC7061 '}}>
                        Send
                    </Button>
                </CardActions>   
            </Card>
        </div>
    )
}