import { useState } from "react"

function NewPost() {
  const [ testBody, setTestBody ] = useState('aasd')
  const [ testUserName, setTestUserName ] = useState('IKGMWKVMKS')
  function changeContent(event) {
    setTestBody(event.target.value)
  }

  function changeUserName(event){
    setTestUserName(event.target.value)
  }
  return (
    <>
      <form action="">
        <p>
          <label htmlFor="content">Content</label>
          <textarea name="" id="content" onChange={changeContent}></textarea>
        </p>
        <p>{testBody}</p>
        <p>
          <label htmlFor="userName">UserName</label>
          <textarea name="" id="userName" onChange={changeUserName}></textarea>
        </p>
        <p>{testUserName}</p>
      </form>
    </>
  )
}

export default NewPost