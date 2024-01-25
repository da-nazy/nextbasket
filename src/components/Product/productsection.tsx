"use client"
import React, { useEffect } from 'react';
import { useTheme,Box, Button, Typography, Divider, IconButton } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import BasicRating from '../Rating';
import CircleIcon from '@mui/icons-material/Circle';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import love from '../../assets/img/productSection/love.png';
import eye from '../../assets/img/productSection/eye.png';
import cart from '../../assets/img/productSection/cart.png';
import productImg from '../../assets/img/productSection/single-product-1-cover-2.jpg'
import thumb from '../../assets/img/productSection/thumb.jpg';
import thumb2 from '../../assets/img/productSection/thumb2.jpg';
import Image from 'next/image';
import ProductCarousel from './carousel';
import { useParams } from 'next/navigation';
import { appStore, getProduct, product } from '../util';
import { useMutation } from 'react-query';
import useToastAlert from '../hooks/useToastAlert';
import { UseDispatch,useDispatch,useSelector } from 'react-redux';
import { ADD_CART } from '@/store/cart';
import { ADD_WISHLIST } from '@/store/wishlist';
export default function ProductSection() {
    const theme=useTheme();
    const {classes}=styles();
    const query=useParams();
    const alert=useToastAlert();
    const [singleProduct,setSingleProduct]=React.useState<product>();
   
    const dispatch=useDispatch();
    const{isLoading:isOneProductLoading,mutate:getOneProduct}=useMutation(getProduct,{
      onSuccess:(data)=>{
        console.log(data);
        
        setSingleProduct(data);
        alert({message:"Product gotten",type:'success'});
      },
      onError:(error:{[key:string]:any})=>{
        console.log(error);
        alert({message:error.message,type:'error'});
      }
    });

    useEffect(()=>{
      // setProductId(Number.parseInt(`${query.product}`));
       getOneProduct(Number.parseInt(`${query.product}`))
     },[query.product]);

   
     const handleCart=()=>{
     dispatch(ADD_CART(singleProduct));
     alert({message:"Added to cart",type:"success"})
     }

     const handleWishList=()=>{
      dispatch(ADD_WISHLIST(singleProduct));
      alert({message:"Added to wishlist",type:"success"})
     }

  return (
    <Box className={classes.container}>
        <Box className={classes.head}>
          <Button className={classes.navBtn} sx={{color:theme.colors.text_color}} >
          Home
          </Button>
          <ArrowForwardIosIcon className={classes.arrIcon}/>
          <Button className={classes.navBtn} sx={{color:theme.colors.muted_color}}>
          Shop
          </Button>
        </Box>
        <Box className={classes.sub}>
         <Box className={classes.imgcont}>
           <Box className={classes.img}>
            <ProductCarousel data={singleProduct?.images}/>
           </Box>
           <Box className={classes.thumb}>
            {
              singleProduct?.images?.map((value,key)=>{
                return(
                  <Image key={key} src={value} width={100} height={75} alt="product image" />
                 
                )
              })
            } 
           </Box>
         </Box>
         <Box className={classes.desc}>
            <Box className={classes.nameRate}>
                <Typography className={classes.name}>
               {singleProduct?.title}
                </Typography>
                <Box className={classes.reviewCont}>
                    <BasicRating value={singleProduct?.rating?singleProduct?.rating:0}/>
                    <Typography className={classes.reviewTxt}>
                    10 Reviews
                    </Typography>
                   
                </Box>
                <Typography className={classes.price}>
                    ${singleProduct?.price}
                    </Typography>
                    <Box className={classes.stock}>
                        <Typography className={classes.avalTxt} sx={{color:theme.colors.second_text_color}}>
                        Availability  :
                        </Typography>
                        <Typography className={classes.avalTxt}>
                        In Stock  
                        </Typography>
                    </Box>
            </Box>
            <Box className={classes.action}>
                <Divider/>
                <Box>
                  <CircleIcon className={classes.circIcon}/>
                  <CircleIcon className={classes.circIcon} sx={{color:theme.colors.success_color}}/>
                  <CircleIcon className={classes.circIcon} sx={{color:theme.colors.alert_color}}/>
                  <CircleIcon className={classes.circIcon}  sx={{color:theme.colors.dark_background_color}}/>
                </Box>
                <Box className={classes.btnCont}>
                    <Button className={classes.btn} variant="contained">
                        Select Options
                    </Button>
                    <Box className={classes.icoBtnCont}>
                        <IconButton className={classes.icoBtn}>
                          <Image width={20} height={20} src={love.src} onClick={()=>handleWishList()} alt="favourite"/> 
                        </IconButton>
                        <IconButton className={classes.icoBtn} onClick={()=>handleCart()}>
                          <Image width={20} height={20} src={cart.src} alt="cart"/> 
                        </IconButton>
                        <IconButton className={classes.icoBtn}>
                          <Image width={20} height={20} src={eye.src} alt="eye"/> 
                        </IconButton>
                       
                    </Box>
                </Box>
            </Box>
         </Box>
        </Box>
    </Box>
  )
}

