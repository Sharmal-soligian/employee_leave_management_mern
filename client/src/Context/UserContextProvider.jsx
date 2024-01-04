import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import UserContext from "./UserContext";

const UserContextProvider = ({ children }) => {
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const [user, setUser] = useState(storedUser || { role: null, id: null });

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  const loginAsAdmin = (email, id) => {
    setUser({ role: "admin", email, id });
  };

  const loginAsEmployee = (email, id) => {
    setUser({ role: "employee", email, id });
  };

  const logout = () => {
    setUser({ role: null, id: null });
  };

  return (
    <UserContext.Provider
      value={{ user, setUser, loginAsAdmin, loginAsEmployee, logout }}
    >
      {children}
    </UserContext.Provider>
  );
};

UserContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UserContextProvider;
