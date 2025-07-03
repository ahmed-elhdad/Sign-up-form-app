import { createContext } from "react";
let UserContext = createContext({
  userName: "",
  email: "",
  password: "",
  confirmPassword: "",
});
export default UserContext;
