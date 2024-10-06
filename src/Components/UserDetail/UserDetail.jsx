import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UserDetail = () => {
  const { id } = useParams();
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setUserDetails(data);
      })
      .catch((err) => console.error(err));
  }, [id]);

  if (!userDetails) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>User Details</h2>
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <td>{userDetails.name}</td>
          </tr>
          <tr>
            <th>Email</th>
            <td>{userDetails.email}</td>
          </tr>
          <tr>
            <th>Phone</th>
            <td>{userDetails.phone}</td>
          </tr>
          <tr>
            <th>Address</th>
            <td>{`${userDetails.address.street}, ${userDetails.address.city}`}</td>
          </tr>
          <tr>
            <th>Company</th>
            <td>{userDetails.company.name}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default UserDetail;
