import {useRef,useState,useEffect} from 'react'

const Feed = () => {
    const [posts,setposts] = useState([
        {
            id:1,
            caption:"hello baabbbyyyy",
            image:"https://images.unsplash.com/photo-1773332598289-ed0444ad1d6f?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        }
    ]);

    return (
        <section className="feed">
            <div className="feed-container">
                <section>
                    {posts.map((post) => (
                        <div className="post" key={post.id}>
                            <img src={post.image} alt={post.caption} />
                            <p>{post.caption}</p>
                        </div>
                    ))}
                </section>
            </div>
        </section>
    )
}

export default Feed