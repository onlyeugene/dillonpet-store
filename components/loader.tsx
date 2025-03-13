// "use client";
// import { useEffect, useRef, useState } from "react";
// import gsap from "gsap";
// import Image from "next/image";

// import logo from '@/public/logo.jpeg'

// const Loader = () => {
//   const logoRef = useRef(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     gsap.fromTo(
//       logoRef.current,
//       { opacity: 0, scale: 0.5 },
//       { opacity: 1, scale: 1, duration: 1.5, repeat: -1, yoyo: true }
//     );

//     // Simulate loading time
//     setTimeout(() => setLoading(false), 3000);
//   }, []);

//   return loading ? (
//     <div className="fixed inset-0 flex items-center justify-center bg-white">
//       <Image ref={logoRef} src={logo} alt="Logo" className="w-24 h-24" />
//     </div>
//   ) : null;
// };

// export default Loader;
