import React, { useContext, useEffect, useState } from "react";
import Post from "../Post/Post";
import { PostStore } from "../../Store/PostListStore";
import NoPost from "../NoPost/NoPost";
import Loader from "../Loader/Loader";

const PostList = () => {
  const { PostArray, fetching } = useContext(PostStore);
  
  // const [myFetch, setMyFetch] = useState(false);
  // if (myFetch == false) {
  //   fetch("https://dummyjson.com/posts")
  //     .then((res) => res.json())
  //     .then((data) => fetchPost(data.posts))
  //     .catch((error) => console.error("Error fetching posts:", error));
  //     setMyFetch(true);
  // }




  return (
    <>
      {fetching && <Loader />}
      {!fetching && PostArray.length === 0 && <NoPost />}
      {!fetching && PostArray.map((item) => (
        <Post key={item.id} post={item} />
      ))}
    </>
  );
};

export default PostList;
