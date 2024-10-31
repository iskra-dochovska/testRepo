import React from "react";
import Header from "./Header";
import Bars from "./Bars";
import Footer from "./Footer"; 
import '../styles/globals.css';

const Card: React.FC = () => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-md max-w-sm">
      <Header />
      <Bars /> 
      <Footer />
    </div>
  );
};

export default Card;
