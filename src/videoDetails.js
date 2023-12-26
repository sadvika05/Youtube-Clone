import React from 'react';

const VideoDetails = ({ match, videosData }) => {
  const videoId = parseInt(match.params.id);
  const video = videosData.find((vid) => vid.id === videoId);

  if (!video) {
    return <div>Video not found!</div>;
  }

  return (
    <div className="video-details">
      <iframe title={video.title} width="560" height="315" src={video.videoUrl} frameBorder="0" allowFullScreen></iframe>
      <h2>{video.title}</h2>
      <p>{video.description}</p>
      {/* Additional details, comments, etc. */}
    </div>
  );
};

export default VideoDetails;
