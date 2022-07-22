import { useState } from "react"
import Comment from "./Comment"
import Filter from "./Filter.js"


export default function CommentsList({video, isHidden}) {
    let [likes, setLikes] = useState(0)
    let [dislikes, setDislikes] = useState(0)
    let [sort, setSort] = useState('')
    
    function upVote() {
        setLikes(++likes)
    }
    function dowmVote() {
        setDislikes(++dislikes)
    }    
    function handleSort(e) {
        setSort(e.target.value)
    }

    const sortedComments = (sort, video) => {
        switch (sort) {
            case "likes":
                video.comments.sort(function(a,b){if (a.likes<b.likes){return -1};if(a.likes>b.likes){return 1};return 0;});
                break;
            case "dislikes":
                video.comments.sort(function(a,b){if (a.dislikes<b.dislikes){return -1};if(a.dislikes>b.dislikes){return 1};return 0;});
                break;
            case "a":
                video.comments.sort(function(a,b){if (a.user<b.user){return -1};if(a.user>b.user){return 1};return 0});
                break ;
            case "z":
                video.comments.sort(function(a,b){if (a.user>b.user){return -1};if(a.user<b.user){return 1};return 0});
                break;
            default:
                return comments
        }
    }


    const comments = video.comments.map(comment => {
        return <Comment key={comment.id} user={comment.user} text={comment.text} likes={likes} dislikes={dislikes} upVote={upVote} downVote={dowmVote} />
    })
    // console.log(comments)
    
    return (
        <div>
            <h1>{video.comments.length} Comments</h1>
            <Filter handleChange={handleSort}/>
            {isHidden ? null : sortedComments(sort, comments)}
        </div>
    )
}