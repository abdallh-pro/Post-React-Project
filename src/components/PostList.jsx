import { useState } from "react";
import NewPost from "./NewPost";
import Modal from './Modal';
import Post  from "./Post" ;
import classes from './PostList.module.css';

    function PostList({isPosting ,onStopPosting}){
        const [posts ,setPost ] = useState([]);

        function addPostHundler (postData){
            setPost((existingPosts) => [postData, ...existingPosts]);
        }

    return (
        <>
        { isPosting && (
        <Modal onClose={onStopPosting}> 
        <NewPost
            onCancel ={onStopPosting}
            onAddPost = {addPostHundler}
            
        />
        </Modal> ) }
        {posts.length > 0 && (
            <ul className={classes.posts}>
        {posts.map((post) => <Post key={post.id} name={post.name} body={post.body} /> )}
        </ul>
        ) }
        {posts.length === 0 && (
            <div style={{textAlign :'center' ,color :'white'}}>
                <h2>there are no posts yet .</h2>
                <p>start adding some ! </p>
            </div>
        ) }
        

        </>
    );
}

export default PostList;