// 'use client'

// import { useEffect, useState } from "react";

// interface Props{
//     endDate: number | string
// }

// export const CountdownTimer = ({ endDate }: Props) => {
//     const [timeLeft, setTimeLeft] = useState("");
  
//     useEffect(() => {
//       const timer = setInterval(() => {
//         const now = new Date();
//         const end = new Date(endDate);
//         const difference = end - now;
  
//         if (difference > 0) {
//           const days = Math.floor(difference / (1000 * 60 * 60 * 24));
//           const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
//           const minutes = Math.floor((difference / 1000 / 60) % 60);
//           const seconds = Math.floor((difference / 1000) % 60);
  
//           setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
//         } else {
//           setTimeLeft("Offer Expired");
//           clearInterval(timer);
//         }
//       }, 1000);
  
//       return () => clearInterval(timer);
//     }, [endDate]);
  
//     return <div className="text-sm text-gray-600">Time Left: {timeLeft}</div>;
//   };