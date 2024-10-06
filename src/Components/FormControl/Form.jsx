import React, { useContext, useRef } from "react";
import styles from "./Form.module.css";
import { PostStore } from "../../Store/PostListStore";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const navigate = useNavigate();
  const { addPost } = useContext(PostStore);
  const UserIdElement = useRef();
  const TitleElement = useRef();
  const CompletedElement = useRef();

  const handlePostSubmit = (event) => {
    event.preventDefault();
    const userId = UserIdElement.current.value;
    const title = TitleElement.current.value;
    const completed = CompletedElement.current.checked;

    UserIdElement.current.value = "";
    TitleElement.current.value = "";
    CompletedElement.current.checked = false;

    fetch('https://jsonplaceholder.typicode.com/todos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        userId: userId,
        title: title,
        completed: completed
      })
    })
      .then(res => res.json())
      .then(post => addPost(post));

    navigate("/");
  };

  return (
    <form className={styles.postForm} onSubmit={handlePostSubmit}>
      <div className={styles.formGroup}>
        <label htmlFor="userId">User ID</label>
        <input
          type="number"
          id="userId"
          className={styles.inputField}
          placeholder="Enter user ID"
          ref={UserIdElement}
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          className={styles.inputField}
          placeholder="Enter the post title"
          ref={TitleElement}
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="completed">Completed</label>
        <input
          type="checkbox"
          id="completed"
          ref={CompletedElement}
        />
      </div>

      <button type="submit" className={styles.submitButton}>
        Submit
      </button>
    </form>
  );
};

export default Form;
