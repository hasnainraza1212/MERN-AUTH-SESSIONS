import axios from "axios";

export const host = "https://breakable-underwear-cod.cyclic.app/"
// export const host = "http://localhost:4000/";
export const Post = async (URL, data) => {
  try {
    const res = await axios.post(host + URL, data,{ withCredentials: true });
    return res.data;
  } catch (error) {
    return error;
  }
};

export const Get = async(URL)=>{
try{
  const res = await axios.get(host+URL,{ withCredentials: true })
  return res.data
} catch(error){
  return error
}
}
