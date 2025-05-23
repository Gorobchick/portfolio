import reactLogo from './assets/react.svg'
import './App.css'
import VideoCard from './VideoCard.jsx'

function App() {
  return (
    <>
      <div className="video-container">
        <VideoCard title="Відео 1" channelName = "Factorio for kids" img={reactLogo}/>
      </div>
    </>

  );
}

export default App
