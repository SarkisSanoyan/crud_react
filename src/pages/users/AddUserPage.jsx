
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function AddUserPage() {


  const [user, setUser] = useState({
    username: '',
    name: '',
    email: '',
    phone: ''
  });

  const navigate = useNavigate();


  const changeInputHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  const submitHandler = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:3000/users/', user);
    navigate('/users');
  }


  return (
    <div className="AddUserPage">
      <h2 className=" text-center bg-gray-700 p-1 m-1 text-white">Add User</h2>
      <form className=" m-2 p-2" onSubmit={submitHandler}>
        <div>
          UserName: <input type="text" name="username" placeholder="UserName" value={user.username} onChange={changeInputHandler} required />
        </div>
        <div>
          Name: <input type="text" name="name" placeholder="Name" value={user.name} onChange={changeInputHandler} required />
        </div>
        <div>
          Email: <input type="text" name="email" placeholder="Email" value={user.email} onChange={changeInputHandler} required />
        </div>
        <div>
          Phone: <input type="text" name="phone" placeholder="Phone" value={user.phone} onChange={changeInputHandler} required />
        </div>
        <button type="submit" className=" bg-gray-700 p-1 m-1 text-white">Add User</button>
      </form>
    </div>
  )
}
