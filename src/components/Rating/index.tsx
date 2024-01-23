import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
 type props={
    value:number|null
 }
export default function BasicRating({value}:props) {
 
  return (
    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
    <Rating color="primary" name="read-only" value={value} readOnly />
    </Box>
  );
}