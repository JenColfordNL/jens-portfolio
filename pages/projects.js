import Head from "next/head";
import Navbar from "@component/components/Navbar";
import Navstyles from "../styles/Navbar.module.css";
import Footer from "@component/components/Footer";

// import { Inter } from "next/font/google";
import Projstyles from "../styles/Projects.module.css";
import Image from "next/image";
import Link from "next/link";

// const inter = Inter({ subsets: ["latin"] });

export default function projects() {
  return (
    <div>
      <Navbar className={Navstyles.Navbar} />
      {/* <Head>
        <title>My Passion Project</title>
      </Head> */}
      {/* <div className={Projstyles.snackcontainer}> */}
      <div className={Projstyles.about}>
        <h2 className={Projstyles.heading}> The Snack Tracker </h2>
        <div className={Projstyles.box}>
          <Image
            className={Projstyles.pic}
            src={"/pic.png"}
            alt="Picture of Snack Tracker's future design"
            width="200"
            height="400"
          />

          <p className={Projstyles.para}>
            I built this application to reward my son's <br />
            healthy snacking as his adhd medication <br />
            supresses his appetite.
            <br />I am currently learning React Native and AWS Amplify <br />
            to further develop the app and enhance user experience.
          </p>
        </div>
        <div className={Projstyles.click}>
          <a
            className={Projstyles.link}
            href="https://snacktracker.ca"
            target={"_blank"}
            rel="noreferrer"
          >
            <button className={Projstyles.button}>
              Click to Visit Snack Tracker
            </button>
          </a>
        </div>

        <Footer />
      </div>
    </div>
  );
}
