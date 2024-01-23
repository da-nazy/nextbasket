import React, { ReactNode } from 'react'
import { SwipeableDrawer } from '@mui/material';

type swipeDrawer={
    anchor:'top' | 'left' | 'bottom' | 'right',
    open:boolean,
    drawerToggle:(status:boolean)=>void,
    children:ReactNode
}

export default function SwipeDrawer({anchor,open,children,drawerToggle}:swipeDrawer) {

    const toggleDrawer =
    (anchor:swipeDrawer['anchor'], status: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }
         drawerToggle(status);
    };
  return (
    <SwipeableDrawer
    sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
    anchor={anchor}
    open={open}
    onClose={toggleDrawer(anchor, false)}
    onOpen={toggleDrawer(anchor, true)}
  >
    {children}
  </SwipeableDrawer>
  )
}
