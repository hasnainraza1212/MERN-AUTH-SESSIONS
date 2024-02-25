import React, { useEffect, useState } from 'react'
import { isAuthenticated, login } from '../../endPoint/endPoint'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate()
  const [data, setData] = useState({name:"",password:""})
  const handleLogin= async(e)=>{
    const {name, password} = data
    e.preventDefault()
    if(!name || !password){
      return alert("both field are required")
    }
    const res = await login(data)
    if (!res.success){
      return alert("login failed")
    }
    localStorage.setItem("user", JSON.stringify(res.user))
    navigate("/")
  }
  useEffect(() => {
    (async () => {
        const res = await isAuthenticated();
        if (res.success) {
          navigate("/")
        }
        setIsLoading(false)
    })();
  }, []);
  if (isLoading){
    return(
      <div
      style={{
        height: "100vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h4>Loading...</h4>
    </div>
    )
  }
  return (
    <>
    <div>Login</div>
    <form>
  <label htmlFor="name" className="form-label">name</label>
  <div>
  </div>
  <input type="text" value={data.name} onChange={(e)=>setData(data=>({...data, name:e.target.value}))}className="form-control" id="name  " placeholder="name"/>
  <div></div>
  <label htmlFor="password" className="form-label">Password</label>
  <div>
  </div>
  <input type="text" value={data.password} onChange={(e)=>setData(data=>({...data, password:e.target.value}))} className="form-control" id="password" placeholder="password"/>
  <div></div>
  <button type="submit" style={{cursor:"pointer"}} onClick={handleLogin}>Login</button>
    </form>
    </>
  )
}

export default Login