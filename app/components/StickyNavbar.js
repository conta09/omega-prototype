import React, { useState } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import Image from "next/image";
import AuthComponent from "./AuthComponent"; // Adjust the import based on your file structure
import LogReg from "./LogReg";

export function StickyNavbar() {
  const [openNav, setOpenNav] = React.useState(false);
  const [showAuth, setShowAuth] = useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="m-4 text-[1rem] font-medium"
      >
        <a href="#" className="flex items-center">
          Services
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="m-4 text-[1rem] font-medium"
      >
        <a href="#" className="flex items-center">
          Contact us
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="m-4 text-[1rem] font-medium"
      >
        <a href="#" className="flex items-center">
          faqs
        </a>
      </Typography>
    </ul>
  );

  return (
    <div className="w-full">
      <Navbar className=" border-none top-0 z-10 max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4 bg-black">
        <div className="flex items-center justify-between text-white">
          <div>
            <Image className="m-5" src="/omega-logo.png" alt="Momo" width={100} height={160} />
          </div>

          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            <div className="flex items-center gap-x-1">
              <Button
                variant="text"
                size="sm"
                className="hidden lg:inline-block text-white"
                onClick={() => setShowAuth(true)} // Show the AuthComponent
              >
                <span>Log In</span>
              </Button>
              <Button
                variant="gradient"
                size="sm"
                className="hidden lg:inline-block bg-[#3540bf] text-white"
                onClick={() => setShowAuth(true)} // Show the AuthComponent

              >
                <span>Sign up</span>
              </Button>
            </div>
            <IconButton
              variant="text"
              className="ml-auto p-5 h-6 w-6 text-white hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav open={openNav}>
          {navList}
          <div className="flex items-center gap-x-1">
            <Button                 onClick={() => setShowAuth(true)} // Show the AuthComponent
              fullWidth variant="text" size="sm" className="text-white">
              <span>Log In</span>
            </Button>
            <Button                 onClick={() => setShowAuth(true)} // Show the AuthComponent
                     fullWidth variant="gradient" size="sm" className="bg-gradient-to-r from-blue-500 to-blue-700 text-white">
              <span>Sign in</span>
            </Button>
          </div>
        </MobileNav>
      </Navbar>
      {showAuth && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className=" p-8 rounded-lg shadow-md w-96">
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              onClick={() => setShowAuth(false)} // Close the AuthComponent
            >
              &times;
            </button>
            <AuthComponent />
          </div>
        </div>
      )}
    </div>
  );
}
