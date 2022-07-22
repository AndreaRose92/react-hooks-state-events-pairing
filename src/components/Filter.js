
export default function Filter({handleChange}) {
    return (
        <div>
            <select name="sort" onChange={handleChange}>
                <option name="default"></option>
                <option name="likes">Likes Most to Least</option>
                <option name="dislikes">Disikes Most to Least</option>
                <option name="a">A to Z</option>
                <option name='z'>Z to A</option>
            </select>
        </div>
    )
}