import { useAuth } from "../hooks";
import { logIn } from "../redux/auth/authOperations";
import { useAppDispatch } from "../redux/hooks";
import { useEffect } from "react";

export const Test = () => {
  const dispatch = useAppDispatch();

  const { isLoggedIn } = useAuth();
  console.log("isLoggedIn", isLoggedIn);
  useEffect(() => {
    dispatch(logIn({ password: "Qwerty123", email: "cat55555@cat.com" }));
  }, [dispatch]);
  return <p>teeeeest</p>;
};
