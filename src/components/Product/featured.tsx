import React from 'react'
import { useTheme ,Box, Typography} from '@mui/material'
import { makeStyles } from 'tss-react/mui'
import carbon_book from '../../assets/img/featuredProduct/carbon_book.png';
import growth from '../../assets/img/featuredProduct/growth.png';
import read from '../../assets/img/featuredProduct/read.png';

import Image from 'next/image';
export default function FeaturedProduct() {
    const theme=useTheme();
    const {classes}=styles();
  return (
   <Box className={classes.container}>
      <Box className={classes.product}>
      <Box className={classes.productHd}>
       <Typography className={classes.fpTxt}>Featured Products</Typography>
       <Typography className={classes.bpTxt}>THE BEST SERVICES</Typography>
       <Typography className={classes.ptTxt}>Problems trying to resolve the conflict between</Typography>
      </Box>
      <Box className={classes.cardMain}>
      <Box className={classes.cardCont}>
         <Box className={classes.card}>
          <Image width={72} height={72}  src={read.src} alt="featured product" />
          <Typography className={classes.title}>Easy Wins</Typography>
          <Typography className={classes.description}>Get your best looking smile now!</Typography>
         </Box>
         <Box className={classes.card}>
          <Image width={72} height={72}  src={carbon_book.src} alt="featured product" />
          <Typography className={classes.title}>Concrete</Typography>
          <Typography className={classes.description}>Defalcate is most focused in helping you discover your most beautiful smile</Typography>
         </Box>
         <Box className={classes.card}>
          <Image width={72} height={72}  src={growth.src} alt="featured product" />
          <Typography className={classes.title}>Hack Growth</Typography>
          <Typography className={classes.description}>Overcame any hurdle or any other problem.</Typography>
         </Box>
      </Box>
      </Box>
      </Box>  
   </Box>
  )
}

const styles=makeStyles()((theme)=>({
    container:{
     width:'100%',
     marginTop:theme.spacing(5),
     minHeight:'600px',
     display:'flex',
     justifyContent:'center',
     paddingTop:theme.spacing(5)
    },
    product:{
     width:'80%',
     display:'flex',
     flexDirection:'column'
     
    },
    title:{
        color: theme.colors.text_color,
        textAlign: "center",
        fontSize: "24px",
        fontWeight: 700,
        lineHeight: "32px",/* 133.333% */
        letterSpacing:" 0.1px"
    },
    description:{
        color: theme.colors.second_text_color,
        textAlign: "center",
        fontSize: "14px",
        fontWeight: 400,
        lineHeight: "20px", 
        letterSpacing: "0.2px"
    },
    card:{
     height:'254px',
     display:'flex',
     flexDirection:'column',
     alignItems:'center',
     justifyContent:'center',
     padding:theme.spacing(3)
    },
    cardMain:{
      display:'flex',
      flexDirection:'column',
      justifyContent:'center',
      flex:1,
    },
    cardCont:{
     display:'grid',
     gridTemplateColumns:'1fr 1fr 1fr',
     gap:theme.spacing(3),
     
    },
    productHd:{
        display:'flex',
        flexDirection:'column'
       },
    fpTxt:{
        color:theme.colors.second_text_color,
        textAlign: "center",
        fontSize: "20px",
        fontWeight: 400,
        lineHeight: "30px",
        letterSpacing:"0.2px",
    },
    bpTxt:{
        color:theme.colors.text_color,
        textAlign: "center",
        fontSize: "24px",
        fontWeight: 700,
        lineHeight: "32px", 
        letterSpacing:"0.1px"
    },
    ptTxt:{
        color:theme.colors.second_text_color,
        textAlign: "center",
        fontSize: "14px",
        fontWeight: 400,
        lineHeight: "20px", 
        letterSpacing: "0.2px"
    },
}))