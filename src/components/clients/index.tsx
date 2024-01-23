import { useTheme,Box} from '@mui/material';
import React from 'react';
import { makeStyles } from 'tss-react/mui';
import fa_brand_1 from '../../assets/img/clients/fa-brands-1.png';
import fa_brand_2 from '../../assets/img/clients/fa-brands-2.png';
import fa_brand_3 from '../../assets/img/clients/fa-brands-3.png';
import fa_brand_4 from '../../assets/img/clients/fa-brands-4.png';
import fa_brand_5 from '../../assets/img/clients/fa-brands-5.png';
import fa_brand_6 from '../../assets/img/clients/fa-brands-6.png';
import Image from 'next/image';
export default function Clients() {
    const theme=useTheme();
    const {classes}=styles();
  return (
    <Box className={classes.container}>
     <Box className={classes.sub}>
     <Image width={103} height={34}  src={fa_brand_1} alt="brands" />
      <Image width={83} height={59}  src={fa_brand_2} alt="brands" />
      <Image width={102} height={75}  src={fa_brand_3} alt="brands" />
      <Image width={103} height={42}  src={fa_brand_4} alt="brands" />
      <Image width={104} height={62}  src={fa_brand_5} alt="brands" />
      <Image width={76} height={72}  src={fa_brand_6} alt="brands" />
     </Box>
    </Box>
  )
}

const styles=makeStyles()((theme)=>({
    container:{
        width:'100%',
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        minHeight:'175px',
        backgroundColor:theme.colors.light_gray
    },
    sub:{
        width:'80%',
        display:'flex',
        flexDirection:'row',
        gap:theme.spacing(3),
        alignItems:'center',
        justifyContent:'space-between'
    }
}))