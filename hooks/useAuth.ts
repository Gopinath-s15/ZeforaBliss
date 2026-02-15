import { useEffect, useState } from "react";
import api from "@/lib/api";

type User = {
  id: string;
  name: string;
  email: string;
};

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // Load from localStorage on start
  useEffect(() => {
    const token = localStorage.getItem("zefora_token");
    const userData = localStorage.getItem("zefora_user");
    document.cookie = `zefora_token=${token}; path=/; max-age=604800`;


    if (token && userData) {
      setUser(JSON.parse(userData));
    }

    setLoading(false);
  }, []);

  // Login
  const login = async (email: string, password: string) => {
    const res = await api.post("/auth/login", {
      email,
      password,
    });

    const { token, user } = res.data;

    localStorage.setItem("zefora_token", token);
    localStorage.setItem("zefora_user", JSON.stringify(user));

    setUser(user);
  };

  // Register
  const register = async (
    name: string,
    email: string,
    password: string
  ) => {
    await api.post("/auth/register", {
      name,
      email,
      password,
    });
  };

  // Logout
  const logout = () => {
    localStorage.removeItem("zefora_token");
    localStorage.removeItem("zefora_user");

    setUser(null);
  };

  return {
    user,
    loading,
    login,
    register,
    logout,
    isAuthenticated: !!user,
  };
}
