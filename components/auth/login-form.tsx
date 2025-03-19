"use client";

import { useLoginSchema } from "@/schema/user-schema";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import CardWrapper from "./card-wrapper";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import { signIn } from "next-auth/react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [, setError] = useState<boolean | null>(false);
  const router = useRouter();
  const [, setSuccess] = useState(false);

  const form = useForm<z.infer<typeof useLoginSchema>>({
    resolver: zodResolver(useLoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof useLoginSchema>) => {
    setIsLoading(true);
    try {
      const result = await signIn("credentials", {
        email: values.email,
        password: values.password,
        redirect: false, // We'll handle redirection manually
      });

      if (result?.error) {
        setError(true);
        toast.error("Invalid credentials. Please try again.");
        return;
      }

      if (result?.ok) {
        setSuccess(true);
        toast.success("Successfully logged in!");
        router.push("/dashboard"); // Redirect to dashboard or desired page
      }
    } catch (error) {
      setError(true);
      toast.error("An error occurred during login. Please try again.");
      console.error("Login error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <CardWrapper
      headerLabel="Welcome Back"
      title="Don't have an account yet?"
      backButtonLabel="Register"
      backButtonHref="/register"
    >
      <Form {...form}>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="my-20 w-full space-y-6"
        >
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col justify-center space-y-6"
          >
            <motion.div variants={itemVariants}>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700">Email</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="email"
                        placeholder="johndoe@example.com"
                        className="h-12 transition-all duration-300 focus:ring-2 focus:ring-pink-500"
                        disabled={isLoading}
                      />
                    </FormControl>
                    <FormMessage className="mt-1 text-start text-xs" />
                  </FormItem>
                )}
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700">Password</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          {...field}
                          type={showPassword ? "text" : "password"}
                          placeholder="••••••••"
                          className="h-12 pr-10 transition-all duration-300 focus:ring-2 focus:ring-pink-500"
                          disabled={isLoading}
                        />
                        <button
                          type="button"
                          onClick={togglePasswordVisibility}
                          className="absolute top-1/2 right-3 -translate-y-1/2 transform text-gray-500 transition-colors hover:text-gray-700"
                          disabled={isLoading}
                        >
                          {showPassword ? (
                            <EyeOff size={18} />
                          ) : (
                            <Eye size={18} />
                          )}
                        </button>
                      </div>
                    </FormControl>
                    <FormMessage className="mt-1 text-start text-xs" />
                  </FormItem>
                )}
              />
              <div className="pt-5 text-start">
                <p>Forgot Password ?</p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="!mt-3">
              <Button
                type="submit"
                className={`h-12 w-full transform rounded-md bg-yellow-400 py-3 text-white transition-all duration-300 hover:scale-[1.02] hover:bg-yellow-300 active:scale-[0.98] ${isLoading ? "cursor-not-allowed" : "cursor-pointer"}`}
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Logging in..
                  </div>
                ) : (
                  "Log in"
                )}
              </Button>
            </motion.div>
          </form>
        </motion.div>
      </Form>
    </CardWrapper>
  );
};

export default LoginForm;