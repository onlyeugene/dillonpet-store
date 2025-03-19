/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useRegisterSchema } from "@/schema/user-schema";
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
// import instance from "@/services/axios-instance";
// import { REGISTER_USER } from "@/services/api";
import { toast } from "sonner";
import axios from "axios";
import { useRouter } from "next/navigation";

const RegisterForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [, setError] = useState("");
  const [checked, setChecked] = useState(false);
  const router = useRouter();

  const form = useForm<z.infer<typeof useRegisterSchema>>({
    resolver: zodResolver(useRegisterSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      phoneNumber: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof useRegisterSchema>) => {
    // setIsLoading(true);

    // try {
    //   // Call the POST function with the form values
    //   const response = await instance.post('/api/auth/register', values);

    //   if (response.status === 201) {
    //     // Handle success (e.g., show a success message or redirect)
    //     toast.success("User registered successfully:", response.data);
    //   } else {
    //     console.log("Unexpected response status:", response.status);
    //   }
    //   // eslint-disable-next-line @typescript-eslint/no-explicit-any
    // } catch (error: any) {
    //   toast.error("Registration failed:", error);
    // } finally {
    //   setIsLoading(false);
    // }
    if (!checked) {
      toast.error("Please accept the terms and conditions");
      return;
    }

    setIsLoading(true);
    const url = "/api/auth/register";

    try {
      const response = await axios.post(url, {
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        password: values.password,
        phoneNumber: values.phoneNumber,
      });

      if (response.data) {
        toast.success("User registered successfully");
        router.replace("/login");
      }
    } catch (error: any) {
      const errorMessage =
        error?.response?.data?.message || "Registration Failed";
      setError(errorMessage);
      toast.error(errorMessage);
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
      headerLabel="Get Started Now"
      title="Already have an account?"
      backButtonLabel="Login"
      backButtonHref="/login"
    >
      <Form {...form}>
        {/* {isRegistered ? (
          <motion.div variants={itemVariants}>
            <FormLabel className="text-gray-700">Enter OTP</FormLabel>
            <FormControl>
              <Input
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="Enter OTP"
                className="h-12 transition-all duration-300 focus:ring-2 focus:ring-pink-500"
                disabled={isVerifying}
              />
            </FormControl>
            <Button
              onClick={handleOtpSubmit}
              className="h-12 w-full bg-green-500 text-white"
              disabled={isVerifying}
            >
              {isVerifying ? (
                <Loader2 className="animate-spin" />
              ) : (
                "Verify OTP"
              )}
            </Button>
          </motion.div>
        ) : ( */}
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
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <motion.div variants={itemVariants}>
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700">
                        First Name
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="John"
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
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700">Last Name</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="Doe"
                          className="h-12 transition-all duration-300 focus:ring-2 focus:ring-pink-500"
                          disabled={isLoading}
                        />
                      </FormControl>
                      <FormMessage className="mt-1 text-start text-xs" />
                    </FormItem>
                  )}
                />
              </motion.div>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
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
                  name="phoneNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700">
                        Phone Number
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="text"
                          placeholder="08012312345"
                          className="h-12 transition-all duration-300 focus:ring-2 focus:ring-pink-500"
                          disabled={isLoading}
                        />
                      </FormControl>
                      <FormMessage className="mt-1 text-start text-xs" />
                    </FormItem>
                  )}
                />
              </motion.div>
            </div>

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

              <div
                className="flex items-center gap-2 pt-4"
                onClick={() => setChecked(!checked)}
              >
                {checked ? (
                  <Input
                    type="checkbox"
                    id="terms"
                    className="h-4 w-4 accent-black transition-all duration-300"
                  />
                ) : (
                  <Input
                    type="checkbox"
                    // id="terms"
                    className="h-4 w-4 text-white transition-all duration-300"
                  />
                )}
                <label
                  htmlFor="terms"
                  className="cursor-pointer text-sm text-gray-700"
                >
                  I agree to the terms and conditions
                </label>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="!mt-4">
              <Button
                type="submit"
                className={`h-12 w-full transform rounded-md bg-yellow-400 py-3 text-white transition-all duration-300 hover:scale-[1.02] hover:bg-yellow-300 active:scale-[0.98] ${isLoading ? "cursor-not-allowed" : "cursor-pointer"}`}
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Creating account...
                  </div>
                ) : (
                  "Create Account"
                )}
              </Button>
            </motion.div>
          </form>
        </motion.div>
        {/* )} */}
      </Form>
    </CardWrapper>
  );
};

export default RegisterForm;
