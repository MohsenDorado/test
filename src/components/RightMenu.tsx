import React from 'react'
import FriendRequest from './FriendRequest'
import Birthdays from './Birthdays'
import Ad from './Ad'

function RightMenu() {
  return (
    <div>
      <FriendRequest/>
      <Birthdays/>
      <Ad size='md'/>


    </div>
  )
}

export default RightMenu