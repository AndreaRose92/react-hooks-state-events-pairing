
export default function Comment({user, text, upVote, dowmVote, likes, dislikes}) {
    

    return (
        <div>
            <h3>{user}</h3>
            <p>{text}</p>
            <button name="upvote" onClick={upVote}>{likes}👍</button>
            <button name="downvote" onClick={dowmVote}>{dislikes}👎</button>
            <button name="delete" onClick={e=>e.target.parentElement.remove()}>X</button>
        </div>
    )
}