// import React from "react";
// import Container from "./container";
// import Image from "next/image";

// import dog from "@/public/back.png";
// import { DogIcon } from "lucide-react";

// const HeroServices = () => {
//   return (
//     <div
//       className="relative overflow-hidden bg-cover bg-center bg-no-repeat"
//       style={{ backgroundImage: "url('/bg-services.svg')" }}
//     >
//       <h1 className="py-10 text-center text-5xl font-bold">Our Services</h1>
//       <Container>
//         <div
//           className="relative flex min-h-[300px] items-center justify-center text-center md:min-h-[500px]"
//           data-aos="fade-up"
//         >
//           <div className="absolute inset-0">
//             {/* Top Left Arrow */}
//             <div className="absolute top-[20%] left-[5%] md:top-[10%] md:left-[15%] lg:left-[20%]">
//               <svg
//                 width="150"
//                 height="80"
//                 viewBox="0 0 200 100"
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="w-[100px] md:w-[150px]"
//               >
//                 <path
//                   d="M170,50 Q130,10 90,50 T10,50"
//                   stroke="black"
//                   strokeWidth="3"
//                   fill="none"
//                   strokeDasharray="5,5"
//                 />
//                 <path
//                   transform="translate(10,50) rotate(-135)"
//                   d="M0,0 L-10,-5 L-10,5 Z"
//                   fill="black"
//                 />
//               </svg>
//               <span className="absolute top-5 -left-40 flex items-center justify-center gap-3 text-sm font-semibold whitespace-nowrap md:text-base">
//                 Dog Walking
//                 <DogIcon className="h-15 w-15 rounded-full border bg-white py-2 text-black" />
//               </span>
//             </div>

//             {/* Top Right Arrow */}
//             <div className="absolute top-[20%] right-[5%] md:top-[15%] md:right-[15%] lg:right-[20%]">
//               <svg
//                 width="150"
//                 height="80"
//                 viewBox="0 0 200 100"
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="w-[100px] md:w-[150px]"
//               >
//                 <path
//                   d="M10,50 Q50,10 90,50 T170,50"
//                   stroke="black"
//                   strokeWidth="3"
//                   fill="none"
//                   strokeDasharray="5,5"
//                 />
//                 <path
//                   transform="translate(170,50) rotate(-45)"
//                   d="M0,0 L-10,-5 L-10,5 Z"
//                   fill="black"
//                 />
//               </svg>
//               <span className="absolute top-10 -right-12 text-sm font-semibold whitespace-nowrap md:text-base">
//                 Pet Sitting
//               </span>
//             </div>

//             {/* Middle Left Arrow */}
//             <div className="absolute top-[28%] left-[2%] md:left-[10%] lg:left-[19%]">
//               <svg
//                 width="150"
//                 height="80"
//                 viewBox="0 0 200 100"
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="w-[100px] md:w-[150px]"
//               >
//                 <path
//                   d="M170,50 Q90,50 10,50"
//                   stroke="black"
//                   strokeWidth="3"
//                   fill="none"
//                   strokeDasharray="5,5"
//                 />
//                 <path
//                   transform="translate(10,50) rotate(180)"
//                   d="M0,0 L-10,-5 L-10,5 Z"
//                   fill="black"
//                 />
//               </svg>
//               <span className="absolute top-[20%] -left-40 flex items-center justify-center gap-3 text-sm font-semibold whitespace-nowrap md:text-lg">
//                 Pet Daycare
//                 <DogIcon className="h-15 w-15 rounded-full border bg-white py-2 text-black" />
//               </span>
//             </div>

//             {/* Middle Right Arrow */}
//             <div className="absolute top-[30%] right-[2%] md:right-[10%] lg:right-[15%]">
//               <svg
//                 width="150"
//                 height="80"
//                 viewBox="0 0 200 100"
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="w-[100px] md:w-[150px]"
//               >
//                 <path
//                   d="M10,50 Q90,50 170,50"
//                   stroke="black"
//                   strokeWidth="3"
//                   fill="none"
//                   strokeDasharray="5,5"
//                 />
//                 <path
//                   transform="translate(170,50) rotate(0)"
//                   d="M0,0 L-10,-5 L-10,5 Z"
//                   fill="black"
//                 />
//               </svg>
//               <span className="absolute top-13 -right-15 -translate-y-1/2 text-sm font-semibold whitespace-nowrap md:text-base">
//                 Vet Services
//               </span>
//             </div>

//             {/* Bottom Left Arrow */}
//             <div className="absolute bottom-[20%] left-[5%] md:bottom-[35%] md:left-[15%] lg:left-[20%]">
//               <svg
//                 width="150"
//                 height="80"
//                 viewBox="0 0 200 100"
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="w-[100px] md:w-[150px]"
//               >
//                 <path
//                   d="M190,50 Q100,120 10,50"
//                   stroke="black"
//                   strokeWidth="3"
//                   fill="none"
//                   strokeDasharray="5,5"
//                 />
//                 <path
//                   transform="translate(10,50) rotate(-140)"
//                   d="M0,0 L-10,-5 L-10,5 Z"
//                   fill="black"
//                 />
//               </svg>
//               <span className="absolute flex items-center justify-center gap-3 bottom-[38%] -left-25 text-sm font-semibold whitespace-nowrap md:text-base">
//                 Pet Grooming
//               </span>
//             </div>

//             {/* Bottom Right Arrow */}
//             <div className="absolute right-[5%] bottom-[20%] md:right-[15%] md:bottom-[35%] lg:right-[20%]">
//               <svg
//                 width="150"
//                 height="80"
//                 viewBox="0 0 200 100"
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="w-[100px] md:w-[150px]"
//               >
//                 <path
//                   d="M10,50 Q100,120 190,50"
//                   stroke="black"
//                   strokeWidth="3"
//                   fill="none"
//                   strokeDasharray="5,5"
//                 />
//                 <path
//                   transform="translate(190,50) rotate(-40)"
//                   d="M0,0 L-10,-5 L-10,5 Z"
//                   fill="black"
//                 />
//               </svg>
//               <span className="absolute flex items-center justify-center gap-3 bottom-10 -right-20 text-sm font-semibold whitespace-nowrap md:text-base">
//                 Pet Training
//               </span>
//             </div>
//           </div>

//           <Image
//             src={dog}
//             alt="dog in the middle"
//             className="relative z-10 w-[200px] md:w-[300px] lg:w-[400px]"
//           />
//         </div>
//       </Container>
//     </div>
//   );
// };

// export default HeroServices;
