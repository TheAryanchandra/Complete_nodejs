import React from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const createpost = () => {
  const navigate = useNavigate();

  const handlesubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("image", e.target.image.files[0]);
    formData.append("caption", e.target.caption.value);

    // Log the payload being sent
    console.log("📦 Payload being sent:");
    console.log("  caption:", e.target.caption.value);
    console.log("  image file:", e.target.image.files[0]);

    const response = await axios.post("http://localhost:3000/create-post", formData, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });

    // Log the response from server
    console.log("✅ Server response:", response.data);
    navigate("/feed");
  }

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