"use client"
import { Box, useTheme } from '@mui/material';
import React, { Children } from 'react';
import { makeStyles } from 'tss-react/mui';
import Header from '../header';
import Footer from '../footer';


type props={
    children:React.ReactNode,
    isProductDetailPage?:boolean
}

export default function HomeWrapper({children,isProductDetailPage}:props) {
    const theme=useTheme();
    const {classes}=styles();
  return (
  <Box className={classes.container}>
     <Header isProductDetailPage={isProductDetailPage}/>
    <Box className={classes.child}>
         {children} 
    </Box>
     <Footer/>
  </Box>
  )
}
const styles=makeStyles()((theme)=>({
    container:{
      display:'flex',
      flexDirection:'column',
      height:'100%',
    },
    child:{
      minHeight:'800px',
      width:'100%',
      display:'flex',
      flex:1,
      //marginTop:'55px',
      flexDirection:'column',
    }
  }))