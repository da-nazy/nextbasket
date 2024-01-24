import React,{ReactElement, ReactNode} from 'react';
import Carousel from "nuka-carousel"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import {Box} from '@mui/material';
import Image from 'next/image';
import { appColors } from '../util';
type props={
  data?:string[]
}

export default function ProductCarousel({data}:props) {
  
  return (
    <Carousel 
    style={{
      height:"450px",
    }}
    
    defaultControlsConfig={
      {
        nextButtonStyle:styles.nextButton,
      nextButtonText:<ArrowForwardIosIcon sx={{color:appColors.secondary}} />,
      prevButtonStyle:styles.prevButton,
      prevButtonText:<ArrowBackIosNewIcon sx={{color:appColors.primary_color}} />
      }
    }
     autoplay={true}
     renderBottomCenterControls={({ nextSlide }) => (
      <></>
     )}>
      {data&&data.map((value,i)=>{
        return(
          <img style={{width:'100%',height:'100%'}} key={i} src={value}  alt="product image" />
        )
      })}
    </Carousel>
  )
}

const styles={
  nextButton:{
    borderRadius:'25px',
    height:'50px',
    width:'50px',
    marginRight:'50px',
    backgroundColor:'rgba(255, 255, 255, 1)'
  },
  prevButton:{
    borderRadius:'25px',
    height:'50px',
    width:'50px',
    marginLeft:'50px',
    backgroundColor:'rgba(255, 255, 255, 1)',
    display:'flex',
    flexDirections:'row',
    justifyContent:'center',
    alignItems:'center'
  }
}