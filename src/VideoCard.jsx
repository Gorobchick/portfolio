
function VideoCard(props) {
    const {title} = props;
    const {channelName} = props;
    const {img} = props;
  return (
   <div className="video">
          <img className="video-img" src={img} alt="React logo" />
          <p>{title}</p>
          <p>{channelName}</p>
          <div className="video-footer">
            <p>Вподобайки: 0</p>
            <button>Вподобати</button>
          </div>
        </div>
  );
}

export default VideoCard;