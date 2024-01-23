"use client"
import React,{ReactNode} from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { CacheProvider, EmotionCache } from "@emotion/react";
import createEmotionCache from '../emotion';
import theme from '..';
   type props={
   children:ReactNode
   }
const MuiThemeProvider=({children}:props)=>{
  const clientSideEmotionCache = createEmotionCache();
    return(
      <CacheProvider value={clientSideEmotionCache}>
      <ThemeProvider theme={theme(true)}>
        <CssBaseline/>
            {children}
      </ThemeProvider>
      </CacheProvider> 
		
	);
};

export default MuiThemeProvider;