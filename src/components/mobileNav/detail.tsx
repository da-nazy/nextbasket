
import React from 'react'
import { makeStyles } from 'tss-react/mui'
import { Box,Button,IconButton,Typography,useTheme} from '@mui/material'

import love from '../../assets/img/subhead/love.png';
import cart from '../../assets/img/subhead/cart.png';
import user from '../../assets/img/subhead/user.png';
import Image from 'next/image';
import SwipeDrawer from '../drawer';
import { useSelector } from 'react-redux';
import { appStore } from '../util';
import Cart from '../cart';
import Wishlist from '../whislist';

export default function ProductDetailMobileNav() {
    const theme=useTheme();
    const {classes}=styles();
    const [cartDrawer,setcartDrawer]=React.useState<boolean>(false);
    const [wishDrawer,setwishDrawer]=React.useState<boolean>(false);
    const cartList=useSelector((appStore:appStore)=>appStore.cart);
    const wishList=useSelector((appStore:appStore)=>appStore.wishlist);
  return (
   <Box className={classes.container}>
    <Box className={classes.sub}>
    <SwipeDrawer
      open={cartDrawer} 
      anchor={"left"} 
      drawerToggle={(e)=>setcartDrawer(e)}>
       <Cart handleClose={()=>setcartDrawer(!cartDrawer)}/>
      </SwipeDrawer>
      <SwipeDrawer
      open={wishDrawer} 
      anchor={"left"} 
      drawerToggle={(e)=>setwishDrawer(e)}>
       <Wishlist handleClose={()=>setwishDrawer(!wishDrawer)}/>
      </SwipeDrawer>
    <Button className={classes.navBtn}>Home</Button>
             <Button  className={classes.navBtnFocus}>Shop</Button>
             <Button className={classes.navBtn}>About</Button>
             <Button className={classes.navBtn}>Blog</Button>
             <Button className={classes.navBtn}>Contact</Button>
             <Button className={classes.navBtn}>Pages</Button>
             <Box><Button  color="primary" className={classes.logRegBtn} startIcon={<Image src={user.src} width={16} height={16} alt='user'/>}>Login / Register</Button></Box>
             <IconButton className={classes.icoBtn} onClick={()=>setcartDrawer(!cartDrawer)}>
                <Image src={cart.src} width={20} height={20} alt='cart'/>
                <Typography className={classes.icoTxt} color="primary">{cartList.length}</Typography>
                </IconButton>
                <IconButton className={classes.icoBtn} onClick={()=>setwishDrawer(!wishDrawer)}>
                <Image src={love.src} width={20} height={20} alt='love'/>
                <Typography className={classes.icoTxt} color="primary">{wishList.length}</Typography>
                </IconButton>
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
            alignItems:'center',
            position:'relative',
            zIndex:30000
        }
    },
    icoBtn:{
        display:'flex',
        flexDirection:'row',
        gap:theme.spacing(1)
       },
       icoTxt:{
        fontSize: "12px",
        fontWeight: 400,
        lineHeight: "16px",
        letterSpacing: "0.2px",
    },
    logRegBtn:{
        fontSize: "30px",
        fontWeight: 400,
        lineHeight: "45px",
        letterSpacing: "0.2px"
    },
    sub:{
        display:'flex',
        flex:1,
        width:'80%',
        flexDirection:'column',
        alignItems:'center',
        paddingBottom:theme.spacing(3)
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