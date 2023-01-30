import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { Navbar, Feed, VideoDetail, ChannelDetail, SearchFeed,SearchBar, Sidebar, Videos} from './components';
import { Box } from '@mui/system';

function App() {
  return (
    <div className="App">
      <BrowserRouter> 
      <Box sx={{backgroundColor: '#000'}}>
        <Navbar/>
        <Routes>
          <Route path='/' exact element={<Feed />}/>
          <Route path='/video/:id' element={<VideoDetail />}/>
          <Route path='/channel/:id' element={<ChannelDetail />}/>
          <Route path='/search/:searchTerm' element={<SearchFeed />}/> 
        </Routes>
      </Box>


      </BrowserRouter>
    </div>
  );
}

export default App;
