import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";



export function EditUserPage() {
  

  const [user, setUser] = useState({
    username: '',
    name: '',
    email: '',
    phone: ''
  });

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const response = await axios.get('http://localhost:3000/users/' + id);
    setUser(response.data);
  }

  const changeInputHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  const submitHandler = async (e) => {
    e.preventDefault();
    await axios.put('http://localhost:3000/users/' + id, user);
    navigate('/users');
  }




  return (
    <div className="EditUserPage">
      <h2 className=" text-center bg-gray-700 p-1 m-1 text-white">Edit User</h2>
      <form className=" m-2 p-2" onSubmit={submitHandler}>
        <div>
          UserName: <input type="text" name="username" placeholder="UserName" value={user.username} onChange={changeInputHandler} />
        </div>
        <div>
          Name: <input type="text" name="name" placeholder="Name" value={user.name} onChange={changeInputHandler} />
        </div>
        <div>
          Email: <input type="text" name="email" placeholder="Email" value={user.email} onChange={changeInputHandler} />
        </div>
        <div>
          Phone: <input type="text" name="phone" placeholder="Phone" value={user.phone} onChange={changeInputHandler} />
        </div>
        <button type="submit" className=" bg-gray-700 p-1 m-1 text-white">SAVE</button>
      </form>
    </div>
  )
}
