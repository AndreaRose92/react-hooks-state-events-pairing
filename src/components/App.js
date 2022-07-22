import { useState } from "react";
import video from "../data/video.js";
import CommentsList from "./CommentsList.js";
import Video from "./Video.js"

function App() {
  let [isHidden, setIsHidden] = useState(false)
  function hideComments() {
    setIsHidden((isHidden) = !isHidden)
  }
  function handleClick() {
    hideComments()
  }
  

  return (
    <div className="App">
      <Video video={video} handleClick={handleClick}/>
      <CommentsList  video={video} isHidden={isHidden}/>
    </div>
  );
}

export default App;
