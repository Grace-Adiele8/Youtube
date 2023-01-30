import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Paper, IconButton  } from '@mui/material';
import {Search} from "@mui/icons-material";



function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
 

  const navigate = useNavigate();
 
 
  const handleSumbit = (e)  => {
    e.preventDefault();
   
    if(searchTerm) {
      navigate(`/search/${searchTerm}`);
     
      
      setSearchTerm('');
    } 
      
    
  
  
  }

  
  
  
  
   return (
    <div>
      <Paper component='form' 
       onSubmit={handleSumbit}
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
            value={searchTerm}
            onChange={(e) => setSearchTerm (e.target.value)}
            />
            
            <IconButton type='submit' sx={{p:'10px', color:'red'}}>
                <Search />
            </IconButton>
      </Paper>
    </div>
  )
}

export default SearchBar
