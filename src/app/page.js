"use client";

import React from "react";
import Lottie from "lottie-react";
import animationData from "@/animations/Animation - 1698662979518.json";

const page = () => {
  return (
    <div className="text-center">
      <Lottie animationData={animationData} />
      <h1 className="text-2xl font-bold">
        الموقع تحت الصيانة والتعديل أنتظرونا...
      </h1>
    </div>
  );
};

export default page;
