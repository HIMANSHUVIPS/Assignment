import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Form from "./Components/FormControl/Form.jsx";
import PostList from "./Components/PostList/PostList.jsx";
import UserDetail from "./Components/UserDetail/UserDetail.jsx"; // Import UserDetail

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <PostList /> },
      { path: "/createPost", element: <Form /> },
      { path: "/user/:id", element: <UserDetail /> }, // Add route for UserDetail
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
