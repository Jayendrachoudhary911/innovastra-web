import VideoPlayer from "./VideoPlayer";
import "../styles/Hero.css";

function Herovideo() {
    const videoOptions = {
        autoplay: true,  // Auto-plays the video
        loop: true,      // Repeats video indefinitely
        muted: true,     // Mutes video (required for autoplay in some browsers)
        controls: false, // Hides default controls
        fluid: true,     // Responsive design
        sources: [
            {
                src: "../hero.mp4",
                type: "video/mp4",
            },
        ],
    };

    return (
        <div>
            <h2>Full-Screen Auto-Looping Video</h2>
            <VideoPlayer options={videoOptions} />
        </div>
    );
}

export default Herovideo;
