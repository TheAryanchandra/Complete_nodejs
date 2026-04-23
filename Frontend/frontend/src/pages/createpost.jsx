import React from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const handlesubmit=async (e)=>{
    const navigate = useNavigate();
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", e.target.image.files[0]);
    formData.append("caption", e.target.caption.value);

    const response = await axios.post("http://localhost:3000/createpost", formData, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });
    console.log(response);
    navigate("/feed");
    
}
const createpost = () => {
  return (
    <section className="createpost">
        <div className="create-post">
          <form onSubmit={handlesubmit}>
            <h1>Create Post</h1>
            <input type="file" name='image' accept="image/*"/>
            <input type="text" name="caption" required placeholder='write a caption' />
            <button type='submit'>Post</button>
          </form>
        </div>
    </section>
  )
}

export default createpost