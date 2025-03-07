import react,{ createContext, useState, useEffect, useContext } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Load user from localStorage on initial load
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  // Login function - Save user data to state and localStorage
  const login = (email,id) => {
    const userData = { email,id };
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));  // Save to localStorage
  };

  // Logout function - Clear user data from state and localStorage
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");  // Remove from localStorage
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {/* {contextHolder} */}
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);