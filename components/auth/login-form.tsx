/* eslint-disable @typescript-eslint/no-explicit-any */
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
  const [, setError] = useState<boolean | null>(false)
  const router = useRouter()
  const [, setSuccess] = useState(false)

  const form = useForm<z.infer<typeof useLoginSchema>>({
    resolver: zodResolver(useLoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

 const onSubmit = async (values: z.infer<typeof useLoginSchema>) => {
  setIsLoading(true)
  try {
    setIsLoading(true);
    setError(null); // Reset error state

    const response = await signIn('credentials', {
      email: values.email,
      password: values.password,
      redirect: false,
    });

    if (response?.ok) {
      setSuccess(true);
      toast.success('Login Successful');
      router.replace('/');
    } else {
      setError(true);
      toast.error(response?.error || 'Invalid Credentials');
    }
  } catch (error: any) {
    setError(true);
    toast.error(error.message || 'Authentication failed');
  } finally {
    setIsLoading(false);
  }
  //  await new Promise((resolve) => setTimeout(resolve, 1500));
  // console.log(values);
  // setIsLoading(false)
  
};

    // Simulate API call
   

    // console.log(values);
    // setIsLoading(false);
  // };

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
            {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <motion.div variants={itemVariants}>
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700">First Name</FormLabel>
                      <FormControl>
                        <Input 
                          {...field} 
                          placeholder="John" 
                          className="h-12 focus:ring-2 focus:ring-pink-500 transition-all duration-300"
                          disabled={isLoading}
                        />
                      </FormControl>
                      <FormMessage className="text-xs mt-1 text-start" />
                    </FormItem>
                  )}
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700">Last Name</FormLabel>
                      <FormControl>
                        <Input 
                          {...field} 
                          placeholder="Doe" 
                          className="h-12 focus:ring-2 focus:ring-pink-500 transition-all duration-300"
                          disabled={isLoading}
                        />
                      </FormControl>
                      <FormMessage className="text-xs mt-1 text-start" />
                    </FormItem>
                  )}
                />
              </motion.div>
            </div> */}

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

              <div className="text-start pt-5">
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
