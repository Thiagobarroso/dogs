import React from 'react'
import UserPost from './endpoint/UserPost'
import TokenPost from './endpoint/tokenPost'

function Api() {
  return (
    <div>
      <h1>USERPOST</h1>
      <UserPost />
      <h1>TOKEN POST</h1>
      <TokenPost />
    </div>
  )
}

export default Api
