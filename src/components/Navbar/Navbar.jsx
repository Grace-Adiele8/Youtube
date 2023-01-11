import React from 'react';
import { Stack } from '@mui/system';
import { Link } from 'react-router-dom';
import { logo } from '../../utilits/Constants';


function Navbar() {
  return (
    <Stack 
    direction='row' 
    alognItems='center' 
    p={2} 
    sx={{position:'sticky', background:'#000', top:0, justifyContent: 'space-between'}}
    >
     <Link to='/' style={{display:'flex', alignItems:'center'}}>
       <img src={logo} alt='logo' height={45}/>
     </Link> 
      
    </Stack>
  )
}

export default Navbar