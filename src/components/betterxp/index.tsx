import React from 'react'
import { makeStyles } from 'tss-react/mui';
import { useTheme,Box,Typography, Button } from '@mui/material';
import xp from '../../assets/img/betterxp/xp.png';

export default function Betterxp() {
  const theme=useTheme();
const{classes}=styles();
  return (
   <Box className={classes.container} 
    style={{
    backgroundImage:`url("${xp.src}")`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
   }}>
  <Box className={classes.sub}>
    <Box className={classes.content}>
     <Typography className={classes.section}>
     Designing Better Experience
     </Typography>
     <Typography className={classes.name}>
     Problems trying to resolve 
the conflict between 
     </Typography>
     <Typography className={classes.desc}>
     Problems trying to resolve the conflict between the two major realms of Classical physics: 
     </Typography>
     <Typography className={classes.price}>$16.48</Typography>
     <Button variant={"contained"} className={classes.btn}>
     ADD YOUR CALL TO ACTION
     </Button>
    </Box>
  </Box>
   </Box>
  )
}

const styles=makeStyles()((theme)=>({
  container:{
  minHeight:'600px',

  marginTop:theme.spacing(5),
  paddingTop:theme.spacing(5),
  display:'flex',
  width:'100%',
  flexDirection:'column',
  alignItems:'center'
  },
  sub:{
    display:'flex',
    flexDirection:'column',
    width:'80%',
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  content:{
    width:'600px',
    display:'flex',
    flexDirection:'column',
    justifyContent:'space-between',
     minHeight:'350px',
     alignItems:'center'
  },
  section:{
    color:theme.colors.primary_text_color,
    textAlign: "center",
    fontSize: "14px",
    fontWeight: 700,
    lineHeight: "24px", 
    letterSpacing: "0.2px"
  },
  btn:{
   width:'300px',
   color:theme.colors.white
  },
  name:{
    color:theme.colors.text_color,
    textAlign: "center",
    fontSize: "40px",
    fontWeight: 700,
    lineHeight: "50px",
    letterSpacing: "0.2px",
  },
  desc:{
    color: theme.colors.second_text_color,
    textAlign: "center",
    fontSize: "14px",
    fontWeight: 400,
    lineHeight: "20px", 
    letterSpacing: "0.2px",
  },
  price:{
    color:theme.colors.secondary_color1,
    textAlign: "center",
    fontWeight: 700,
    lineHeight: "32px", 
    letterSpacing:"0.1px"
  }
}))