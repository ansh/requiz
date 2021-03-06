import { useState } from "react";
import Link from "next/link";
import { useUser } from "../utils/auth/useUser";

export default function Navbar({ logo }) {
  const { user, logout } = useUser();
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/*  Mobile menu button*/}
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/*  Icon when menu is closed. 
          {/* 
            Heroicon name: menu 

            Menu open: "hidden", Menu closed: "block"
          */}
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/*  Icon when menu is open. */}
              {/* 
            Heroicon name: x

            Menu open: "block", Menu closed: "hidden"
          */}
              <svg
                className="hidden h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            {logo && (
              <div className="flex-shrink-0 flex items-center">
                <img
                  className="block lg:hidden h-8 w-auto"
                  src="./logo.png"
                  alt="Workflow"
                />
                <img
                  className="hidden lg:block h-8 w-auto"
                  src="./logo.png"
                  alt="Workflow"
                />
              </div>
            )}
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                {/*  Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                <Link href="/">
                  <a className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    Home
                  </a>
                </Link>
                {user && (
                  <Link href="/dashboard">
                    <a className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                      Dashboard
                    </a>
                  </Link>
                )}
                <Link href="/about">
                  <a className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    About
                  </a>
                </Link>
                <Link href="/contact">
                  <a className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    Contact Us
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div
              className="ml-3 relative"
              tabIndex="0"
              onBlur={() => setNotificationsOpen(false)}
            >
              <button
                onClick={() => setNotificationsOpen(!notificationsOpen)}
                className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500"
              >
                <span className="sr-only">View notifications</span>
                {/*  Heroicon name: bell */}
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
              </button>

              {notificationsOpen && (
                <div
                  className="z-10 origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="notification-menu"
                >
                  <ul>
                    <li className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Notification 1
                    </li>
                    <li className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Notification 1
                    </li>
                    <li className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Notification 1
                    </li>
                  </ul>
                </div>
              )}
            </div>

            {/*  Profile dropdown */}
            {user ? (
              <div
                className="ml-3 relative"
                onBlur={() => setUserMenuOpen(false)}
                tabIndex="0"
              >
                <div>
                  <button
                    onClick={() => setUserMenuOpen(!userMenuOpen)}
                    className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500"
                    id="user-menu"
                    aria-haspopup="true"
                  >
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="h-8 w-8 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </button>
                </div>
                {/* 
            Profile dropdown panel, show/hide based on dropdown state.

            Entering: "transition ease-out duration-100"
              From: "transform opacity-0 scale-95"
              To: "transform opacity-100 scale-100"
            Leaving: "transition ease-in duration-75"
              From: "transform opacity-100 scale-100"
              To: "transform opacity-0 scale-95"
          */}
                {userMenuOpen && (
                  <div
                    className="z-10 origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="user-menu"
                  >
                    <Link href="/profile">
                      <a
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                      >
                        Your Profile
                      </a>
                    </Link>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      Settings
                    </a>
                    <button onClick={() => logout()}>
                      <a
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                      >
                        Sign out
                      </a>
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div>
                <Link href="/auth">
                  <a className="text-gray-200 text-md font-medium">
                    Login/Register
                  </a>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 
    Mobile menu, toggle classNamees based on menu state.

    Menu open: "block", Menu closed: "hidden"
  */}
      <div className="hidden sm:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1">
          {/*  Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
          <a
            href="#"
            className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Dashboard
          </a>
          <a
            href="#"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Team
          </a>
          <a
            href="#"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Projects
          </a>
          <a
            href="#"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Calendar
          </a>
        </div>
      </div>
    </nav>
  );
}
