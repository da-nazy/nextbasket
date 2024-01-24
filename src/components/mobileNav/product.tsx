import React from 'react'
import { makeStyles } from 'tss-react/mui'
import { Box,Button,Typography,useTheme} from '@mui/material'
import { ClassNames } from '@emotion/react'
export default function ProductNavMobile() {
    const theme=useTheme();
    const {classes}=styles();
  return (
   <Box className={classes.container}>
    <Box className={classes.sub}>
    <Button className={classes.navBtn}>Home</Button>
             <Button  className={classes.navBtnFocus}>Shop</Button>
             <Button className={classes.navBtn}>About</Button>
             <Button className={classes.navBtn}>Blog</Button>
             <Button className={classes.navBtn}>Contact</Button>
             <Button className={classes.navBtn}>Pages</Button>
    </Box>
   </Box>
  )
}

const styles=makeStyles()((theme)=>({
    container:{
        display:'none',
        [theme.breakpoints.down('sm')]:{
            display:'flex',
            minHeight:'400px',
            flexDirection:'column',
            minWidth:'100vw',
            backgroundColor:theme.colors.white,
            alignItems:'center'
        }
    },
    sub:{
        display:'flex',
        flex:1,
        width:'80%',
        flexDirection:'column'
    },
    navBtn:{
        color:theme.colors.second_text_color,
        fontSize: "30px",
        fontWeight: 400,
        lineHeight: "45px", /* 171.429% */
        letterSpacing: "0.2px"
    },
    navBtnFocus:{
        color:theme.colors.text_color,
        fontSize: "30px",
        fontWeight: 400,
        lineHeight: "45px", /* 171.429% */
        letterSpacing: "0.2px"
    },
}))