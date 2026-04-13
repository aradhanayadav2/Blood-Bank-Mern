import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// ✅ This is the ACTUAL context
export const UserContext = createContext();

function UserContextProvider({ children }) { // ✅ renamed
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const navigate = useNavigate();

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
    <UserContext.Provider value={{ user, setUser, logout }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContextProvider;