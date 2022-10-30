import Link from "next/link";
import { useUser, useLogout } from "../hooks/user";

const NavBar = () => {
  const user = useUser();
  const logout = useLogout();
  
  const renderCartLink = () => {
    if(user) {
      return (
        <li>
        <Link href="/cart">
          <p>Cart</p>
        </Link>
      </li>
      )
    }
  }

  return (
    <nav className="bg-white px-2 sm:px-4 py-4 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
      <ul className="flex justify-between">
        <li>
          <Link href="/">
            <p>Home</p>
          </Link>
        </li>
        <div className="flex gap-4">
          {renderCartLink()}
          { user ? (
            <li>
              <button onClick={logout}>
              {user && user.name} Logout
              </button>
            </li> ) : (
            <li>
              <Link href="/sign-in">
                <p>Sign In</p>
              </Link>
            </li>
          )}
        </div>
      </ul>
    </nav>
  )
}

export default NavBar;