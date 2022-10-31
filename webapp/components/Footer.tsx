import Link from "next/link"
import Logo from "./common/Logo"

const Footer = () => {
  return (
    <footer className="flex flex-col p-4 bg-slate-100 h-60">
      <div className="sm:flex sm:items-center sm:justify-between flex justify-between items-center">
        <Logo />
        <ul className="flex gap-8 items-center mb-6 text-m text-gray-500 sm:mb-0 dark:text-gray-400">
          <li>
            <Link className="mr-4 hover:underline md:mr-6 " href="/about">
              <p>About</p>
            </Link>
          </li>
          <li>
            <Link className="mr-4 hover:underline md:mr-6 " href="/privacy">
              <p>Privacy</p>
            </Link>
          </li>
          <li>
            <Link className="mr-4 hover:underline md:mr-6 " href="/terms">
              <p>Terms</p>
            </Link>
          </li>
          <li>
          <Link className="mr-4 hover:underline md:mr-6 " href="/contact">
              <p>Contact</p>
            </Link>
          </li>
        </ul>
      </div>
      <section className="flex justify-center mt-auto">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          &copy; 2022 Plantarium. All rights reserved.
        </p>
       </section>
    </footer>
  )
}

export default Footer;
         