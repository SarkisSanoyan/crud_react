import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";


export function DetailUserPage() {

  const { id } = useParams();
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const response = await axios.get('http://localhost:3000/users/' + id);
    setUser(response.data);
  }


  return (
    <div className="DetailUserPage">
      <div>Id: <span>{user.id}</span></div>
      <div>UserName: {user.username}</div>
      <div>Name: {user.name}</div>
      <div>Email: {user.email}</div>
      <div>Phone: {user.phone}</div>
      <div>Web: {user.website}</div>
      <button className=" bg-gray-700 p-1 m-1 text-white" onClick={()=> navigate('/users/')}>GO BACK</button>
    </div>
  )
}




