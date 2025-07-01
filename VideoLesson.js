import React from "react";

const VideoLesson = ({ title, videoUrl }) => (
  <div className="mb-6">
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <video controls className="w-full rounded-xl shadow-md">
      <source src={videoUrl} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
);

export default VideoLesson;
