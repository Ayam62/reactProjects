import Post from "./Post"
import { useContext } from "react";
import PostListProvider from "../store/PostsToShow"


function PostList(){
    useContext(PostListProvider)
    return(
        <>
     <Post></Post>
     <Post></Post>
     <Post></Post>
     </>
    )
}
import { useContext } from "react";
export default PostList;