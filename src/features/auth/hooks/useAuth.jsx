import { Link } from "react-router";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { loginEmployee } from "../api/authAction";

const useAuth = () => {
  const dispatch = useDispatch();

  function getPasswordStrength(password = "") {
    let score = 0;
    if (password.length >= 8) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;

    if (!password) return { label: "", percent: 0, color: "bg-transparent" };
    if (score <= 1)
      return { label: "Weak password", percent: 25, color: "bg-rose-500" };
    if (score === 2)
      return { label: "Fair password", percent: 50, color: "bg-amber-500" };
    if (score === 3)
      return { label: "Good password", percent: 75, color: "bg-violet-400" };
    return { label: "Strong password", percent: 100, color: "bg-violet-500" };
  }

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({ mode: "onBlur" });

  const onRegisterSubmit = async (data) => {
    console.log(data);
  };

  const onLoginSubmit = async (data) => {
    dispatch(loginEmployee(data));
  };

  return {
    getPasswordStrength,
    register,
    handleSubmit,
    watch,
    errors,
    isSubmitting,
    onRegisterSubmit,
    onLoginSubmit,
    Link,
  };
};

export default useAuth;
