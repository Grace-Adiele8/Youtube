import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/system';
import { Videos, ChannelCard } from '../';
import { fetchFromAPI } from '../../utilits/fetchFromAPI';
import { Typography } from '@mui/material';


function Channel() {
  const [channelDetail, setChannelDetail] = useState(null);
  const [Videos, setVideos] = useState([])
  const {id} = useParams();



  
  useEffect(() => {
     fetchFromAPI(`channels?.part= snippet&id=${id}`)
     .then((data) => setChannelDetail(data?.items[0]));
    
     fetchFromAPI(`search?channelId=${id}&part= snippet&order=date`)
     .then((data) => setVideos(data?.items[0]));
  
  
    },[id])
  
  
  return (
    <Box minHeight='95vh'>
      <Box>
       <div style={{zIndex: 10, height: '300px',
       background: 'linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)',
       
      
      }}
       
       />
       <ChannelCard channelDetail={channelDetail} 
        marginTop='-110px' />
        </Box>

        <Box display='flex' p='2' >
         <Box sx={{ mr: {sm: '100px' }}} />
        <Videos videos={videos} />
         </Box>
        </Box>
    
  )
}

export default Channel
