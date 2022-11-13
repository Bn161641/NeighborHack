import React from "react"
import { Grid } from "@mui/material"
import { data } from "../data"
import Postcard from "../components/Postcard"
import { Container } from "@mui/system"
import Box from "@mui/material/Box";

export default function Home(){

  return(
    <div>
     <Box
      style={{
        display:'flex',
        alignItems: 'center',
        justifyContent:'center',
      }}
     >
        <Grid container spacing={3} direction="column" 
          style={{
          display:'flex',
          alignItems: 'center',
          justifyContent:'center',
          padding:'20px'
          }}
        >
          {data.map(post => (
            <Grid item key={post.id}>
              <Postcard post={post} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  )
}