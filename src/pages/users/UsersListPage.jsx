import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


export function UsersListPage() {

  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    loadUsers();
  }, [])

  const loadUsers = async () => {
    const response = await axios.get('http://localhost:3000/users');
    setUsers(response.data);
  }

  const deleteUser = async (id) => {
    if (window.confirm('Delete user?')) {
      await axios.delete('http://localhost:3000/users/' + id);
      loadUsers();
    }
  }


  return (
    <div className=" flex items-center justify-center flex-col">
      <button className=" bg-gray-700 p-1 m-1 text-white" onClick={() => navigate('/users/add')}>Add New User</button>
      <table className=" w-[80%] text-center">
        <thead className=" ">
          <tr>
            <th>ID</th>
            <th>User Name</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map(user =>
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.username}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>
                  <button className=" bg-gray-700 p-1 m-1 text-white" onClick={() => navigate('/users/' + user.id)}>Details</button>
                  <button className=" bg-gray-700 p-1 m-1 text-white" onClick={() => navigate('/users/edit/' + user.id)}>Edit</button>
                  <button className=" bg-gray-700 p-1 m-1 text-white" onClick={() => deleteUser(user.id)}>Delete</button>
                </td>
              </tr>)
          }
        </tbody>
      </table>
    </div>
  )
}
