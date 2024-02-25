import { Get, Post } from "../request/request";

export const login = async ( data) => {
  const res = await Post("api/login", data);
  return res;
};
export const logOut =async ()=>{
  const res = await Post("api/logout");
  return res;
}
export const getUser = async()=>{
    const res = await Get("api/me")
    return res
}

export const isAuthenticated = async()=>{
  const res = await Get("api/access")
  return res
}