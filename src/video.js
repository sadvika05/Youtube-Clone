import React from 'react';

const Video = ({ title, description, videoUrl }) => {
  return (
    <div className="video">
      <iframe title={title} width="560" height="315" src={videoUrl} frameBorder="0" allowFullScreen></iframe>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Video;
