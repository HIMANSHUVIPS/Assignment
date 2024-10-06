import React from 'react';
import { FaRegSadCry } from 'react-icons/fa'; 
import styles from './NoPost.module.css'; 

const NoPost = ({handlePostFetch}) => {
  return (
    <div className={styles.container}>
      <FaRegSadCry className={styles.icon} />
      <h1 className={styles.message}>Welcome!</h1>
      <p className={styles.submessage}>There are no posts to display at the moment.</p>
      {/* <button className={styles.getPostButton} onClick={handlePostFetch} >Get Posts</button> */}
    </div>
  );
}

export default NoPost;
