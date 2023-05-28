import React from "react";
import styles from "../style";

import Logo from "../assets/Image/logo-vr.png";
import { footerLinks, socialMedia } from "../constants";
import { facebook, twitter } from "../assets";

const Footer = () => (
  <section className={`w-full items-center ${styles.paddingY} flex-col`}>
    <div className={"flex flex-row justify-between items-center mb-8 w-full"}>
      <div>
        <img
          src={Logo}
          alt="VR Lab"
          className="w-[100px] h-[100px] object-contain"
        />
      </div>

      <div className="flex flex-row items-center space-x-6">
        <h1 className="font-poppins text-white">Privacy& Policy</h1>
        <img src={facebook} className="w-[30px] h-[30px] object-contain" />
        <img src={twitter} className="w-[30px] h-[30px] object-contain" />
      </div>
    </div>
  </section>
);

export default Footer;
