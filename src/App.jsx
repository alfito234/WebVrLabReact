import React from "react";

import {
  Navbar,
  Billing,
  CardDeal,
  About,
  Clients,
  CTA,
  Product,
  Footer,
  Testimonials,
  Hero,
} from "./components";

const App = () => (
  <div className="bg-[#2B2B2B] w-full overflow-hidden">
    <div className="flex justify-center items-center sm:px-16 px-6">
      <div className="xl:max-w-[1280-px] w-full">
        <Navbar />
      </div>
    </div>

    <div className="bg-[#2B2B2B] flex justify-center items-start">
      <div className="xl:max-w-[1280-px] w-full">
        <Hero />
      </div>
    </div>

    <div className="bg-[#FFFFFF] sm:px-16 px-6 flex justify-center items-start">
      <div className="xl:max-w-[1280-px] w-full">
        <Product />
      </div>
    </div>
    <div className="bg-[#FFFFFF] sm:pl-16 pl-6 flex justify-center items-start">
      <About />
    </div>
    <div className="sm:px-16 px-6 flex items-start">
      <Footer />
    </div>
  </div>
);

export default App;