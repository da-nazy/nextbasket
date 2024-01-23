"use client"
import React from 'react';
import { useTheme,Box, Divider } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import ProductSection from './productsection';
import QuickJump from './quickjump';
import Bestproduct from './bestProduct';
import Clients from '../clients';
import Bandage from '../footer/bandage2';
export default function OneProduct() {
    const theme=useTheme();
    const {classes}=styles();
  return (
    <Box className={classes.container}>
     <ProductSection/>
     <QuickJump/>
     <Bestproduct/>
     <Clients/>
     <Bandage/>
     <Divider className={classes.divider}/>
    </Box>
  )
}

const styles=makeStyles()((theme)=>({
    container:{
     flex:1,
     width:'100%',
     display:'flex',
     flexDirection:'column',
     alignItems:'center'
    },
    divider:{
        marginTop:theme.spacing(3),
        marginBottom:theme.spacing(3),
        display:'flex',
        width:'80%',
        alignSelf:'center'
    }
}))