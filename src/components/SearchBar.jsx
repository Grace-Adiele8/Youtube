import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Paper, IconButton  } from '@mui/material';
import {Search} from "@mui/icons-material";


function SearchBar() {
  return (
    <div>
      <Paper component='form'
       onSubmit={() => {}}
        sx={{
        borderRadius: 20,
        border: '1px soild #e3e3e3', 
        mr: { sm: 5},
        pl: 2,
        boxShadow:'none',
        }}
         >
            <input
            className='search-bar'
            placeholder='search....'
            value=''
            onChange={() => {}}
            />
            <IconButton type='submit' sx={{p:'10px', color:'red'}}>
                <Search />
            </IconButton>
      </Paper>
    </div>
  )
}

export default SearchBar
