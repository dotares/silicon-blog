import React from "react";
import Article from "../_components/_blogComponents/Article";
import Navbar from "../_components/_globalComponents/Navbar";
import Footer from "../_components/_globalComponents/Footer";

const page = () => {
  return (
    <div>
      <Navbar />
      <Article />
      <Article />
      <Article />
      <Article />
      <Article />
      <Footer />
    </div>
  );
};

export default page;
