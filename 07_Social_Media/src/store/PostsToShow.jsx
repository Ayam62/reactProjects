import { useState } from "react";
import { Children } from "react";
import { createContext } from "react";
import PostList from "../components/PostList";
import { useReducer } from "react";

const DEFAULT_CONTEXT = {
  postList: [],
  addPost: () => {},
  deletePost: () => {},
};

const PostToShow = createContext(DEFAULT_CONTEXT);

const postListReducer = (currPostList, action) => {
  return currPostList;
};

const PostListProvider = ({ Children }) => {
  // const [postList,setPostList]=useState()

  const [postList, disppatchPostList] = useReducer(postListReducer, DEFAULT_POST_LIST);

  const addPost = () => {};
  const delelePost = () => {};

  return (
    <PostToShow.Provider value={{ PostList, addPost, delelePost }}>
      {Children}
    </PostToShow.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Going to Mumbai",
    body: "Hi Friends, I am going to Kathmandu to give a continuity to  my funrthur studies.",
    reactions: 90,
    userId:"user-1",
    tags: ["vacationfinished", "jhapa", "enjoying"],
  },
  {
    id: "2",
    title: "Going to Jhapa",
    body: "Hi Friends, I am going to Jhapa to enjoy",
    reactions: 900,
    userId: "user-2",
    tags: ["vacation", "jhapa", "enjoying"],
  },
];

export default PostListProvider;
