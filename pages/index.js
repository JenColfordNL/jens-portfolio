import Head from "next/head";
import Navbar from "@component/components/Navbar";
import navStyles from "../styles/Navbar.module.css";
import Footer from "@component/components/Footer";
import Exstyles from "../styles/Experience.module.css";
import Image from "next/image";
// import { Inter } from "next/font/google";
import styles from "../styles/Home.module.css";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Navbar className={navStyles.Navbar} />
      <Head>
        <title>Jen's Portfolio</title>
      </Head>
      <div className="home">
        <div className="about">
          <h2> Jen Colford</h2>
          <div className="prompt">
            <p>
              A software developer who wants to create meaningful change through
              technology
            </p>
          </div>
        </div>

        <div className="skills">
          <h1>Skills</h1>

          <ol className="list">
            <li className="item">
              <h2> Front-End</h2>
              <span>
                {" "}
                HTML, CSS, JavaScript, React, Next.JS, Node.JS, Bootstrap,
                MaterialUI
              </span>
            </li>
            <li className="item">
              <h2> Back-End</h2>
              <span>NodeJS, Java, ExpressJS, MongoDB, PostgresSQL, AWS</span>
            </li>
            <li className="item">
              <h2> Languages</h2>
              <span>Python, JavaScript, Java (currently learning C)</span>
            </li>
          </ol>
        </div>
      </div>
      <Footer />
    </div>
  );
}
