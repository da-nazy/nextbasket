import React from 'react'
import { useTheme,Box,Typography, Button, TextField, InputAdornment } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import MuiTextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import { Visibility } from '@mui/icons-material';

export default function Footer() {
  const theme=useTheme();
  const {classes}=styles();

  const TextField = styled(MuiTextField)(({ theme }) => ({
    '& .MuiOutlinedInput-root': {
      paddingLeft: 0,
      paddingRight:0,
    },
    '& .MuiInputAdornment-root': {
      backgroundColor: theme.colors.primary,
      padding: '28px 20px',
      margin:0,
      borderTopLeftRadius: theme.shape.borderRadius + 'px',
      borderBottomLeftRadius: theme.shape.borderRadius + 'px',
    },
  }));

  
  return (
   <Box className={classes.container}>
     <Box className={classes.foot}>
     <Box className={classes.navCont}>
<Typography className={classes.navHead}>Company Info</Typography>
{['About Us','Carrier','We are hiring','Blog'].map((value,key)=>{
  return(
    <Box  key={key} className={classes.navLinks}>
<Typography className={classes.navlink}>
  {value}
</Typography>
</Box>
  )
})}
</Box>
<Box className={classes.navCont}>
<Typography className={classes.navHead}>Legal</Typography>
{['About Us','Carrier','We are hiring','Blog'].map((value,key)=>{
  return(
    <Box  key={key} className={classes.navLinks}>
<Typography className={classes.navlink}>
  {value}
</Typography>
</Box>
  )
})}
</Box>
<Box className={classes.navCont}>
<Typography className={classes.navHead}>Features</Typography>
{['Business Marketing','User Analytic','Live Chat','Unlimited Support'].map((value,key)=>{
  return(
    <Box  key={key} className={classes.navLinks}>
<Typography className={classes.navlink}>
  {value}
</Typography>
</Box>
  )
})}
</Box>
<Box className={classes.navCont}>
<Typography className={classes.navHead}>Resources</Typography>
{['IOS & Android','Watch a Demo','Customers','API'].map((value,key)=>{
  return(
    <Box  key={key} className={classes.navLinks}>
<Typography className={classes.navlink}>
  {value}
</Typography>
</Box>
  )
})}
</Box>
<Box className={classes.navCont}>
<Typography className={classes.navHead}>Get In Touch</Typography>
<Box className={classes.navLinks}>
<TextField
  placeholder="Your Email"
  className={classes.input}
  InputProps={{
    endAdornment: (
      <InputAdornment position="start">
       <Button variant='outlined' className={classes.subBtn}>Subscribe</Button>
      </InputAdornment>
    ),
  }}
/>
<Typography className={classes.formTxt}>
Lore imp sum dolor Amit
</Typography>
</Box> 
</Box>
     </Box>
     <Box className={classes.subFoot}>
      <Box className={classes.subContent}>
        <Typography className={classes.madTxt}>Made With Love By Finland All Right Reserved </Typography>
      </Box>
     </Box> 
   </Box>
  )
}

const styles=makeStyles()((theme)=>({
  container:{
  minHeight:'300px',
  display:'flex',
  flexDirection:'column',
  alignItems:'center',
  paddingTop:theme.spacing(3)
  },
  foot:{
    width:'80%',
    display:'grid',
    gridTemplateColumns:'1fr 1fr 1fr 1fr 2fr',
    minHeight:'270',
    flex:1,
    [theme.breakpoints.down('lg')]:{
      gridTemplateColumns:'1fr 1fr ',
      gap:theme.spacing(3)
    },
    [theme.breakpoints.down('md')]:{
      gridTemplateColumns:'1fr',
      gap:theme.spacing(3)
    }
  },
  subBtn:{
   color:theme.colors.white,
  },
  subFoot:{
    minHeight:'74px',
    backgroundColor:theme.colors.light_gray,
    width:'100%',
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
    
  },
  formTxt:{
    color:theme.colors.second_text_color,
    fontSize: "12px",
    fontWeight: 400,
    lineHeight: "28px", /* 233.333% */
    letterSpacing: "0.2px"
  },
  input:{
    padding:'0px',
    margin:'0px',
    backgroundColor:theme.colors.light_gray
  },
  subContent:{
    width:'80%',

  },
  navCont:{
    flex:1,
  },
  navHead:{
    color: theme.colors.text_color,
    fontSize: "16px",
    fontWeight: 700,
    lineHeight: "24px", /* 150% */
    letterSpacing:" 0.1px"
  },
  navLinks:{
   marginTop:theme.spacing(3)
  },
  navlink:{
    color:theme.colors.second_text_color,
    fontSize: "14px",
    fontWeight: 700,
    lineHeight: "24px", /* 171.429% */
    letterSpacing: "0.2px"
  },
  madTxt:{
  color: theme.colors.text_color,
fontSize: "14px",
fontWeight: 700,
lineHeight: "24px", /* 171.429% */
letterSpacing: "0.2px"
  }
}))