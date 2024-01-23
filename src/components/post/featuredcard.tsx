import React from 'react'
import { makeStyles } from 'tss-react/mui'
import { useTheme,Box, Typography, Button,Paper } from '@mui/material';
import dateimg from '../../assets/img/featuredpost/date.png';
import stat from '../../assets/img/featuredpost/stat.png';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import arrownext from '../../assets/img/featuredpost/arrownext.png';
import Image from 'next/image'
type props={
    image:any
}
export default function Featuredcard({image}:props) {
    const theme=useTheme();
    const {classes}=styles();
  return (
    <Paper className={classes.container}>
     <Box className={classes.imgCont} 
     style={{
        backgroundImage:`url("${image}")`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
       }}>
       <Button className={classes.btnTxt} variant={"contained"} color={"error"}>New</Button>
     </Box>
     <Box className={classes.detail}>
        <Box className={classes.nav}>
            <Typography className={classes.navTxt}>
            Google
            </Typography>
            <Typography className={classes.navTxt} style={{color:theme.colors.second_text_color}}>
            Trending 
            </Typography>
            <Typography className={classes.navTxt} style={{color:theme.colors.second_text_color}}>
            New
            </Typography>
        </Box>
        <Typography className={classes.title}>
        Loudest à la Madison #1 (L&apos;integral)
        </Typography>
        <Typography className={classes.description}>
        We focus on ergonomics and meeting 
        you where you work. It&apos;s only a 
        keystroke away.
        </Typography>
        <Box className={classes.dateCont}>
            <Box className={classes.dcCont}>
                <Image width={16} height={16} src={dateimg.src} alt={"date"}/>
                <Typography className={classes.dateCommentTxt}>
                22 April 2021
                </Typography>
            </Box>
            <Box className={classes.dcCont}>
            <Image width={16} height={16} src={stat.src} alt={"comment"}/>
                <Typography className={classes.dateCommentTxt}>
                10 comments
                </Typography>
            </Box>
        </Box>
        <Box>
           <Button className={classes.btn} endIcon={ <Image width={9} height={16} src={arrownext.src} alt={"comment"}/>}>
           Learn More
           </Button>
        </Box>
         </Box>
    </Paper>
  )
}

const styles=makeStyles()((theme)=>({
    container:{
    minHeight:'600px',
    display:'grid',
    gridTemplateRows:'1fr 1fr'
    },
    imgCont:{
        padding:theme.spacing(3)
        
    },
    dateCont:{
   display:'flex',
   flexDirection:'row',
   justifyContent:'space-between',
   alignItems:'center'
    },
    icon:{
   width:'9px',
   height:'16px'
    },
    btn:{
        color: theme.colors.second_text_color,
        fontSize: "14px",
        fontWeight: 700,
        lineHeight: "24px", /* 171.429% */
        letterSpacing: "0.2px",
    },
    dcCont:{
    display:'flex',
    flexDirection:'row',
    gap:theme.spacing(2),
    alignItems:'center'
    },
    dateCommentTxt:{
        color:theme.colors.second_text_color,
        fontSize: "12px",
        fontWeight: 400,
        lineHeight: "16px", /* 133.333% */
        letterSpacing: "0.2px"
    },
    nav:{
    display:'flex',
    flexDirection:'row',
    gap:theme.spacing(3)
    },
    navTxt:{
        fontSize: "12px",
        fontWeight: 400,
        lineHeight: "16px",
        letterSpacing: "0.2px"
    },
    title:{
        color: theme.colors.text_color,
        fontSize: "20px",
        fontWeight: 400,
        lineHeight: "30px",
        letterSpacing:" 0.2px"
    },
    detail:{
        display:'flex',
        flexDirection:'column',
        padding:theme.spacing(3),
        gap:theme.spacing(3)
    },
    description:{
        color:theme.colors.second_text_color,
        fontSize: "14px",
        fontWeight: 400,
        lineHeight: "20px",/* 142.857% */
        letterSpacing: "0.2px"
    },
btnTxt:{
fontSize: "14px",
fontWeight: 700,
lineHeight: "24px",/* 171.429% */
letterSpacing:"0.2px",
padding: "0px 10px"
    },

}))