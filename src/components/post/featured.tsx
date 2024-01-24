import React from 'react'
import { makeStyles } from 'tss-react/mui'
import { useTheme,Box, Typography } from '@mui/material';
import Featuredcard from './featuredcard';
import post1 from '../../assets/img/featuredpost/post1.png'
import post2 from '../../assets/img/featuredpost/post2.png'
import post3 from '../../assets/img/featuredpost/post3.png'
export default function FeaturedPosts() {
    const theme=useTheme();
    const{classes}=styles();
  return (
   <Box className={classes.container}>
    <Box className={classes.sub}>
        <Box className={classes.head}>
      <Typography className={classes.section}>Practice Advice</Typography>
      <Typography className={classes.title}>Featured Posts</Typography>
        </Box>
        <Box className={classes.product}>
          <Featuredcard image={post1.src}/> 
          <Featuredcard image={post2.src}/>
          <Featuredcard image={post3.src}/>
        </Box>
    </Box>
   </Box>
  )
}

const styles=makeStyles()((theme)=>({
    container:{
     width:'80%',
     minHeight:'600px',
     display:'flex',
     justifyContent:'center',
     marginTop:theme.spacing(5),
    },
    product:{
     display:'grid',
     gridTemplateColumns:'1fr 1fr 1fr',
     gap:theme.spacing(3),
     marginTop:theme.spacing(5),
     [theme.breakpoints.down('md')]:{
      gridTemplateColumns:'1fr 1fr'
     },
     [theme.breakpoints.down('sm')]:{
      gridTemplateColumns:'1fr '
     } 
    },
    sub:{

    flex:1,
    display:'flex',
    flexDirection:'column',
    gap:theme.spacing(3)
    },
    head:{
        display:'flex',
        flexDirection:'column'
    },
    title:{
        color:theme.colors.text_color,
        textAlign: "center",
        fontSize: "40px",
        fontWeight: 700,
        lineHeight: "50px",
        letterSpacing: "0.2px"
    },
    section:{
        color: theme.colors.primary,
textAlign: "center",
fontSize: "14px",
fontWeight: 700,
lineHeight: "24px",
letterSpacing: "0.2px",
    }
}))