import {useRef,useState,useEffect} from 'react'


const [posts,setposts] = useState([
    {
        id:1,
        caption:"hello babu",
        image:"https://images.unsplash.com/photo-1682687298774-473f862e4d4a?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    }
]);

const feed = () => {
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

export default feed