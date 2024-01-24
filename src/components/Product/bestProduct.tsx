"use client"
import React, { useEffect } from 'react';
import { useTheme,Box, Typography, Divider } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import BestProductCard from './bestproductcard';
//products

import product1 from '../../assets/img/product/product1.png'
import product2 from '../../assets/img/product/product2.png'
import product3 from '../../assets/img/product/product3.png'
import product4 from '../../assets/img/product/product4.png'
import product5 from '../../assets/img/product/product5.png'
import product6 from '../../assets/img/product/product6.png'
import product7 from '../../assets/img/product/product7.png'
import product8 from '../../assets/img/product/product8.png'
import product9 from '../../assets/img/product/product9.png'
import product10 from '../../assets/img/product/product10.png'
import { allProducts, getProduct, getProducts, product } from '../util';
import { useMutation, useQuery } from 'react-query';
import { useRouter,useParams } from 'next/navigation';
import useToastAlert from '../hooks/useToastAlert';
export default function Bestproduct() {
  const alert=useToastAlert();
    const theme=useTheme();
    const {classes}=styles();
    const router=useRouter();

   
    const[productQuery,setProductQuery]=React.useState<boolean>(false);
    const [products,setProducts]=React.useState<allProducts>();

    //  const[productId,setProductId]=React.useState<number>();
    const {isLoading:isGetProducts}=useQuery('getProducts',
    ()=>getProducts(),{
     enabled:productQuery,
     onSettled:(data,error)=>{
      setProductQuery(false);
      if(error){
        let temp:{[key:string]:any}=error;
          console.log(error);
        alert({message:temp.mesage,type:'error'})
      }
      if(data as allProducts){
       setProducts(data);

      
        }
     }
    }
    )
    



    useEffect(()=>{
      setProductQuery(true);
      console.log("allProducts")
      },[]);

    

  return (
    <Box className={classes.container}>
      <Box className={classes.subCont}>
        <Box className={classes.head}>
         <Typography className={classes.headTxt}>
         BESTSELLER PRODUCTS
         </Typography> 
        </Box>
        <Divider className={classes.divider}/>
        <Box className={classes.products}>
        {products?.products&&products?.products.length>0&&products?.products.map((value,key)=>{
          return(
            <BestProductCard action={()=>router.push(`/products/${value.id}`)} key={value?.id} discountPercentage={value.discountPercentage}  price={value.price} category={value.category} image={value.thumbnail} title={value.title}/>
          )
        })}
      
        </Box>
      </Box>
    </Box>
  )
}

const styles=makeStyles()((theme)=>({
    container:{
      display:'flex',
      flexDirection:'column',
      alignItems:'center',
     width:'100%',
     minHeight:'600px',
     marginTop:theme.spacing(3),
     paddingBottom:theme.spacing(3),
     backgroundColor:theme.colors.light_gray,
    },
    divider:{
     background:theme.colors.light_gray2
    },
    head:{
        height:'48px',
        display:'flex',
        flexDirection:'row',
        alignItems:'center'
    },
    headTxt:{
        color:theme.colors.text_color,
        fontSize: "24px",
        fontWeight: 700,
        lineHeight: "32px", /* 133.333% */
        letterSpacing: "0.1px",
    },
    subCont:{
        flex:1, 
        width:'80%',
        marginTop:theme.spacing(3),
        display:'flex',
        flexDirection:'column',
        gap:theme.spacing(3)
    },
    products:{
        display:'grid',
        gridTemplateColumns:'1fr 1fr 1fr 1fr',
        gap:theme.spacing(3),
        [theme.breakpoints.down('lg')]:{
          gridTemplateColumns:'1fr 1fr 1fr'
        },
        [theme.breakpoints.down('md')]:{
          gridTemplateColumns:'1fr 1fr '
        },
        [theme.breakpoints.down('sm')]:{
          gridTemplateColumns:'1fr'
        }
    }
}))