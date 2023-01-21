import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Card, CardContent,CardMedia} from '@mui/material';
import  { CheckCircle} from '@mui/icons-material';
import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from '../utilits/Constants';



function videoCard({video: { id: {videoId }, snippet}}) {
  
    return (
      <card>
        <link  to={videoId ? `/video/${videoId}` : demoVideoUrl }>
        <CardMedia image={snippet?.thumbnails?.high?.url}    />
        </link>
      </card>

        
        
    
  )
}

export default videoCard

