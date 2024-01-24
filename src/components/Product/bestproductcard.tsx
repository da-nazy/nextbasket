import React from 'react'
import { makeStyles } from 'tss-react/mui';
import { useTheme,Box, Typography } from '@mui/material';
type props={
    image?:string,
    title?:string,
    category?:string,
    price?:number,
    discountPercentage?:number,
    action?:()=>void
}
export default function BestProductCard({image,title,category,price,discountPercentage,action}:props) {
    const theme=useTheme();
    const {classes}=styles();
  return (
    <Box className={classes.container} onClick={()=>action&&action()}>
     <Box className={classes.imgCont}
     style={{
        backgroundImage:`url("${image}")`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
       }}
     >

     </Box>
     <Box className={classes.detCont}>
        <Typography className={classes.title}>{title}</Typography>
        <Typography className={classes.category}>{category}</Typography>
        <Box className={classes.priceCont}> 
            <Typography className={classes.price1}>${discountPercentage}</Typography>
            <Typography className={classes.price2}>${price}</Typography>
        </Box>
     </Box>
    </Box> 
  )
}

const styles=makeStyles()((theme)=>({
    container:{
     display:'flex',
     flexDirection:'column',
     height:'400px',
     "&:hover":{
        cursor:'pointer'
     }
    },
    imgCont:{
        height:"238px"
    },
    title:{
        color:theme.colors.text_color,
        textAlign: "center",
        fontSize: "16px",
        fontWeight: 700,
        lineHeight: "24px", 
        letterSpacing: "0.1px"
    },
    category:{
        color: theme.colors.second_text_color,
        textAlign: "center",
        fontSize: "14px",
        fontWeight: 700,
        lineHeight: "24px",
        letterSpacing:" 0.2px"
    },
    priceCont:{
     display:'flex',
     flexDirection:'row',
     justifyContent:'center',
     alignItems:'center',
     gap:theme.spacing(2)
    },
    price1:{
        color: theme.colors.muted_color,
        textAlign: "center",
        fontSize: "16px",
        fontWeight: 700,
        lineHeight: "24px", /* 150% */
        letterSpacing:" 0.1px"
    },
    price2:{
        color: theme.colors.secondary,
        textAlign: "center",
        fontSize: "16px",
        fontWeight: 700,
        lineHeight: "24px", /* 150% */
        letterSpacing: "0.1px"
    },
    detCont:{
      display:'flex',
      flexDirection:'column',
      padding:theme.spacing(3)  
    }
}))