import React from 'react'


const createpost = () => {
  return (
    <section>
        <div className="Create-Post">
        <h1>Create Post</h1>
        <input type="file" name='image' accept="image/*"/>
        <input type="text" name="caption" required placeholder='write a caption' />
        <button type='submit'>Post</button>
        </div>
    </section>
  )
}

export default createpost