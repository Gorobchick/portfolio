import'./Video.css'
import { useState } from 'react';


function VideoCard(props) {
    const {title} = props;
    const {channelName} = props;
    const {img} = props;
    const [likeCount, setLikeCount] = useState(0);
    const increaseLikeByOne = () => {
        setLikeCount(likeCount + 1);
        
        
    };
  return (
   <div className="video">
          <img className="video-img" src={img} alt="React logo" />
          <p>{title}</p>
          <p>{channelName}</p>
          <div className="video-footer">
            <p>Вподобайки: {likeCount}</p>
            <button onClick={increaseLikeByOne}>Вподобати</button>
          </div>
        </div>
  );
}

export default VideoCard;