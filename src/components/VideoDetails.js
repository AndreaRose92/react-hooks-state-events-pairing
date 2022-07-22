import { useState } from "react"

export default function VideoDetails({details, handleClick}) {

    let [likes, setLikes] = useState(details.upvotes)
    let [dislikes, setDislikes] = useState(details.downvotes)
    function upVote() {
        setLikes(++likes)
    }
    function dowmVote() {
        setDislikes(++dislikes)
    }

    return ( <div>
        <h1>{details.title}</h1>
        <span>{details.views} views | Uploaded {details.createdAt}</span>
        <br/><br/>
        <button name="upvote" onClick={upVote}>{likes}👍</button>
        <button name="downvote" onClick={dowmVote}>{dislikes}👎</button>
        <br/><br/>
        <button name="hide" onClick={handleClick}>Hide Comments</button>
        <br/><hr/>
    </div>
    )
}