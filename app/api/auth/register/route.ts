
import { REGISTER_USER } from "@/services/api";
import instance from "@/services/axios-instance";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    // Parse the request body
    const body = await request.json();
    
    // Make the POST request to the backend API using the axios instance
    const response = await instance.post(REGISTER_USER, body);
    
    // If the registration is successful, return the response data
    return NextResponse.json(response.data, { status: 201 }); // 201 - Created
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    // Default error handling
    let errorMessage = "Registration failed. Please try again."; // Generic message
    let statusCode = 500; // Default status code
    
    if (error.response) {
      statusCode = error.response.status || 500;
      
      // Check for specific error conditions but provide generic messages
      if (error.response.status === 400 || error.response.status === 409) {
        // Use a generic message for duplicate email/phone scenarios
        errorMessage = "This user already exists. Please try with different credentials or login with existing credentials.";
      } else if (error.response.status === 422) {
        // Validation errors
        errorMessage = "Please check your information and try again.";
      }
      
      // Log detailed error for debugging
      console.error("Registration error details:", error.response.data);
    }
    
    return NextResponse.json({ message: errorMessage }, { status: statusCode });
  }
}

// import { REGISTER_USER } from "@/services/api";
// import instance from "@/services/axios-instance";
// import { NextResponse } from "next/server";
// // Import the axios instance

// export async function POST(request: Request) {
//   try {
//     // Parse the request body
//     const body = await request.json();

//     // Make the POST request to the backend API using the axios instance
//     const response = await instance.post(
//       REGISTER_USER, // Relative path because axios instance already has the base URL
//       body,
//     );

//     // If the registration is successful, return the response data
//     const data = response.data;
//     return NextResponse.json(data, { status: 201 }); // Returning a 201 status for successful creation
//   // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   } catch (error: any) {
//     // Check if there's a response from the error, otherwise log a generic error
//     if (error.response) {
//       console.error("Registration error:", error.response.data);
//       return NextResponse.json(
//         {
//           error:
//             error.response.data.message || "Failed to process registration",
//         },
//         { status: error.response.status || 500 },
//       );
      
//     }
    
//     // Fallback error handling if no response is available
//     // console.error("Error:", error.message);
//     return NextResponse.json(
//       { error: "Failed to process registration" },
//       { status: 500 },
//     );
//   }
// }

// import { NextResponse } from "next/server";
// import axios from "axios";
// import { REGISTER_USER } from "@/services/api";

// export async function POST(request: Request) {
//   try {
//     const body = await request.json();
//     const url: string =
//       `${process.env.DILLONPET_BASE_URL}/${REGISTER_USER}` || "";

//     const response = await axios.post(url, body, {
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });

//     const data = response.data;
//     return NextResponse.json(data);
//     // eslint-disable-next-line @typescript-eslint/no-unused-vars
//   } catch (error: unknown) {
//     // console.error("Registration error:", error);
//     return NextResponse.json(
//       {
//         error: "Failed to process registration",
//       },
//       {
//         status: 500,
//       },
//     );
//   }
// }

