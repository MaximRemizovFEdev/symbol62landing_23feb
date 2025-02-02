import React, { useEffect, useRef } from "react";
import { Script } from "gatsby";

const VideoBackgroundMain = () => {
  const videoUrl =
    // "https://vkvideo.ru/video_ext.php?oid=-199531378&id=456239162&hd=2&autoplay=1&js_api=1&loop=1&controls=0&mute=1&muteв=1&volume=0";
    `https://www.youtube.com/embed/5XkIP5Vlicc?
      autoplay=1&
      loop=1&
      enablejsapi=1&
      playerapiid=featuredytplayer&
      controls=0&
      modestbranding=1&
      rel=0&
      showinfo=0&
      color=white&
      iv_load_policy=3&
      theme=light&
      wmode=transparent&
      playlist=5XkIP5Vlicc&
      mute=1`;
      // origin=https://headcraft.ru&
  return <VideoPlayerBase videoUrl={videoUrl} />;
};

const VideoPlayerBase = ({ videoUrl }) => {
  const iframeRef = useRef(null);
  const playerRef = useRef(null);

  // useEffect(() => {
  //   // Проверяем, загружен ли скрипт
  //   if (window.VK && iframeRef.current) {
  //     playerRef.current = window.VK.VideoPlayer(iframeRef.current);
  //     playerRef.current.mute(); // Замьютить видео
  //   //   playerRef.current.hideControls();
  //   }
  // }, []);

  if (!videoUrl) return null;

  return (
    <>
      {/* <Script
        src="https://vk.com/js/api/videoplayer.js"
        strategy="post-hydrate"
        onLoad={() => {
          if (iframeRef.current) {
            playerRef.current = window.VK.VideoPlayer(iframeRef.current);
            playerRef.current.mute(); // Замьютить видео после загрузки
            // playerRef.current.hideControls();
          }
        }}
      /> */}
      <iframe
        ref={iframeRef}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "177.78vh", // 16:9 соотношение сторон (100vh * 16/9)
          height: "100vh",
          transform: "translate(-50%, -50%)",
          border: "none",
          objectFit: "cover",
        }}
        src={videoUrl}
        frameBorder="0"
        allow="autoplay; encrypted-media; fullscreen; clipboard-write;"
        webkitallowfullscreen
        mozallowfullscreen
        allowFullScreen
        // loading="lazy"
      ></iframe>
    </>
  );
};

export default VideoBackgroundMain;

/**
 * import React, { useEffect, useRef } from "react";
import { Script } from "gatsby";

const VideoBackgroundMain = () => {
  const videoUrl =
    "https://vkvideo.ru/video_ext.php?oid=-199531378&id=456239162&hd=2&autoplay=1&js_api=1&loop=1&controls=0&mute=1&muteв=1&volume=0";
  return <VideoPlayerBase videoUrl={videoUrl} />;
};

const VideoPlayerBase = ({ videoUrl }) => {
  const iframeRef = useRef(null);
  const playerRef = useRef(null);

  useEffect(() => {
    if (window.VK && iframeRef.current) {
      playerRef.current = window.VK.VideoPlayer(iframeRef.current);
      playerRef.current.mute(); // Замьютить видео
    }
  }, []);

  if (!videoUrl) return null;

  return (
    <>
      <Script
        src="https://vk.com/js/api/videoplayer.js"
        strategy="post-hydrate"
        onLoad={() => {
          if (iframeRef.current) {
            playerRef.current = window.VK.VideoPlayer(iframeRef.current);
            playerRef.current.mute(); // Замьютить видео после загрузки
          }
        }}
      />
      <div
        style={{
          position: "fixed", // Фиксированное позиционирование
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          overflow: "hidden", // Скрываем всё, что выходит за пределы
          zIndex: -1, // Отправляем на задний план
        }}
      >
        <iframe
          ref={iframeRef}
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "177.78vh", // 16:9 соотношение сторон (100vh * 16/9)
            height: "100vh",
            transform: "translate(-50%, -50%)",
            border: "none",
            objectFit: "cover",
          }}
          src={videoUrl}
          frameBorder="0"
          allow="autoplay; encrypted-media; fullscreen; clipboard-write;"
          webkitallowfullscreen
          mozallowfullscreen
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </>
  );
};

export default VideoBackgroundMain;
 */
