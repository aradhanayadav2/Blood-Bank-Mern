import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const UserContextProvider = createContext();

function UserContext({ children }) {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );
  const navigate = useNavigate();

  // 🔥 Jab user change ho → localStorage update
  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  function logout() {
    setUser(null);
    localStorage.removeItem("user");
    navigate("/login");

  }

  return (
    <UserContextProvider.Provider value={{ user, setUser, logout }}>
      {children}
    </UserContextProvider.Provider>
  );
}

export default UserContext;