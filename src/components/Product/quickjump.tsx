"use client"
import React from 'react';
import { useTheme,Box, Typography } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import office from '../../assets/img/quickjump/office.png';
import Image from 'next/image';
export default function QuickJump() {
    const theme=useTheme();
    const {classes}=styles();
  return (
    <Box className={classes.container}>
     <Box className={classes.head}>
      <Box className={classes.nav}>
      <Typography className={classes.navTxt} color="text.secondary">Description</Typography>
      <Typography className={classes.navTxt} color="text.secondary">Additional Information</Typography>
      <Box className={classes.dNav}>
        <Typography className={classes.navTxt} color="text.secondary">Reviews</Typography>
        <Typography className={classes.navTxt} color="secondary">(0)</Typography>
      </Box>
      </Box>
     </Box>
     <Box className={classes.content}> 
    <Box className={classes.articleCont}>
    <Typography className={classes.jumpTxt}>
        the quick fox jumps over 
        </Typography>
      <Box className={classes.article}>
       
        <Box className={classes.desc}>
            <Typography className={classes.descTxt}>
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
            </Typography>
        </Box>
        <Box className={classes.subDesc}> 
            <Typography  className={classes.descTxt}>
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.   </Typography>
        </Box>
        <Box className={classes.desc}>
            <Typography className={classes.descTxt}>
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.   </Typography>
        </Box>

      </Box>
    </Box>
      <Box className={classes.imgCont}>
        <Box className={classes.img}>
       <Image src={office.src} fill alt="office" />
        </Box>
      </Box>
     </Box>
       
    </Box> 
  )
}

const styles=makeStyles()((theme)=>({
    container:{
     width:'100%',
     display:'flex',
     flexDirection:'column',
     alignItems:'center',
     justifyContent:'center'
    },
    articleCont:{
     display:'flex',
     flexDirection:'column',
    
    },
    jumpTxt:{
        color: theme.colors.text_color,
        fontSize: "24px",
        fontWeight: 700,
        lineHeight: "32px", /* 133.333% */
        letterSpacing: "0.1px"
    },
    descTxt:{
        color:theme.colors.second_text_color,
        fontSize: "14px",
        fontWeight: 400,
        lineHeight: "20px", /* 142.857% */
        letterSpacing: "0.2px"
    },
    desc:{
        width:'80%',
    },
    head:{
    height:'72px',
    width:'80%',
    display:'flex'
    },
    content:{
     marginTop:theme.spacing(4),
     display:'grid',
     minHeight:'400px',
     gridTemplateColumns:"1.5fr 1fr",
     width:'80%',
     [theme.breakpoints.down('md')]:{
      gridTemplateColumns:'1fr'
     }
    },
    article:{
    display:'flex',
    flexDirection:'column',
    justifyContent:'space-evenly',
    paddingBottom:theme.spacing(3),
    flex:1
    },
    imgCont:{
     
        padding:theme.spacing(2)
    },
    img:{
     position:'relative',
     height:'372px'
    },
    subDesc:{
    borderLeft:`3px solid ${theme.colors.secondary}`,
    paddingLeft:theme.spacing(3),
    width:'80%',
    },
    nav:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        flex:1,
        gap:theme.spacing(4)
    },
    navTxt:{
fontSize: "14px",
fontWeight: 700,
lineHeight: "24px",
letterSpacing: "0.2px"
    },
    dNav:{
        display:'flex',
        flexDirection:'row',
        gap:theme.spacing(2)
    }
}))