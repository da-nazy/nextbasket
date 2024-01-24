"use client"
import { AppBar, Box, Button, IconButton, Toolbar, Typography, useTheme } from '@mui/material';
import Image from 'next/image';
import React, { useState } from 'react';
import { makeStyles } from 'tss-react/mui';
import phone from '../../assets/img/header/phone.png';
import facebook from '../../assets/img/header/facebook.png';
import instagram from '../../assets/img/header/instagram.png';
import mail from '../../assets/img/header/mail.png';
import twitter from '../../assets/img/header/twitter.png';
import youtube from '../../assets/img/header/youtube.png';

import search from '../../assets/img/subhead/search.png';
import love from '../../assets/img/subhead/love.png';
import cart from '../../assets/img/subhead/cart.png';
import user from '../../assets/img/subhead/user.png';

import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import SwipeableTemporaryDrawer from '../drawer';
import SwipeDrawer from '../drawer';
import Wishlist from '../whislist';
import Cart from '../cart';
import { useSelector } from 'react-redux';
import { appStore } from '../util';

// for product menu
import ic_menu from '../../assets/img/homenav/ic_menu.png'
import ic_cart from '../../assets/img/homenav/ic_cart.png'
import ic_search from '../../assets/img/homenav/ic_search.png'

export default function Header() {
    const theme=useTheme();
    const {classes}=styles();
    const [cartDrawer,setcartDrawer]=useState<boolean>(false);
    const [wishDrawer,setwishDrawer]=useState<boolean>(false);
    const cartList=useSelector((appStore:appStore)=>appStore.cart);
    const wishList=useSelector((appStore:appStore)=>appStore.wishlist);

  return (
    <Box className={classes.container}>
    <AppBar position="fixed" color="secondary" className={classes.mainHeader}>
      <Box className={classes.mainCont}>
        <Box className={classes.phoneMail}>
            <Box className={classes.mail}> <Image src={phone.src} width={16} height={16} alt='phone'/><Typography className={classes.phoneTxt}>(225) 555-0118</Typography></Box>
            <Box className={classes.phone}> <Image src={mail.src} width={16} height={16} alt='mail'/><Typography className={classes.phoneTxt}>michelle.rivera@example.com</Typography></Box>
        </Box>
        <Box className={classes.phoneTxtCont}> 
            <Typography className={classes.phoneTxt}>Follow Us  and get a chance to win 80% off</Typography>
            
        </Box>
        <Box className={classes.follow}>
            <Typography className={classes.phoneTxt}>Follow Us :</Typography>
            <Box className={classes.social}>
            <Image src={instagram.src} width={16} height={16} alt='instagram'/>
            <Image src={youtube.src} width={16} height={16} alt='youtube'/>
            <Image src={facebook.src} width={16} height={16} alt='facebook'/>
            <Image src={twitter.src} width={16} height={16} alt='twitter'/>
            </Box>
        </Box>
      </Box>
     </AppBar>
     <Box className={classes.subHead}>
        <Box className={classes.subCont}>
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
        <Box>
             <Typography className={classes.bdTxt}>
            Bandage
            </Typography></Box>
        <Box className={classes.navCont}>
             <Button className={classes.navBtn}>Home</Button>
             <Button  className={classes.navBtnFocus} endIcon={<ExpandMoreOutlinedIcon/>}>Shop</Button>
             <Button className={classes.navBtn}>About</Button>
             <Button className={classes.navBtn}>Blog</Button>
             <Button className={classes.navBtn}>Contact</Button>
             <Button className={classes.navBtn}>Pages</Button>
        </Box>

        <Box className={classes.logCont}>
            <Box><Button  color="primary" className={classes.logRegBtn} startIcon={<Image src={user.src} width={16} height={16} alt='user'/>}>Login / Register</Button></Box>
            <Box className={classes.icoCont}>
                <IconButton>
                <Image src={search.src} width={16} height={16} alt='search'/>
                </IconButton>
                <IconButton className={classes.icoBtn} onClick={()=>setcartDrawer(!cartDrawer)}>
                <Image src={cart.src} width={16} height={16} alt='cart'/>
                <Typography className={classes.icoTxt} color="primary">{cartList.length}</Typography>
                </IconButton>
                <IconButton className={classes.icoBtn} onClick={()=>setwishDrawer(!wishDrawer)}>
                <Image src={love.src} width={16} height={16} alt='love'/>
                <Typography className={classes.icoTxt} color="primary">{wishList.length}</Typography>
                </IconButton>
            </Box>
        </Box>
        <Box className={classes.homeNav}>
                <IconButton>
                <Image src={ic_search.src} width={24} height={24} alt='search'/>
                </IconButton>
                <IconButton>
                <Image src={ic_cart.src} width={24} height={24} alt='search'/>
                </IconButton>
                <IconButton>
                <Image src={ic_menu.src} width={24} height={24} alt='search'/>
                </IconButton>
               
        </Box>
     </Box>
     </Box>
     
  </Box>
  )
}

