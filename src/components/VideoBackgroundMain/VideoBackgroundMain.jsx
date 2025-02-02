import React from "react";
import videoUrl from "../../images/7027577-sport-training-1280x720_t07mAm0e.mp4";

const VideoBackgroundMain = () => {
  return <VideoPlayerBase />;
};

const VideoPlayerBase = () => {
  return (
    <>
      <video
        controls={false}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "277.78vh", // 16:9 соотношение сторон (100vh * 16/9)
          height: "100vh",
          transform: "translate(-50%, -50%)",
          border: "none",
          objectFit: "cover",
        }}
        autoPlay={true}
        muted={true}
        loop={true}
      >
        <source src={videoUrl} type="video/mp4" controls={false} />
        Ваш браузер не поддерживает видео.
      </video>
    </>
  );
};

export default VideoBackgroundMain;
