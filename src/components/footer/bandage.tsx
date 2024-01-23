import { Box,IconButton,Typography,useTheme } from '@mui/material'
import React from 'react'
import { makeStyles } from 'tss-react/mui'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
export default function BandageFoot() {
    const theme=useTheme();
    const{classes}=styles();
  return (
     <Box className={classes.container}>
        <Box className={classes.sub}>
          <Typography className={classes.bond}>
          Bandage
          </Typography>
            <Box className={classes.social}>
              <IconButton color="primary">
                <FacebookRoundedIcon/>
              </IconButton>
              <IconButton color="primary">
              <InstagramIcon/>
              </IconButton>
              <IconButton color="primary">
                  <TwitterIcon />
              </IconButton>
            </Box>
        </Box>
     </Box>
  )
}

const styles=makeStyles()((theme)=>({
     container:{
     width:'100%',
     display:'flex',
     flexDirection:'column',
     alignItems:'center',
     height:'138px',
     backgroundColor:theme.colors.light_gray
     },
     sub:{
      flex:1,
      display:'flex',
      flexDirection:'row',
      width:'80%',
      justifyContent:'space-between',
      alignItems:'center'
     },
     bond:{
        color:theme.colors.text_color,
fontSize: "24px",
fontWeight: 700,
lineHeight: "32px", /* 133.333% */
letterSpacing:" 0.1px"
     },
     social:{
        display:'flex',
        flexDirection:'row',
        gap:theme.spacing(2)
     }
}))