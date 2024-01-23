import React from 'react'
import { useTheme ,Box, Typography} from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import user from '../../assets/img/Testimonial/user.jpg';
import test1 from '../../assets/img/Testimonial/test1.png';
import test2 from '../../assets/img/Testimonial/test2.png';
import test3 from '../../assets/img/Testimonial/test3.png';
import test4 from '../../assets/img/Testimonial/test4.png';
import test5 from '../../assets/img/Testimonial/test5.png';
import test6 from '../../assets/img/Testimonial/test6.png';
import test7 from '../../assets/img/Testimonial/test7.png';
import test8 from '../../assets/img/Testimonial/test8.png';
import test9 from '../../assets/img/Testimonial/test9.png';
import Image from 'next/image';
import BasicRating from '../Rating';
export default function Testimonial() {
    const theme=useTheme();
    const {classes}=styles();
  return (
    <Box className={classes.container}>
      <Box className={classes.sub}> 
       <Box className={classes.about}>
        <Typography className={classes.hdTxt}>
        What they say about us
        </Typography>
       <Box className={classes.content}>
       <Image width={90} height={90} alt="user" src={user.src} />
     <BasicRating value={4}/>
     <Typography className={classes.comment}>
     Slate helps you see how many more days you need to work to 
reach your financial goal.
     </Typography>
     <Typography className={classes.name}>Regina Miles</Typography>
     <Typography className={classes.name} style={{color:theme.colors.text_color}}>
     Designer
     </Typography>
       </Box>
       </Box>
       <Box className={classes.aboutImg}>
     <Box className={classes.imgCont}>
     <Image fill src={test1} alt="testimonial" />
     </Box>
     <Box className={classes.imgCont}>
     <Image fill src={test2} alt="testimonial" />
     </Box>
     <Box className={classes.imgCont}>
     <Image fill src={test3} alt="testimonial" />
     </Box>
     <Box className={classes.imgCont}>
     <Image fill src={test4} alt="testimonial" />
     </Box>
     <Box className={classes.imgCont}>
     <Image fill src={test5} alt="testimonial" />
     </Box>
     <Box className={classes.imgCont}>
     <Image fill src={test6} alt="testimonial" />
     </Box>
     <Box className={classes.imgCont}>
     <Image fill src={test7} alt="testimonial" />
     </Box>
     <Box className={classes.imgCont}>
     <Image  fill src={test8} alt="testimonial" />
     </Box>
     <Box className={classes.imgCont}>
     <Image fill src={test9} alt="testimonial" />
     </Box>
     
    
       </Box>
      </Box>
    </Box>
  )
}

const styles=makeStyles()((theme)=>({
container:{
    width:'100%',
    minHeight:'500px',
    marginTop:theme.spacing(5),
    paddingTop:theme.spacing(5),
    display:'flex',
    flexDirection:'column',
    alignItems:'center'
},
sub:{
    display:'grid',
    gridTemplateColumns:'1fr 1fr',
    gap:theme.spacing(3),
    flex:1,
    width:'80%'
},
hdTxt:{
    color:theme.colors.text_color,
    fontSize: "24px",
    fontWeight: 700,
    lineHeight: "32px", /* 133.333% */
    letterSpacing: "0.1px" 
},
about:{
 display:'flex',
 flexDirection:'column',
 gap:theme.spacing(3),
 alignItems:'center',
 padding:theme.spacing(4)
},
content:{
    display:'flex',
    flexDirection:'column',
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    gap:theme.spacing(3)
},
comment:{
    color:theme.colors.second_text_color,
    fontSize: "14px",
    textAlign:'center',
    fontWeight: 700,
    lineHeight: "24px", /* 171.429% */
    letterSpacing:"0.2px"
},
name:{
    fontSize: "14px",
    fontWeight: 700,
    lineHeight: "24px", /* 171.429% */
    letterSpacing: "0.2px"
},
aboutImg:{
    display:'grid',
    gridTemplateColumns:'1fr 1fr 1fr ',
    gap:theme.spacing(3),
    padding:theme.spacing(2)
},
imgCont:{
    position:'relative',
    height:'142px',
}
}))