const styles=makeStyles()((theme)=>({
    container:{
   
    },
    homeNav:{
     display:'none',
     [theme.breakpoints.down('sm')]:{
        display:'flex ',
        flexDirection:'row',
        gap:theme.spacing(3),
    }
    },
    icoCont:{
    display:'flex',
    flexDirection:'row',
    gap:theme.spacing(2)
    },
    phoneTxtCont:{
    [theme.breakpoints.down('lg')]:{
        display:'none !important',
       
    }
    },
    navCont:{
     '@media (max-width:1004px)': {
        display:'none !important'
    }
    },
    icoTxt:{
        fontSize: "12px",
        fontWeight: 400,
        lineHeight: "16px",
        letterSpacing: "0.2px",
    },
    icoBtn:{
     display:'flex',
     flexDirection:'row',
     gap:theme.spacing(1)
    },
    logCont:{
    display:'flex',
    flexDirection:'row',
    gap:theme.spacing(2),
    alignItems:'center',
    [theme.breakpoints.down('sm')]:{
       display:'none !important'
    }
    },
    logRegBtn:{
        fontSize: "14px",
        fontWeight: 700,
        lineHeight: "24px",
        letterSpacing: "0.2px"
    },
    bdTxt:{
     color:theme.colors.text_color,
fontSize:"24px",
fontWeight:"700",
lineHeight:"32px",
letterSpacing:"0.1px",
    },
    phoneMail:{
     display:'flex',
     flexDirection:'row',
     alignItems:'center',
     gap:theme.spacing(4),
    },
    navBtn:{
        color:theme.colors.second_text_color,
        fontSize: "14px",
        fontWeight: 700,
        lineHeight: "24px", /* 171.429% */
        letterSpacing: "0.2px"
    },
    navBtnFocus:{
        color:theme.colors.text_color,
        fontSize: "14px",
        fontWeight: 500,
        lineHeight: "28px", /* 200% */
        letterSpacing:"0.2px"
    },
    follow:{
     display:'flex',
     flexDirection:'row',
     gap:theme.spacing(2),
    },
    subHead:{
     marginTop:'60px',
     height:'84px',
     display:'flex',
     justifyContent:'center',
     flexDirection:'row',
     [theme.breakpoints.down('sm')]:{
        marginTop:'0px !important'
    }
    },
    subCont:{
        width:'90%',
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignSelf:'center',
        alignItems:'center'
    },
    social:{
     display:'flex',
     flexDirection:'row',
     gap:theme.spacing(2),
     minWidth:'80px',
     justifyContent:'spacebetween',
     alignItems:'center'
    },
    mail:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        gap:theme.spacing(2)
    },
    phone:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        gap:theme.spacing(2) ,
        [theme.breakpoints.down('md')]:{
            display:'none !important'
        }
    },
    phoneTxt:{
        color:theme.colors.light_text_color,   
        fontStyle: "normal",
        fontWeight: 700,
        fontSize:'14px',
        lineHeight: "24px",
        letterSpacing: "0.2px"
    },
    mainHeader:{
        height:'60px',
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        [theme.breakpoints.down('sm')]:{
            display:'none !important'
        }
    },
    mainCont:{
        width:'90%',
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    }
}))