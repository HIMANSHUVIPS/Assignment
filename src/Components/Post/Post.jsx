import React, { useContext } from "react";
import { FaTrashAlt } from "react-icons/fa";
import styles from "./Post.module.css";
import { PostStore } from "../../Store/PostListStore";
import { useNavigate } from "react-router-dom";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostStore);
  const navigate = useNavigate();

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      deletePost(post.id);
    }
  };

  const handleCardClick = () => {
    navigate(`/user/${post.userId}`);
  };

  return (
    <div className={styles.card} onClick={handleCardClick}>
      <div className={styles.cardBody}>
        <div className={styles.header}>
          <h5 className={styles.cardTitle}>{post.title}</h5>
          <FaTrashAlt className={styles.deleteIcon} onClick={handleDelete} />
        </div>
        <strong>User:</strong> {post.id ? `ID: ${post.id}` : ""}
      </div>
    </div>
  );
};

export default Post;
