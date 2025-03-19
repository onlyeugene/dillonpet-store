import { loginUser, registerUser } from "@/requests/auth-requests";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export const useRegisterUser = () => {
  return useMutation({
    mutationFn: registerUser,
    onSuccess: (res) => {
      toast.success("User Registered Succesfully", res);
    },
    onError: (error) => {
      return error;
    },
  });
};

export const useLoginUser = () => {
  return useMutation({
    mutationFn: loginUser,
    onSuccess: (res) => {
      toast.success("User Login Succesfully", res);
    },
    onError: (error) => {
      return error;
    },
  });
};
