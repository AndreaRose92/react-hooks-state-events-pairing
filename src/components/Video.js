
import VideoDetails from "./VideoDetails.js"

export default function Video({video, handleClick}) {
    return ( <div>
        <iframe
            width='919'
            height='525'
            src={video.embedUrl}
            frameBorder='0'
            allowFullScreen
            title={video.title}
        />
        <VideoDetails details={video} handleClick={handleClick}/>
    </div>
    )
}