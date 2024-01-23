import React from 'react'
import { makeStyles } from 'tss-react/mui'
   import { Box, Button, IconButton, Paper, Typography,useTheme } from '@mui/material'
import { ArrowBack, Cancel } from '@mui/icons-material';
import product1 from '../../assets/img/product/product1.png';
import Image from 'next/image';
import { ClassNames } from '@emotion/react';
type props={
  handleClose:()=>void
}
export default function Wishlist({handleClose}:props) {
  const theme=useTheme();
  const {classes}=styles();

  return (
  <Box className={classes.container}>
    <Box className={classes.head}>
    <Typography className={classes.title}>
        WishList
      </Typography>
      <IconButton onClick={()=>handleClose()}>
        <Cancel color="secondary"/>
      </IconButton>
      
    </Box>
  <Box className={classes.content}>
  <Paper className={classes.card}>
       <Image width={100} height={100} alt="products" src={product1}/>
        <Box>
          <Typography className={classes.name}>Powerfull chair</Typography>
          <Typography className={classes.price}>$1,139.33</Typography>
        </Box>
        <Box><Button variant={"outlined"}>Remove</Button></Box>
    </Paper>
    <Paper className={classes.card}>
       <Image width={100} height={100} alt="products" src={product1}/>
        <Box>
          <Typography className={classes.name}>Powerfull chair</Typography>
          <Typography className={classes.price}>$1,139.33</Typography>
        </Box>
        <Box><Button variant={"outlined"}>Remove</Button></Box>
    </Paper>
    <Paper className={classes.card}>
       <Image width={100} height={100} alt="products" src={product1}/>
        <Box>
          <Typography className={classes.name}>Powerfull chair</Typography>
          <Typography className={classes.price}>$1,139.33</Typography>
        </Box>
        <Box><Button variant={"outlined"}>Remove</Button></Box>
    </Paper>
    <Paper className={classes.card}>
       <Image width={100} height={100} alt="products" src={product1}/>
        <Box>
          <Typography className={classes.name}>Powerfull chair</Typography>
          <Typography className={classes.price}>$1,139.33</Typography>
        </Box>
        <Box><Button variant={"outlined"}>Remove</Button></Box>
    </Paper>
  </Box>

  </Box>
  )
}
const styles=makeStyles()((theme)=>({
    container:{
     width:'400px',
     padding:theme.spacing(3),
     display:'flex',
     flexDirection:'column',
     gap:theme.spacing(2),
     backgroundColor:theme.colors.light_gray
    },
    title:{
      color:theme.colors.text_color,
fontSize: "18px",
fontWeight: 700,
letterSpacing:" 0.1px"
   },
   card:{
   display:'flex',
   flexDirection:'row',
   gap:theme.spacing(2),
   padding:theme.spacing(2),
   justifyContent:'space-between',
   alignItems:'center'
   },
   content:{
    display:'grid',
    gridTemplateColumns:'1fr',
    gap:theme.spacing(3)
   },
    head:{
   display:'flex',
   flexDirection:'row',
   alignItems:'center',
   justifyContent:'space-between'
    },
    name:{
      color:theme.colors.text_color,
      textAlign: "center",
      fontSize: "16px",
      fontWeight: 700,
      lineHeight: "24px", 
      letterSpacing: "0.1px"
  },
  price:{
    color: theme.colors.secondary,
    textAlign: "center",
    fontSize: "16px",
    fontWeight: 700,
    lineHeight: "24px", /* 150% */
    letterSpacing: "0.1px"
}
}))
