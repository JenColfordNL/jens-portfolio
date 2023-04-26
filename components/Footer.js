import React from "react";

import { FaLinkedinIn } from "react-icons/fa";
import { GoMarkGithub } from "react-icons/go";
import { HiOutlineMail } from "react-icons/hi";
import FooterStyles from "../styles/Footer.module.css";

function Footer() {
  return (
    <div className={FooterStyles.footer}>
      <div className={FooterStyles.socials}>
        <a
          className={FooterStyles.linkedin}
          href="https://linkedin.com/in/jen-colford"
          target={"_blank"}
          rel="noreferrer"
        >
          <FaLinkedinIn />
        </a>
        <a
          className={FooterStyles.github}
          href="https://github.com/jencolfordnl"
          target={"_blank"}
          rel="noreferrer"
        >
          <GoMarkGithub />
        </a>
        <a
          className={FooterStyles.email}
          href="mailto:jencolford@gmail.com"
          target={"_blank"}
          rel="noreferrer"
        >
          <HiOutlineMail />
        </a>
      </div>
      <p className={FooterStyles.copy}> &copy; 2023 jencolford.ca</p>
    </div>
  );
}

export default Footer;
