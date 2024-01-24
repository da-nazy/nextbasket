"use client"
import React, { CSSProperties, useEffect } from 'react'
import { makeStyles } from 'tss-react/mui'
import { Box ,Button,Typography,useTheme} from '@mui/material'
// furniture image
import card1 from '../../assets/img/furniture/card1.jpg'
import card2 from '../../assets/img/furniture/card2.jpg'
import card3 from '../../assets/img/furniture/card3.jpg'
import card4 from '../../assets/img/furniture/card4.jpg'
//product image
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

import FurnitureCard from '../funiture/card'
import ProductCard from '../Product'
import FeaturedProduct from '../Product/featured'
import FeaturedPosts from '../post/featured'
import Testimonial from '../Testimonial'
import Betterxp from '../betterxp'
import BandageFoot from '../footer/bandage'
import { useMutation, useQuery } from 'react-query';
import { allProducts, getProducts, product } from '../util';
import { useRouter } from 'next/navigation';
import useToastAlert from '../hooks/useToastAlert'
export default function HomeComp() {
    const alert=useToastAlert();
    const router=useRouter();
    const[productQuery,setProductQuery]=React.useState<boolean>(false);
    const [products,setProducts]=React.useState<allProducts>()
    const[currentPage,setCurrentPage]=React.useState<number>(0);
    const theme=useTheme();
    const {classes}=styles();
    const limit=10;
   const[isMore,setMore]=React.useState<boolean>(true);

const {isLoading:isGetProducts}=useQuery('getProducts',
()=>getProducts(limit,10*currentPage),{
 enabled:productQuery,
 onSettled:(data,error)=>{
  setProductQuery(false);
  if(error){
    let temp:{[key:string]:any}=error;
   
    alert({message:temp.mesage,type:'error'})
  }
  if(data as allProducts){
   //setProducts(data);
   if(data.limit!==0){
     //setProducts() 
    if(products&&products.products.length>0){
      setProducts({...products,products:[...products.products,...data.products],limit:data.limit,skip:data.skip,total:data.total})
    }else{
      setProducts(data)
    }
  
   }else{
    // reach last limit
    console.log("data limit");
    setMore(false);
   }
    }
 }
}
)
const handlePageChange=()=>{
  setCurrentPage(currentPage+1);
  setProductQuery(true);
}

useEffect(()=>{
setProductQuery(true);
},[]);

  return (
   <Box className={classes.container}>
    <Box className={classes.furniture}>
        <Box >
            <FurnitureCard image={card2.src} fontSize={40}/>
        </Box>
        <Box className={classes.subFurnRight}>
            <Box>
            <FurnitureCard image={card1.src}/>
            </Box>
            <Box className={classes.sfBtm}>
               <Box> <FurnitureCard image={card3.src}/></Box>
               <Box> <FurnitureCard image={card4.src}/></Box>
            </Box>
        </Box>
    </Box>
    <Box className={classes.product}>
      <Box className={classes.productHd}>
       <Typography  className={classes.fpTxt}>Featured Products</Typography>
       <Typography className={classes.bpTxt}>BESTSELLER PRODUCTS</Typography>
       <Typography className={classes.ptTxt}>Problems trying to resolve the conflict between </Typography>
      </Box>
      <Box className={classes.productCont}>
        {products?.products&&products?.products.length>0&&products?.products.map((value,key)=>{
          return(
            <ProductCard action={()=>router.push(`/products/${value.id}`)} key={value?.id} discountPercentage={value.discountPercentage}  price={value.price} category={value.category} image={value.thumbnail} title={value.title}/>
          )
        })}
    
      </Box>
      <Box className={classes.loadCont}>
        <Button className={classes.loadBtnTxt} disabled={!isMore} color="primary" variant="outlined" onClick={()=>handlePageChange()}>LOAD MORE PRODUCTS</Button>
      </Box>
    </Box>
    <FeaturedProduct/>
    <FeaturedPosts/>
    <Testimonial/>
    <Betterxp/>
    <BandageFoot/>
   
   </Box> 
  )
}
const styles=makeStyles()((theme)=>({
    fpTxt:{
        color:theme.colors.second_text_color,
        textAlign: "center",
        fontSize: "20px",
        fontWeight: 400,
        lineHeight: "30px",
        letterSpacing:"0.2px",
       
    },
    bpTxt:{
        color:theme.colors.text_color,
        textAlign: "center",
        fontSize: "24px",
        fontWeight: 700,
        lineHeight: "32px", 
        letterSpacing:"0.1px"
    },
    loadBtnTxt:{
        textAlign: "center",
        fontSize:"14px",
        fontWeight: 700,
        lineHeight: "22px", /* 157.143% */
        letterSpacing:"0.2px",
        padding:'15px 40px'
    },
    loadCont:{
     display:'flex',
     flexDirection:'row',
     justifyContent:'center'
    },
    ptTxt:{
        color:theme.colors.second_text_color,
        textAlign: "center",
        fontSize: "14px",
        fontWeight: 400,
        lineHeight: "20px", 
        letterSpacing: "0.2px"
    },
    container:{
     display:'flex',
     flexDirection:"column",
     flex:1,
     minHeight:'500px',
     alignItems:'center',
     paddingTop:theme.spacing(5),
    },
    furniture:{
      width:'80%',
       minHeight:'600px',
       display:'grid',
       gridTemplateColumns:"1fr 1fr",
       gap:theme.spacing(3),
       [theme.breakpoints.down('md')]:{
        gridTemplateColumns:"1fr",
        gridTemplateRows:'400px'
       }
    },
   product:{
     display:'flex',
     flexDirection:'column',
     minHeight:'600px',
     width:'80%',
     marginTop:theme.spacing(5),
     gap:theme.spacing(4)
   },
   productCont:{
   flex:1,
   display:'grid',
   gridTemplateColumns:'1fr 1fr 1fr 1fr 1fr',
   gap:theme.spacing(3),
   [theme.breakpoints.down('lg')]:{
    gridTemplateColumns:'1fr 1fr 1fr 1fr'
   },
   [theme.breakpoints.down('md')]:{
    gridTemplateColumns:'1fr 1fr 1fr'
   },
   [theme.breakpoints.down('sm')]:{
    gridTemplateColumns:'1fr 1fr'
   },
   [theme.breakpoints.down('sm')]:{
    gridTemplateColumns:' 1fr'
   }
   },
   productHd:{
    display:'flex',
    flexDirection:'column'
   },
    debug:{
        border:'1px solid #000'
    },
    subFurnRight:{
        display:'grid',
        gridTemplateRows:'1fr 1fr',
        gap:theme.spacing(3),
        [theme.breakpoints.down('md')]:{
          gridTemplateColumns:"1fr",
          gridTemplateRows:'300px'
         }
    },
    sfBtm:{
        display:'grid',
        gridTemplateColumns:'1fr 1fr',
        minHeight:'400px',
        gap:theme.spacing(3),
        [theme.breakpoints.down('md')]:{
          gridTemplateColumns:"1fr",
          minHeight:'600px',
          gridTemplateRows:'1fr 1fr'
         }
    }
}))