import { Grid, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import GroupFilter from '../components/GroupFilter'
import { groups } from '../groupData'
import GroupCard from '../components/GroupCard';

export default function Group(){

  return(
    <div style={{paddingTop:"57px", display:'flex', backgroundColor:'#FCF4EF', height:'100vh'}}>
      <div style={{width:'360px'}}>
        <GroupFilter />
      </div>
        <div style={{textAlign:'left',padding:'50px', marginLeft:'100px'}}>
          <Typography variant="h5" sx={{}}>
            Suggested for you
          </Typography>
          <Typography variant="p1" sx={{}}>
            Groups you might be interested in.
          </Typography>
          <Grid container spacing={3} columns={12} style={{marginTop:'5px'}}>
            {groups.map(group => (
              <Grid item xs={3} key={group.id} style={{}}>
                <GroupCard group={group} />
              </Grid>
            ))}
          </Grid>
        </div>
    </div>
  )

};