import axios from "axios";
import { logininfo, registerinfo } from "@/interface/logininfo";
import { useState } from "react";

const useauth = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const LoginUser = async ({ email, password }: logininfo) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post(
        "http://localhost:3001/api/users/login",
        { email, password }
      );

      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        setLoading(false);
        console.log("Logged in Successfully");
        return response.data;
      } else {
        throw new Error("No token received");
      }
    } catch (error: any) {
      setLoading(false);
      setError(error?.response?.data?.message || "Invalid Credentials");
      console.error(error);
      throw error;
    }
  };

  const registeruser = async ({
    email,
    password,
    phone,
    name,
  }: registerinfo) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post(
        "http://localhost:3001/api/users/register",
        { email, password, name, phone }
      );
      setLoading(false);
      console.log(response.data);
      return response.data;
    } catch (error: any) {
      setLoading(false);
      setError(error?.response?.data?.message || "Error in Signup");
      console.error(error);
      throw error;
    }
  };

  return { LoginUser, loading, error, registeruser };
};

export default useauth;
