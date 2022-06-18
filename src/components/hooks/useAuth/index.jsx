import { useContext } from "react";
import { StoreContext } from "../../Store";

const useAuth = () => {
  return useContext(StoreContext)
}

export default useAuth;