import React from 'react';
import { height, Stack } from '@mui/system';
import { categories } from '../utilits/Constants';
import { Category } from '@mui/icons-material';






function Sidebar({selectedCategory, setSelectedCategory}) {
  return (
    <Stack 
    direction='row' 
    sx={{
        overflowY: 'auto' , 
        height: { sx: 'auto', md: '95%'},
        flexDirection: { md: 'column'},
    }}
    >
      {categories.map((Category) => (
        <button 
        className='category-btn'  
        onClick={() => setSelectedCategory
          (Category.name)}  
        
        style={{
          background: Category.name === selectedCategory && '#FC1503' , color: 'white' }} key={Category.name}>
            <span style={{ color:Category.name === selectedCategory ? 'white' : 'red'}}>{Category.icon}</span>
            <span style={{ opacity: Category.name === selectedCategory ? '1' : '0.8'}}>{Category.name}</span>
        </button>
      )
      
      
      )

      }
    </Stack>
  )
}

export default Sidebar

