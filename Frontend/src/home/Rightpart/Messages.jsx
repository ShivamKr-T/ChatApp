import React from 'react'
import Message from './Message'

function Messages() {
  return (
    <div className='flex-1 overflow-y-auto' style={{minHeight:"calc(92vh - 10vh)"}}>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
    </div>
  )
}

export default Messages