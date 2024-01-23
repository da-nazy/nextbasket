import React from 'react'
import { Box, Typography, useTheme } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
type props={
    image:string,
    fontSize?:number
}
export default function FurnitureCard({image,fontSize}:props) {
    const theme=useTheme();
    const {classes}=styles();
  return (
    <Box className={classes.container}
     style={{
        backgroundImage:`url("${image}")`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
       }}>
        <Box className={classes.descCont}>
            <Typography className={classes.itemTxt} >5 Items</Typography>
            <Typography className={classes.furnTxt} style={{fontSize:fontSize?`${fontSize}px`:'24px'}}>FURNITURE</Typography>
            <Typography className={classes.readTxt}>Read More</Typography>

        </Box>
     
    </Box>
  )
}

const styles=makeStyles()((theme)=>({
  container:{
     width:'100%',
     height:'100%',
     display:'flex',
     flexDirection:'column'
    
  },
  descCont:{
    minHeight:'100px',
    display:'flex',
    flexDirection:'column',
    padding:theme.spacing(3)
  },
  itemTxt:{
    color: theme.colors.success_text_color,
    fontSize: "14px",
    fontWeight: 700,
    lineHeight: "24px", 
    letterSpacing: "0.2px"
  },
  furnTxt:{
    color:theme.colors.text_color,
    fontWeight: 700,
    lineHeight: "50px", /* 125% */
    letterSpacing: "0.2px"
  },
  readTxt:{
    color:theme.colors.text_color,
    fontSize: "14px",
    fontWeight: 700,
    lineHeight: "24px", /* 171.429% */
    letterSpacing: "0.2px"
  }
}))