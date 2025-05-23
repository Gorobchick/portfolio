
import './App.css'
import VideoCard from './Video/VideoCard.jsx'
import { VIDEOS } from './videos.js'

function App() {
  return (
    <>
      <div className="video-container">
        {
          VIDEOS.map((video) => {
            return (
              <VideoCard key={video.id} title={video.title} channelName={video.channelName} img={video.img}/>
            )
          })
        }
      </div>
    </>

  );
}

export default App
