import Link from "next/link";
import styles from "@/styles/Home.module.css";

const Navbar = () => {
  return (
    <nav className={styles.mainnav}>
          <ul>
          <Link href="/" legacyBehavior>
              <a className="a">
              <li>Home</li></a>
            </Link>
            <Link href="/about">
              <li>About</li>
            </Link>
            <Link href="/blog">
              <li>Blog</li>
            </Link>
            <Link href="/contact">
              <li>Contact</li>
            </Link>
          </ul>
        </nav>
  )
}

export default Navbar
