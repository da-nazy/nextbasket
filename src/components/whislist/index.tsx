import React from 'react'
import { makeStyles } from 'tss-react/mui'
   import { Box, Button, IconButton, Paper, Typography,useTheme } from '@mui/material'
import { ArrowBack, Cancel } from '@mui/icons-material';
import product1 from '../../assets/img/product/product1.png';
import Image from 'next/image';
import { useSelector,useDispatch } from 'react-redux';
import { appStore, product } from '../util';
import { REMOVE_WISHLIST } from '@/store/wishlist';
import useToastAlert from '../hooks/useToastAlert';
import store from '@/store';
type props={
  handleClose:()=>void
}
export default function Wishlist({handleClose}:props) {
  const theme=useTheme();
  const {classes}=styles();
  const alert=useToastAlert();
  const dispatch=useDispatch();
  const wishList=useSelector((appStore:appStore)=>appStore.wishlist);
  const handleRemoveItem=(item:product)=>{
    dispatch(REMOVE_WISHLIST(item));
    alert({message:"Item Removed",type:"success"});
  }
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
    {wishList&&wishList.length>0?wishList.map((value,key)=>{
      return(
<Paper className={classes.card} key={key}>
       <Image width={100} height={100} alt="products" src={value.thumbnail?value.thumbnail:product1}/>
        <Box>
          <Typography className={classes.name}>{value.brand}</Typography>
          <Typography className={classes.price}>${value.price}</Typography>
        </Box>
        <Box><Button onClick={()=>handleRemoveItem(value)} variant={"outlined"}>Remove</Button></Box>
    </Paper>
      )
    }):<Typography>No Item Found!</Typography>}
  </Box>

  </Box>
  )
}
const styles=makeStyles()((theme)=>({
    container:{
     
     padding:theme.spacing(3),
     display:'flex',
     flexDirection:'column',
     gap:theme.spacing(2),
     backgroundColor:theme.colors.light_gray,
     [theme.breakpoints.down('sm')]:{
      width:'90vw'
     }
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
