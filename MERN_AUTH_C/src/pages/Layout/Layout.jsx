import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Header from "../../component/Header";
import { isAuthenticated, logOut } from "../../endPoint/endPoint";

const Layout = () => {
  const location = useLocation();
  const [message, setMessage] = useState("")
  const [isLoading, setIsLoading] = useState(true);
  const isPublic = useMemo(
    () => location.pathname == "/login" || location.pathname == "/",
    [location.pathname]
  );
  const navigate = useNavigate();
  // logout
  const handleLogout = useCallback(async () => {
    const res = await logOut();
    if (!res.success) {
      return alert("logout failed!");
    }
    localStorage.clear();
    navigate("/login");
  }, []);
  // logout
  useEffect(() => {
    (async () => {
      if(isPublic){
        setMessage("Loading...")
      return setIsLoading(false)
      }
      if (!isPublic) {
        setMessage("Access Denied")
        setIsLoading(true);
        const res = await isAuthenticated();
        if (res.success) {
          console.log(res);
          setIsLoading(false);
        }
      }
    })();
  }, []);
  if (isLoading) {
    return (
      <div
        style={{
          height: "100vh",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h4>{message}</h4>
      </div>
    );
  }
  return (
    <>
      <Outlet />
      {isPublic ? <></> : <Header handleLogout={handleLogout} data={"data"} />}
    </>
  );
};

export default Layout;
