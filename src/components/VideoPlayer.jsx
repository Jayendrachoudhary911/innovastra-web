import { useEffect, useRef } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";

const VideoPlayer = () => {
    const videoRef = useRef(null);
    const playerRef = useRef(null);

    useEffect(() => {
        if (!playerRef.current) {
            playerRef.current = videojs(videoRef.current, {
                autoplay: true,
                loop: true,
                muted: true,
                controls: false,
                responsive: true,
                fluid: true,
                sources: [
                    {
                        src: "https://www.w3schools.com/html/mov_bbb.mp4",
                        type: "video/mp4",
                    },
                ],
            });

            playerRef.current.ready(() => {
                setTimeout(() => {
                    if (document.fullscreenEnabled && videoRef.current) {
                        videoRef.current.requestFullscreen().catch((err) => {
                            console.warn("Fullscreen request failed:", err);
                        });
                    }
                }, 500); // Ensures the video is fully mounted before fullscreen request

                playerRef.current.on("ended", () => {
                    playerRef.current.play(); // Replay video
                });
            });
        }

        return () => {
            if (playerRef.current) {
                playerRef.current.dispose();
                playerRef.current = null;
            }
        };
    }, []);

    return <video ref={videoRef} className="video-js vjs-default-skin" />;
};

export default VideoPlayer;
