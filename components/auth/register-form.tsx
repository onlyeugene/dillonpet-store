'use client'

import { useRegisterSchema } from "@/schema/user-schema";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import CardWrapper from "./card-wrapper";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import { motion } from "framer-motion";

const RegisterForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  
  const form = useForm<z.infer<typeof useRegisterSchema>>({
    resolver: zodResolver(useRegisterSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof useRegisterSchema>) => {
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log(values);
    setIsLoading(false);
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
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  return (
    <CardWrapper
      headerLabel="Get Started Now"
      backButtonLabel="Already have an account"
      backButtonHref="/login"
    >
      <Form {...form}>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="space-y-6 w-full my-20"
        >
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex flex-col justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
            </div>

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
                          className="h-12 pr-10 focus:ring-2 focus:ring-pink-500 transition-all duration-300"
                          disabled={isLoading}
                        />
                        <button 
                          type="button"
                          onClick={togglePasswordVisibility}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors"
                        >
                          {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                      </div>
                    </FormControl>
                    <FormMessage className="text-xs mt-1 text-start" />
                  </FormItem>
                )}
              />
            </motion.div>

            <motion.div variants={itemVariants} className="!mt-8">
              <Button 
                type="submit" 
                className={`w-full bg-pink-600 hover:bg-pink-700 text-white py-3 rounded-md transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] h-12 ${isLoading ? 'cursor-not-allowed': 'cursor-pointer'}`}
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
      </Form>
    </CardWrapper>
  );
};

export default RegisterForm;