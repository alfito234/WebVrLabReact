import styles from "../style";
import AOS from "aos";
import "aos/dist/aos.css";
import Ilustrasi from "../assets/Image/ilustrasi.png";
import Vr from "../assets/Icon/vr.png";

const Hero = () => (
  <section id="home" className={`flex md:flex-row flex-col ${styles.paddingX}`}>
    <div
      className={`flex-1 ${styles.flexStart} flex-col xl:px-20 sm:px-16 px-20`}
    >
      <div className="flex justify-center items-center w-full">
        <div data-aos="fade-right">
          <h1 className="font-poppins mb-10 font-bold text-[52px] text-white">
            Virtual Reality LAB
          </h1>
          <p className="font-poppins mb-10 font-normal text-[20px] text-white">
            Berinteraksi dengan dunia maya melalui headset VR, sarana input
            seperti sensor gerakan, dan visual yang ciamik
          </p>
          <a
            href="#"
            className="flex flex-row w-[292px] rounded-full items-center transition ease-in-out bg-[#06E3FF] hover:bg-[#00BAD1] hover:-translate-y-1 hover:scale-110 px-20 py-5 text-lg font-bold duration-200 ..."
          >
            <p>Experience</p>
            <img src={Vr} className="ml-5 w-[24px] h-[24px]" />
          </a>
        </div>
      </div>
    </div>
    <div className="flex flex-1 justify-center">
      <img src={Ilustrasi} alt="user vr" className="w-[590px] relative" />
    </div>
  </section>
);

export default Hero;
