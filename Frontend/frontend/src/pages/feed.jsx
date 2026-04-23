import { useState,useEffect } from 'react'
import axios from 'axios';


const Feed = () => {
    const [posts, setposts] = useState([
        {
            id: 1,
            user: "aryanchandra_",
            avatar: "https://i.pravatar.cc/40?img=12",
            caption: "hello baabbbyyyy 🌸",
            image: "https://images.unsplash.com/photo-1773332598289-ed0444ad1d6f?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            likes: 128,
        }
    ]);

    useEffect(() => {
        axios.get("http://localhost:3000/posts")
        .then((response) => {
            console.log(response.data);
        })
    },[])

    return (
        <section className="feed">
            <div className="feed-container">
                <div className="feed-header">
                    <h2 className="feed-title">For You</h2>
                </div>
                {posts.map((post) => (
                    <div className="post" key={post.id}>
                        <div className="post-header">
                            <img className="post-avatar" src={post.avatar} alt={post.user} />
                            <span className="post-username">{post.user}</span>
                        </div>
                        <img className="post-image" src={post.image} alt={post.caption} />
                        <div className="post-actions">
                            <button className="post-btn">❤️ {post.likes}</button>
                            <button className="post-btn">💬 Comment</button>
                            <button className="post-btn">🔗 Share</button>
                        </div>
                        <p className="post-caption"><strong>{post.user}</strong> {post.caption}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Feed