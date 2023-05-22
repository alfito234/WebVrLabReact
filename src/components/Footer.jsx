import React from "react";
import styles from "../style";

import Logo from "../assets/Image/logo-vr.png";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart} md:flex-row flex-col items-center mb-8 w-full`}>
      <div>
        <img src={Logo} alt="VR Lab" className="w-[100px] h-[100px] object-contain"/>
      </div>
      <h1>Hello</h1>
    </div>
  </section>
);

export default Footer;
