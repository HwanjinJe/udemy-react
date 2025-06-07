import classes from './Post.module.css'

function Post({ userName, content }) {
  return (
    <div className={classes.post}>
      <p className={classes.userName}>{userName}</p>
      <p className={classes.content}>{content}</p>
    </div>
  )
}

export default Post