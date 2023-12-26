import React from 'react';
import Video from './video';

const VideoList = ({ filteredVideos }) => {
  return (
    <div className="video-list">
      {filteredVideos.map((video) => (
        <Video key={video.id} {...video} />
      ))}
    </div>
  );
};

export default VideoList;
