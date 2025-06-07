import Post from "./Post"
import NewPost from "./NewPost"
import classes from './PostList.module.css'

function PostList({ postList }) {
  try {

    return (
      <>
        <NewPost></NewPost>
        <div className={classes.postList}>
          {postList.map((item, index) => (
            <Post
              key={index}
              userName={item.userName}
              content={item.content}
            />
          ))}
        </div>
      </>
    )
  } catch (e) {
    console.log(e)
  }
}

export default PostList