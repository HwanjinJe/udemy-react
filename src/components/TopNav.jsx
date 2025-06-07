import classes from './TopNav.module.css'
function TopNav (){
  function addNewPost(){
    console.log("addNewPost")
  }
  return (
    <>
    <div className={classes.topNav}>
      <div className={classes.logo}>React.js</div>
      <div className={classes.menuList}>
        <button onClick={addNewPost}>Post</button>
      </div>
    </div>
    </>
  )
}

export default TopNav