import React from "react";
import styles from "../style";

import ImgAbout from "../assets/Image/img-about.png";

const About = () => (
  <section id="about" className={`flex sm:pl-16 pl-6`}>
    <div className="flex flex-row mb-28 gap-20">
      <div className="flex flex-1 flex-col justify-center">
        <h1 className="font-poppins mb-5 font-semibold xl:text-[36px] text-[45px] sm:text-start text-center text-black">
          About
        </h1>
        <p className="font-poppins font-normal md:text-[18px] sm:text-[16px] text-12px mb-10">
          Sebuah laboratorium yang dirancang untuk mengembangkan teknologi
          virtual reality dan aplikasinya. Di dalam VR Lab, pengguna dapat
          berinteraksi dengan dunia maya melalui headset VR, sarana input
          seperti sensor gerakan, dan perangkat keras lainnya.
        </p>
        <button className="bg-[#212121] px-20 py-5 rounded-full">
          <p className="font-poppins font-bold text-white">Ask For More</p>
        </button>
      </div>
      <div className="flex flex-1 justify-end">
        <img src={ImgAbout} className="object-contain" />
      </div>
    </div>
  </section>
);

export default About;
