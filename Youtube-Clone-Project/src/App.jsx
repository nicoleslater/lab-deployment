import { useState, useEffect } from 'react'
import './App.css'
import { getAllVideos } from '../fetch';
import Home from './components/Home';


function App() {
 
  const [loadingError, setLoadingError] = useState(false)
  const [videos, setVideos] = useState([]);

  useEffect(() =>  {

    getAllVideos()
    .then((videosJson) => {
      setVideos(videosJson)
      setLoadingError(false)
    })
    .catch((err) => {
      setLoadingError(true);
      console.error(err)
    })
  }, [])
  
  console.log(videos);

  return (
    <>
      <div>
     <Home />
      </div>
     
    </>
  )
}

export default App
