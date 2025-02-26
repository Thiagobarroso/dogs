import React from 'react'
import UserPost from './endpoint/UserPost'
import TokenPost from './endpoint/tokenPost'
import PhotoPost from './endpoint/PhotoPost'

function Api() {
  return (
    <div>
      <h1>USERPOST</h1>
      <UserPost />
      <h1>TOKEN POST</h1>
      <TokenPost />
      <h1>PhotoPost</h1>
      <PhotoPost />
    </div>
  )
}

export default Api