const styles=makeStyles()((theme)=>({
    container:{
     minHeight:'500px',
     display:'flex',
     flexDirection:'column',
     alignItems:'center',
     width:'100%',
     backgroundColor:theme.colors.light_gray
    },
    stock:{
        display:'flex',
        flexDirection:'row',
        gap:theme.spacing(2)
    },
    icoBtnCont:{
        display:'flex',
        flexDirection:'row',
        gap:theme.spacing(2),
    },
    icoBtn:{
      backgroundColor:theme.colors.white
    },
    avalTxt:{
        fontSize: "14px",
        fontWeight: 700,
        lineHeight: "24px",
        letterSpacing: "0.2px"
    },
  
    price:{
        color:theme.colors.text_color,
        fontSize: "24px",
        fontWeight: 700,
        lineHeight: "32px", 
        letterSpacing: "0.1px"
    },
    reviewCont:{
     display:'flex',
     flexDirection:'row',
     gap:theme.spacing(2)
    },
    reviewTxt:{
        color:theme.colors.second_text_color,
        fontSize: "14px",
        fontWeight: 700,
        lineHeight: "24px", 
        letterSpacing:" 0.2px",
    },
    name:{
        color: theme.colors.text_color,
        fontSize: "20px",
        fontWeight: 400,
        lineHeight: "30px",
        letterSpacing: "0.2px"
    },
    nameRate:{
     display:'flex',
     flexDirection:'column',
     gap:theme.spacing(3)
    },
    circIcon:{
     width:'30px',
     height:'30px'
    },
    btnCont:{
     display:'flex',
     flexDirection:'row',
     gap:theme.spacing(3)
    },
    btn:{
      padding:'10px 20px',
      color:theme.colors.white
    },
    arrIcon:{
     color:theme.colors.muted_color,
     width:'16px',
     height:'16px'
    },
    navBtn:{
        fontSize: "14px",
        fontWeight: 700,
        lineHeight: "24px", 
        letterSpacing: "0.2px",
        height:'25px'
    },
    head:{
     width:'80%',
     height:'92px',
     display:'flex',
     flexDirection:'row',
     gap:theme.spacing(2),
     alignItems:'center'
    },
    sub:{
       width:'80%',
       minHeight:'500px',
       display:'grid',
       gridTemplateColumns:'1fr 1fr',
       gap:theme.spacing(4),
       [theme.breakpoints.down('lg')]:{
        gridTemplateColumns:'1fr',
        border:'1px solid red',
        alignItems:'center'
       }
    },
    imgcont:{
      display:'grid',
       gridTemplateColumns:'1fr'
    },
    thumb:{
    display:'flex',
    flexDirection:'row',
    gap:theme.spacing(4),
    marginTop:theme.spacing(3),
   
    },
    img:{
     position:'relative',
     height:'450px'
    },  
    desc:{
        paddingTop:theme.spacing(3),
        display:'grid',
        gridTemplateRows:'1fr 1fr',
        height:'450px'
    },
    action:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-between'
    }
}))