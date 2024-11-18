import React from "react";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import SignIn from "./SignIn";
import SignOut from "./SignOut";

const Navbar = () => {
  const [user] = useAuthState(auth);
  console.log("Auth State User: ", user);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 flex items-center justify-between p-4 bg-white border-b z-50">
        <div className="flex items-center space-x-2">
          <img 
            src="/logo1.png" 
            alt="PharmaLink Logo" 
            className="h-6 w-6 sm:h-8 sm:w-8" // Smaller on mobile, larger on tablet/desktop
          />
          <span className="text-lg sm:text-xl font-semibold text-black">pharmaLink</span>
        </div>
        <div className="flex items-center">
          {user ? <SignOut /> : <SignIn />}
        </div>
      </nav>
      <div className="mt-12 sm:mt-16"></div> {/* Adjusted spacer for mobile */}
    </>
  );
};

export default Navbar;
