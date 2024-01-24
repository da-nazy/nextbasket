import React from 'react'
import { makeStyles } from 'tss-react/mui'
   import { Box, Button, IconButton, Paper, Typography,useTheme } from '@mui/material'
import { Add, ArrowBack, Cancel, HdrPlus, Remove } from '@mui/icons-material';
import product1 from '../../assets/img/product/product1.png';
import Image from 'next/image';
import { ClassNames } from '@emotion/react';
import { useSelector,useDispatch } from 'react-redux';
import { appStore, product } from '../util';
import { REMOVE_CART } from '@/store/cart';
import useToastAlert from '../hooks/useToastAlert';

type props={
    handleClose:()=>void
}
export default function Cart({handleClose}:props) {
  const theme=useTheme();
  const {classes}=styles();
  const dispatch=useDispatch();
  const alert=useToastAlert();
  const cartList=useSelector((appStore:appStore)=>appStore.cart);
  const handleRemoveCart=(item:product)=>{
    dispatch(REMOVE_CART(item));
    alert({message:"Cart removed",type:"success"});
  }
  const totalPrice=():number=>{
        let total=0;
           cartList&&cartList.forEach((value)=>{
            total+=Number.parseFloat(`${value.price}`)
           })
  return total;
  }
  return (
  <Box className={classes.container}>
    <Box className={classes.head}>
    <Typography className={classes.title}>
        Cart
      </Typography>
      <IconButton onClick={()=>handleClose()}>
        <Cancel color="secondary"/>
    </IconButton>
    </Box>
  <Box className={classes.content}>
    {cartList&&cartList.length>0?
      cartList.map((value)=>{
        return(
          <Paper key={value.id} className={classes.card}>
      <Image width={100} height={100} alt="products" src={product1}/>
       <Box>
         <Typography className={classes.name}>{value.title}</Typography>
         <Typography className={classes.price}>${value.price}</Typography>
       </Box>
       <Box className={classes.removeAdd}>
         <Box className={classes.subAdd}>
           <IconButton disabled={value.quantity===1} color="primary" size="small"><Remove/></IconButton>
           <Typography className={classes.price} >{value.quantity}</Typography>
           <IconButton color="primary" size="small"><Add/></IconButton>
         </Box>
         <Button onClick={()=>handleRemoveCart(value)} variant={"outlined"}>Remove</Button></Box>
   </Paper>
        )
      }):
   <Typography >No cart item found!</Typography>
    }


    
  
  </Box>
  <Box>
    <Box className={classes.total}>
        <Typography className={classes.name}>TOTAL COST</Typography>
        <Typography className={classes.price}>${totalPrice()}</Typography>
    </Box>
    <Box className={classes.btnCont}>
        <Button className={classes.btn} fullWidth variant="contained">CHECKOUT</Button>
    </Box>
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
    removeAdd:{
     display:'flex',
     flexDirection:'column',
     height:'100%',
     justifyContent:'space-between',
     gap:theme.spacing(2),
    
    },
    subAdd:{
     display:'flex',
     flexDirection:'row',
     gap:theme.spacing(2),
     alignItems:'center'
    },
    total:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:theme.spacing(3)
    },
    btnCont:{
      marginTop:theme.spacing(3)  
    },
    btn:{
     color:theme.colors.white
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
