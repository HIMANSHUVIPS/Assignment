import { createContext, useEffect, useReducer, useState } from "react";

export const PostStore = createContext({
  PostArray: [],
  addPost: () => {},
  deletePost: () => {},
  fetching: false,
});

const PostListReducer = (currValue, action) => {
  switch (action.type) {
    case 'ADD_POST':
      return [action.payload, ...currValue];
    case 'DELETE_POST':
      return currValue.filter((post) => post.id !== action.payload.id);
    case 'FETCH_POST':
      return [...action.payload.posts];
    default:
      return currValue;
  }
};

const PostListProvider = ({ children }) => {
  const [PostArray, dispatchPost] = useReducer(PostListReducer, []);
  const [fetching, setFetching] = useState(false);

  const addPost = (post) => {
    dispatchPost({
      type: 'ADD_POST',
      payload: post,
    });
  };

  const deletePost = (id) => {
    dispatchPost({
      type: 'DELETE_POST',
      payload: { id },
    });
  };

  useEffect(() => {
    setFetching(true);
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => {
        dispatchPost({
          type: 'FETCH_POST',
          payload: { posts: data },
        });
        setFetching(false);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
        setFetching(false);
      });
  }, []);

  return (
    <PostStore.Provider value={{ PostArray, addPost, deletePost, fetching }}>
      {children}
    </PostStore.Provider>
  );
};

export default PostListProvider;
