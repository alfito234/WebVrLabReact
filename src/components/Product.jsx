import React from "react";
import styles from "../style";

import Product1 from "../assets/Product/summarecon.png";

const Product = () => (
  <section
    id="product"
    className="flex justify-center flex-col xl:px-20 sm:px-16 px-10 py-10 mb-6"
  >
    <h1 className="font-poppins mb-10 font-semibold xl:text-[36px] text-[45px] sm:text-start text-center text-black">
      Product
    </h1>
    <div className="grid sm:grid-cols-3 grid-cols-2 sm:mx-0 xl:gap-28 md:gap-20 sm:gap-14 gap-10 mb-16">
      <a href="#">
        <div className="rounded-3xl">
          <img src={Product1} className="w-full mb-6" />
          <h3 className="font-poppins font-semibold mb-1 md:text-[16px] text-[12px]">
            Summarecon
          </h3>
          <p className="font-poppins font-medium mb-2 text-[#999999]">
            House Tour
          </p>
          <p className="font-poppins font-normal text-[12px] text-[#333333]">
            There are many variations of passages of Lorem Ipsum available, but
            the majority.
          </p>
        </div>
      </a>
      <a href="#">
        <div className="rounded-3xl">
          <img src={Product1} className="sm:w-full mb-6" />
          <h3 className="font-poppins font-semibold mb-1 md:text-[16px] text-[12px]">
            Summarecon
          </h3>
          <p className="font-poppins font-medium mb-2 text-[#999999]">
            House Tour
          </p>
          <p className="font-poppins font-normal text-[12px] text-[#333333]">
            There are many variations of passages of Lorem Ipsum available, but
            the majority.
          </p>
        </div>
      </a>
      <a href="#">
        <div className="rounded-3xl">
          <img src={Product1} className="w-full mb-6" />
          <h3 className="font-poppins font-semibold mb-1 md:text-[16px] text-[12px]">
            Summarecon
          </h3>
          <p className="font-poppins font-medium mb-2 text-[#999999]">
            House Tour
          </p>
          <p className="font-poppins font-normal text-[12px] text-[#333333]">
            There are many variations of passages of Lorem Ipsum available, but
            the majority.
          </p>
        </div>
      </a>
    </div>
    <hr
      style={{
        background: "#A4A1A1",
        color: "#A4A1A1",
        borderColor: "#A4A1A1",
        height: "1px",
      }}
    />
  </section>
);

export default Product;
