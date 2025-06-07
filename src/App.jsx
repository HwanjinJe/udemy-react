import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import PostList from './components/PostList'
const postList = [
  {
    userName: 'Hwan jin',
    content: 'Super Mario Galaxy Guitrar Medley | FamilyJuels'
  },
  {
    userName: 'Daniel',
    content: 'Super Meat Boy Guitar Medley'
  },
  {
    userName: "Reeses's",
    content: '2 PEANUT BUTTER CUPS'
  },
  {
    userName: '침착맨',
    content: '2025년 06월 02일 2부 | GTA 콩밥특별시 세상에서 최~~~~고로 철면수심이 되고 싶은 사람 손종수'
  },
  {
    userName: 'Jazz | 기분 Jazz네',
    content: 'Playlist | do it for your future self'
  },
]
function App() {
  console.log("APP", postList)
  return (
    <div>
      <PostList postList={postList}></PostList>
    </div>
  )
}

export default App
